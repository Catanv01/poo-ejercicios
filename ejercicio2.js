class Rectangulo {
    constructor(ancho, alto){
        this.ancho = ancho,
        this.alto = alto
    }

    calcularArea(){
        const area = this.ancho * this.alto
        console.log("El area es:" + area)
    }

    calcularPerimetro(){
        const perimetro = this.ancho + this.ancho + this.alto + this.alto
        console.log("El perimetro es:" + perimetro)
    }
    esCuadrado(){
        return this.ancho === this.alto
    }
}
const miRectangulo = new Rectangulo(2, 5)
console.log(miRectangulo.esCuadrado())
miRectangulo.calcularArea()
miRectangulo.calcularPerimetro()
