class Rectangulo {
    constructor(ancho, alto){
        this.ancho = ancho,
        this.alto = alto
    }

    area(){
        const area = this.ancho * this.alto
        console.log("El area es:" + area)
    }

    perimetro(){
        const perimetro = this.ancho + this.ancho + this.alto + this.alto
        console.log("El perimetro es:" + perimetro)
    }
    esCuadrado(){
        return this.ancho === this.alto
    }
}
const miRectangulo = new Rectangulo(5, 5)
console.log(miRectangulo.esCuadrado())
miRectangulo.area()
miRectangulo.perimetro()
