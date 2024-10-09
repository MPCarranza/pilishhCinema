const { app } = require("./src/server")
const { dbConnect } = require ("./src/config/db")

const PORT = 3000 //Cualquier numerito le puedo poner

dbConnect()
.then(() => {
    app.listen (PORT, () => {
        console.log(`Servidor escuchando en puerto: ${PORT}`)
    }) // Por el momento me ayuda a saber que el servidor está levantado
})
.catch((err) => {
    console.error(err)
})
