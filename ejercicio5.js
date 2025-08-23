class CuentaBancaria{
    constructor(titular, saldo){
        this.titular = titular
        this.saldo = saldo
    }

    mostrarSaldo(){
        return `El saldo es ${this.saldo} pesos`
    }
}
