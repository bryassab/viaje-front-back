
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
    public class GestorController : ControllerBase
    {
        private readonly AppDbContext context;

        public GestorController(AppDbContext context)
        {
            this.context = context;
        }
        // GET: api/<GestorController>
        [HttpGet]
        public ActionResult Get()
        {
            try
            {
                return Ok(context.APROBAR.Where(x => x.Estado == null).ToList());

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }


        // GET api/<GestorController>/5
        [HttpGet("{id}", Name = "GetGestor")]
        public ActionResult Get(int id)
        {
            try
            {
                var gestor = context.APROBAR.FirstOrDefault(g => g.id == id);
                return Ok(gestor);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // POST api/<GestorController>
        [HttpPost]
        public ActionResult Post([FromBody] Gestor_Bd gestor)
        {
            try
            {
                context.APROBAR.Add(gestor);
                context.SaveChanges();
                return CreatedAtRoute("GetGestor", new { id = gestor.id }, gestor);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // PUT api/<GestorController>/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] Gestor_Bd gestor)
        {
            try
            {
                var updates = context.APROBAR.Where(x => x.id == id).FirstOrDefault();
                if (updates != null)
                {
                    updates.Responsable = gestor.Responsable;
                    updates.Estado = gestor.Estado;
                    context.APROBAR.Update(updates);
                    context.SaveChanges();
                    return CreatedAtRoute("GetGestor", new { id = gestor.id }, gestor);
                }
                else
                {
                    return BadRequest();
                }


            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        // DELETE api/<GestorController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            try
            {
                var gestor = context.APROBAR.FirstOrDefault(g => g.id == id);
                if (gestor == null)
                {
                    context.APROBAR.Remove(gestor);
                    context.SaveChanges();
                    return Ok(id);
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}