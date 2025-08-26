class Animal {
    hacerSonido(){
        console.log("Trrrrr")
    }
}

class Perro extends Animal {
    constructor(){
        super()
    }
    hacerSonido(){
        console.log("GUAU")
    }
}

class Gato extends Animal {
    constructor(){
        super()
    }
    hacerSonido(){
        console.log("MIAU")
    }
}

const miPerro = new Perro()
miPerro.hacerSonido()
const miGato = new Gato()
miGato.hacerSonido()