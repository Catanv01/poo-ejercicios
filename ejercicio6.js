class Triangulo {
    constructor(lado1, lado2, lado3){
        this.lado1 = lado1
        this.lado2 = lado2
        this.lado3 = lado3
    }

    determinarTipoTriangulo(){
        if (this.lado1 === this.lado2 && this.lado3 === this.lado1) {
            console.log("Es equilatero") 
        }else if(this.lado1 === this.lado2 || this.lado2 === this.lado3 || this.lado3 === this.lado1){
            console.log("Es isosceles")
        }else{
            console.log("Es escaleno")
        }
    }
}
const miTriangulo = new Triangulo(2,2,2)
miTriangulo.determinarTipoTriangulo()