const { Router } = require ("express")
const { moviesController, moviePostController} = require("../controllers/moviesControllers")
const { bodyMovieValidation } = require("../middleware/validationBody")

const moviesRouter = Router ()

moviesRouter.get("/" , moviesController)

moviesRouter.post("/", bodyMovieValidation, moviePostController)

module.exports = {
    moviesRouter
}