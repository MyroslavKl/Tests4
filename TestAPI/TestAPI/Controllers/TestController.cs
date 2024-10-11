using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace TestAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TestController : ControllerBase
    {
        [HttpGet("Hello")]
        public IActionResult GetHello([FromQuery] string name)
        {
            return Ok($"Hello {name}");
        }
    }
}
