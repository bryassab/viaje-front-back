using Microsoft.EntityFrameworkCore;
using viaje.Modals;


namespace viaje.Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }
        public DbSet<Gestor_Bd> APROBAR { get; set; }
        public DbSet<Gastos> GASTOS { get; set; }


    }
}
