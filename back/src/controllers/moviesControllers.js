const { getMoviesService, postMoviesService}  =require("../services/moviesServices")

async function moviesController (req, res) {
        //servicio que "obtenga las peliculas del BD"
    const movies = await getMoviesService()

       res.status(200).json(movies)
}
// Como vienes trayendo un objeto externo, lo debes desestructurar
async function moviePostController (req, res) {
   const {title, year, director, duration, genre, rate, poster} = req.body;

    const newMovie = await postMoviesService({title, year, director, duration, genre, rate, poster})
    res.status(201).json(newMovie)
}

module.exports = {
    moviesController,
    moviePostController
}