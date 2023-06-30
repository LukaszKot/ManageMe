using ManageMe.Database;
using ManageMe.Database.Models;
using ManageMe.Dtos;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Task = ManageMe.Database.Models.Task;

namespace ManageMe.Controllers;

[ApiController]
[Route("[controller]")]
public class TasksController : ControllerBase
{
    private readonly AppDbContext _dbContext;

    public TasksController(AppDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    [HttpPost]
    public async Task<IActionResult> Add([FromBody]AddTaskCommand command)
    {
        var feature = await _dbContext.Features.SingleOrDefaultAsync(x => x.UniqueEntityId == command.FeatureId);

        var task = new Task
        {
            Name = command.Name,
            Description = command.Description,
            AssignedUser = null,
            Priority = command.Priority,
            State = command.State,
            ExpectedTime = command.ExpectedTime,
            CreatedOn = command.CreatedOn,
            FeatureId = feature!.Id
        };
        
        var uniqueEntity = new UniqueEntity { Task = task };
        var result=  await _dbContext.AddAsync(uniqueEntity);
        await _dbContext.SaveChangesAsync();

        var response = result.Entity.Task;
        response!.Id = result.Entity.Id;
        return Ok(response);
    }
    
    [HttpPut]
    public async Task<IActionResult> Update([FromBody]UpdateTaskCommand command)
    {
        var task = (await _dbContext.Tasks.SingleOrDefaultAsync(x => x.UniqueEntityId == command.Id));
        task!.Description = command.Description;
        task.Priority = command.Priority;
        task.State = command.State;
        task.Name = command.Name;
        task.ExpectedTime = command.ExpectedTime;
        task.AssignedUser = command.AssignedUser;
        task.StartedOn = command.StartedOn;
        task.EndedOn = command.EndedOn;
        if (command.FeatureId != task.FeatureId)
        {
            task.FeatureId = command.FeatureId;
        }
        
        _dbContext.Update(task);
        await _dbContext.SaveChangesAsync();
        return Ok();
    }
    
    [HttpGet]
    public async Task<IEnumerable<Task>> GetAll()
    {
        var features = await _dbContext.Tasks.ToListAsync();
        return features.Select(x =>
        {
            x.Id = x.UniqueEntityId;
            return x;
        });
    }
    
    [HttpGet("{id}")]
    public async Task<Task> Get(int id)
    {
        var feature = await _dbContext.Tasks.SingleOrDefaultAsync(x => x.UniqueEntityId == id);
        feature!.Id = feature.UniqueEntityId;
        return feature!;
    }
    
    
    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        await _dbContext.Tasks.Where(x => x.UniqueEntityId == id).ExecuteDeleteAsync();
        await _dbContext.SaveChangesAsync();
        return Ok();
    }
}