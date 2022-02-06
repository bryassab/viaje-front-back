using System;

namespace viaje.Modals
{
    public class Gastos
    {
        public int id { get; set; }
        public DateTime Fecha { get; set; }
        public string Nombre { get; set; }
        public string Proveedor { get; set; }
        public int Transportes { get; set; }
        public int Hotel { get; set; }
        public int Alimentacion { get; set; }
        public int Otros { get; set; }
        public string Descripcion { get; set; }
        public int Total { get; set; }

    }
}
