using Microsoft.AspNetCore.Mvc;
using System;
using System.Data;
using System.Linq;
using viaje.Context;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace viaje.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SolicitudesController : ControllerBase
    {

        private readonly AppDbContext context;

        public SolicitudesController(AppDbContext context)
        {
            this.context = context;
        }
        // GET: api/<SolicitudesController>
        [HttpGet]
        public ActionResult Get()
        {
            try
            {
                return Ok(context.APROBAR.Where(x => x.Estado != null).ToList());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }


        }

        // GET api/<SolicitudesController>/5
        [HttpGet("{id}", Name = "Solicitudes")]
        public ActionResult Get(int id)
        {
            try
            {
                var solicitud = context.APROBAR.FirstOrDefault(g => g.id == id);
                return Ok(solicitud);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }




        // PUT api/<SolicitudesController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<SolicitudesController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
