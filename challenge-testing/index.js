class CarritoCompra {

    constructor(){
        this.listaDeCompras = []
    }

    agregarProducto(nuevoProducto){
        this.listaDeCompras.push(nuevoProducto)
    }

    calcularTotal(){
        return this.listaDeCompras.reduce((acum, prod) => acum += prod.precio * prod.cantidad, 0)
    }

    aplicarDescuento(descuento){
        const precioTotal = this.calcularTotal()
        return precioTotal - (precioTotal * descuento) / 100
    }


}

module.exports = {
    CarritoCompra
}