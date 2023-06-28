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
        _dbContext.Add(feature);
        await _dbContext.SaveChangesAsync();
        return Ok();
    }
    
    [HttpPut]
    public async Task<IActionResult> Update([FromBody]UpdateFeatureCommand command)
    {
        var feature = await _dbContext.Features.SingleOrDefaultAsync(x => x.Id == command.Id);
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
        return features;
    }
    
    [HttpGet("{id}")]
    public async Task<Feature> Get(int id)
    {
        var feature = await _dbContext.Features.SingleOrDefaultAsync(x => x.Id == id);
        return feature!;
    }
    
    
    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        await _dbContext.Features.Where(x => x.Id == id).ExecuteDeleteAsync();
        await _dbContext.SaveChangesAsync();
        return Ok();
    }
}