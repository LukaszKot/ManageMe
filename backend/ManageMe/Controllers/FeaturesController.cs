using ManageMe.Dtos;
using Microsoft.AspNetCore.Mvc;

namespace ManageMe.Controllers;

[ApiController]
[Route("[controller]")]
public class FeaturesController : ControllerBase
{
    [HttpPost]
    public IEnumerable<WeatherForecast> Add([FromBody]AddFeatureCommand command)
    {
        throw new NotImplementedException();
    }
}