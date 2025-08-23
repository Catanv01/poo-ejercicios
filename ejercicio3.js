class Persona {
    constructor(nombre, edad, profesion){
        this.nombre = nombre
        this.edad = edad
        this.profesion = profesion
    }

    mostrarInfo(){
        console.log(`El nombre es ${this.nombre}, tiene ${this.edad} años y es ${this.profesion} `)
    }

    esMayor(){
        if (this.edad > 18) {
            console.log("Usted es mayor de edad")
        }else{
            console.log("Es menor de edad")
        }
    }
}
const miPersona = new Persona("cata", 15, "diseñadora")
miPersona.mostrarInfo()
miPersona.esMayor()