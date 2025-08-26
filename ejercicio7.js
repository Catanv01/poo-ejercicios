class Vehiculo {
    mover(){
        console.log("El vehiculo se mueve")
    }
}
class Bicicleta extends Vehiculo{
    mover(){
        console.log("La bicicleta pedalea")
    }
}
class Coche extends Vehiculo{
    mover(){
        console.log("El coche rueda")
    }
}
class Avion extends Vehiculo{
    mover(){
        console.log("El avión vuela")
    }
}
const miBicicleta = new Bicicleta()
miBicicleta.mover()
const miCoche = new Coche()
miCoche.mover()
const miAvion = new Avion()
miAvion.mover()