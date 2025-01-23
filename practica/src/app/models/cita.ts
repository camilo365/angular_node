export class Cita{

    Nombre: String;
    Apellido: String;
    Edad: Number;
    F_cita: Date;
    Hora: Date

    constructor(Nombre:String, Apellido:String, Edad: Number, F_cita: Date, Hora: Date){
        this.Nombre = Nombre;
        this.Apellido = Apellido;
        this.Edad = Edad;
        this.F_cita = F_cita;
        this.Hora = Hora;
    }

}