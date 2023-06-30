using ManageMe.Database;
using ManageMe.Database.Models;
using ManageMe.Dtos;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ManageMe.Controllers;

[ApiController]
[Route("[controller]")]
public class FeaturesController : ControllerBase
{
    private readonly AppDbContext _dbContext;

    public FeaturesController(AppDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    [HttpPost]
    public async Task<IActionResult> Add([FromBody]AddFeatureCommand command)
    {
        var feature = new Feature
        {
            Description = command.Description,
            Name = command.Name,
            Priority = command.Priority,
            State = command.State
        };

        var uniqueEntity = new UniqueEntity { Feature = feature };
        var result=  await _dbContext.AddAsync(uniqueEntity);
        await _dbContext.SaveChangesAsync();

        var response = result.Entity.Feature;
        response!.Id = result.Entity.Id;
        return Ok(response);
    }
    
    [HttpPut]
    public async Task<IActionResult> Update([FromBody]UpdateFeatureCommand command)
    {
        var feature = (await _dbContext.Features.SingleOrDefaultAsync(x => x.UniqueEntityId == command.Id));
        feature!.Description = command.Description;
        feature.Priority = command.Priority;
        feature.State = command.State;
        feature.Name = command.Name;
        _dbContext.Update(feature);
        await _dbContext.SaveChangesAsync();
        return Ok();
    }
    
    [HttpGet]
    public async Task<IEnumerable<Feature>> GetAll()
    {
        var features = await _dbContext.Features.ToListAsync();
        return features.Select(x =>
        {
            x.Id = x.UniqueEntityId;
            return x;
        });
    }
    
    [HttpGet("{id}")]
    public async Task<Feature> Get(int id)
    {
        var feature = await _dbContext.Features.Include(x => x.Tasks).SingleOrDefaultAsync(x => x.UniqueEntityId == id);
        feature!.Id = feature.UniqueEntityId;
        feature.Tasks = feature.Tasks.Select(x =>
        {
            x.Id = x.UniqueEntityId;
            return x;
        }).ToList();
        return feature!;
    }
    
    
    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        await _dbContext.Features.Where(x => x.UniqueEntityId == id).ExecuteDeleteAsync();
        await _dbContext.SaveChangesAsync();
        return Ok();
    }
}