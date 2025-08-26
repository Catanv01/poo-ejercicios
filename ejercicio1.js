class Coche {
    constructor(marca, modelo, año){
        this.marca = marca,
        this.modelo = modelo,
        this.año = año
    }

    mostrarInfo(){
        console.log(`El carro es ${this.marca} ${this.modelo} ${this.año} `)
    }
    esAntiguo(){
        return this.año < 2000
    }
    esDeLujo(){
        const cocheLujo = ["Mercedes", "BMW", "Audi"]
        return cocheLujo.includes(this.marca)
    }

}
const miCoche = new Coche("BMW", "picanto", 1999)
miCoche.mostrarInfo()
console.log(miCoche.esAntiguo())
console.log(miCoche.esDeLujo())

