using System;
using System.ComponentModel;

namespace viaje.Modals
{

    public class Gestor_Bd
    {
        public int id { get; set; }
        [DisplayName("Documento : ")]
        public string Documento { get; set; }
        [DisplayName("Nombre : ")]
        public string Nombre { get; set; }
        [DisplayName("Fecha : ")]
        public DateTime Fecha { get; set; }
        [DisplayName("Presupuesto_Solicitado : ")]
        public int Presupuesto_Solicitado { get; set; }
        [DisplayName("Division : ")]
        public string Division { get; set; }
        [DisplayName("Telefono : ")]
        public string Telefono { get; set; }
        [DisplayName("Correo : ")]
        public string Correo { get; set; }
        [DisplayName("Responsable : ")]
        public string Responsable { get; set; }
        [DisplayName("Estado : ")]
        public string Estado { get; set; }



    }

}
