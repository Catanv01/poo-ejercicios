class Libro{
    constructor(titulo, autor, año){
        this.titulo = titulo
        this.autor = autor
        this.año = año
    }

    mostrarInfo(){
        console.log(`El libro es ${this.titulo}, escrito por ${this.autor} en el año ${this.año}`)
    }

    esAntiguo(){
        return this.año < 1950
    }
}
const nuevoLibro = new Libro("El principito", "Antoine Marie", 1943)
nuevoLibro.mostrarInfo()
console.log(nuevoLibro.esAntiguo())