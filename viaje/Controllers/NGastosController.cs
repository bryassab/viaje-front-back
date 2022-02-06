using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using viaje.Context;
using viaje.Modals;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace viaje.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NGastosController : ControllerBase
    {

        private readonly AppDbContext context;

        public NGastosController(AppDbContext context)
        {
            this.context = context;
        }
        // GET: api/<GestorController>
        [HttpGet]
        public ActionResult Get()
        {
            try
            {
                return Ok(context.GASTOS.ToList());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        // GET api/<GestorController>/5
        [HttpGet("{id}", Name = "Ngastos")]
        public ActionResult Get(int id)
        {
            try
            {
                var ngasto = context.GASTOS.FirstOrDefault(x => x.id == id);
                return Ok(ngasto);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // POST api/<NGastosController>
        [HttpPost]
        public ActionResult Post([FromBody] Gastos ngasto)
        {
            try
            {
                context.GASTOS.Add(ngasto);
                context.SaveChanges();
                return CreatedAtRoute("Ngastos", new { id = ngasto.id }, ngasto);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // PUT api/<NGastosController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<NGastosController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
