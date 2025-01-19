using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace pwa_api.Controllers;

[Route("api/[controller]")]
[ApiController]
public class ValuesController : ControllerBase
{
    // GET api/values
    [HttpGet]
    public ActionResult<IEnumerable<string>> Get()
    {
        return new string[] { "value1", "value2" };
    }

    //Get api/values/5
    [HttpGet("{id}")]
    public ActionResult<string> Get(int id)
    {
        return "value";
    }

    //Post api/values
    [HttpPost]
    public ActionResult<string> Post([FromBody] string value)
    {
        return Ok();
    }

    //PUT api/values/5
    [HttpPut("{id}")]
    public ActionResult<string> Put(int id, [FromBody] string value)
    {
        return Ok();
    }

    // DELETE api/values/5
    [HttpDelete("{id}")]
    public ActionResult<string> Delete(int id)
    {
        return Ok();
    }

}