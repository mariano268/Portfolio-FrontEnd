export class Educacion {
    id?: number;
    nombre: string;
    descripcion: string;
    imagen: string;

    constructor(nombre: string, descripcion: string , imagen: string) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }
}