const { CarritoCompra } = require("../index")

describe("Class CarritoCompra", () => {

    it("el carrito de compra existe", () => {
        expect(CarritoCompra).toBeDefined()
        expect(typeof CarritoCompra).toBe("function")
        expect(CarritoCompra).toBeInstanceOf(Function)
    })
    it("puedo crear una nueva instancia de CarritoCompra", () => {
        const nuevoCarrito = new CarritoCompra()
        expect(nuevoCarrito).toBeInstanceOf(CarritoCompra)
    })

    it("la clase CarritoCompra debe tener los siguientes métodos: ", () => {
        expect(CarritoCompra.prototype.constructor).toBeDefined()
        expect(CarritoCompra.prototype.agregarProducto).toBeDefined()
        expect(CarritoCompra.prototype.calcularTotal).toBeDefined()
        expect(CarritoCompra.prototype.aplicarDescuento).toBeDefined()
    })
})

describe("Constructor:", () => {
    
    it("debe inicializar el carrito como un array vacío", () => {
        const nuevoCarrito = new CarritoCompra()
        expect(nuevoCarrito.listaDeCompras).toEqual([])
    })
})

describe("agregarProducto", () => {
    it("recibe un objeto producto y lo agrega al carrito", () => {
        const nuevoProducto = {
            nombre : "TV",
            precio: 123,
            cantidad: 4
        }
        const nuevoCarrito = new CarritoCompra()
        nuevoCarrito.agregarProducto(nuevoProducto)
        expect(nuevoCarrito.listaDeCompras).toEqual([nuevoProducto])
    })

    it("recibe muchos objeto producto y los agrega al carrito", () => {
        const arrayProductos = [
            {
                nombre : "TV1",
                precio: 123,
                cantidad: 4
            },
            {
                nombre : "TV2",
                precio: 123,
                cantidad: 4
            },
            {
                nombre : "TV3",
                precio: 123,
                cantidad: 4
            }
        ]
        const nuevoCarrito = new CarritoCompra()
        arrayProductos.forEach((producto) => nuevoCarrito.agregarProducto(producto))

        expect(nuevoCarrito.listaDeCompras).toEqual(arrayProductos)
        expect(nuevoCarrito.listaDeCompras.length).toBe(3)
        expect(nuevoCarrito.listaDeCompras).toContainEqual({
                nombre : "TV1",
                precio: 123,
                cantidad: 4
            })
            expect(nuevoCarrito.listaDeCompras).toContainEqual({
                nombre : "TV2",
                precio: 123,
                cantidad: 4
            })
    })

})

describe("calcularTotal", () => {
    it("debe calcular el total de compra sumando los precios de los productos en el carrito", () => {
        const arrayProductos = [
            {
                nombre : "TV1",
                precio: 123,
                cantidad: 4
            },
            {
                nombre : "TV2",
                precio: 123,
                cantidad: 4
            },
            {
                nombre : "TV3",
                precio: 123,
                cantidad: 4
            }
        ]
        const nuevoCarrito = new CarritoCompra()

        arrayProductos.forEach((producto) => nuevoCarrito.agregarProducto(producto))
        
        expect(nuevoCarrito.calcularTotal()).toBe(1476)
    })
})

describe("aplicarDescuento", () => {
    it("aplica un descuento segun el % especificado", () => {
        const arrayProductos = [
            {
                nombre : "TV1",
                precio: 123,
                cantidad: 4
            },
            {
                nombre : "TV2",
                precio: 123,
                cantidad: 4
            },
            {
                nombre : "TV3",
                precio: 123,
                cantidad: 4
            }
        ]
        const nuevoCarrito = new CarritoCompra()

        arrayProductos.forEach((producto) => nuevoCarrito.agregarProducto(producto))

        expect(nuevoCarrito.aplicarDescuento(0)).toBe(1476)
        expect(nuevoCarrito.aplicarDescuento(10)).toBe(1328.4)
        expect(nuevoCarrito.aplicarDescuento(50)).toBe(738)
        expect(nuevoCarrito.aplicarDescuento(100)).toBe(0)
    })
})