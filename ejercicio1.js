class Coche {
    constructor(marca, modelo, año){
        this.marca = marca,
        this.modelo = modelo,
        this.año = año
    }

    informacion(){
        console.log(`El carro es ${this.marca} ${this.modelo} ${this.año} `)
    }
    antiguedad(){
    if (this.año < 2000) {
        console.log("Es un coche antiguo")
    } 
    }
    lujo(){
        const cocheLujo = ["Mercedes", "BMW", "Audi"]
        return cocheLujo.includes(this.marca)
    }

}
const miCoche = new Coche("Kia", "picanto", 2006)
miCoche.informacion()
miCoche.antiguedad()
console.log(miCoche.lujo())

