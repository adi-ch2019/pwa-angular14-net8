using Microsoft.AspNetCore.Mvc;

namespace pwa_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GreetingsController:ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            //return Ok("Welcome to PWA!");
            return Ok(new { message = "Welcome to PWA!" });
        }
    }
}