require("dotenv").config()
const mongoose = require ("mongoose")

//conexión asíncrona basada en promesas

async function dbConnect () {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.bj06qx1.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=${process.env.DB_CLUSTER}`)
    }
    catch (error) {
        console.log("Error al conectar con la base de datos:", error.message)
        throw error;
    }
    
}

console.log(process.env.DB_USER)
console.log(process.env.DB_PASSWORD)
console.log(process.env.DB_CLUSTER)
console.log(process.env.DB_NAME)

module.exports = {
dbConnect
}