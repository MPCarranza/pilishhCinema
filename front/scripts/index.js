const buttonReset = require("./form")
const buttonSubmit = require("./addMovie")
const axios = require ("axios")
const moviesLoad = require('./moviesLoad');


//TODO- selecciono el contenedor de películas
const moviesContainer = document.querySelector("#peliculas")

//TODO- Requiero a moviesLoad


//TODO- ME COMUNICO CON EL SERVIDOR CON AJAX (reemplazo tempData)

// function obtenerPeliculas() {
//     $.get("https://students-api.up.railway.app/movies", (respuestaDelServidor) => {
//         const arrayHtmlMovies = respuestaDelServidor.map(moviesLoad);

//         //TODO- Aquí se iteran cada uno de los elementos HTML y se los añade al contenedor (del DOM)
//         arrayHtmlMovies.forEach((element) => {
//             moviesContainer.appendChild(element);
//         });
//     }).fail((error) => {
//         console.error('Error al obtener los datos:', error);
//     });
// }

// obtenerPeliculas();

// //TODO- ME COMUNICO CON EL SERVIDOR USANDO FETCH (ASYNC/AWAIT)

// async function obtenerPeliculas() {
//     try {
//         const response = await fetch("https://students-api.up.railway.app/movies");

//         // Verificar si la respuesta es exitosa
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
       
//         // Parsear la respuesta como JSON
//         const respuestaDelServidor = await response.json();

//         const arrayHtmlMovies = respuestaDelServidor.map(moviesLoad);

//         // TODO: Aquí se iteran cada uno de los elementos HTML y se los añade al contenedor (del DOM)
//         arrayHtmlMovies.forEach((element) => {
//             moviesContainer.appendChild(element);
//         });
//     } catch (error) {
//         console.error('Error al obtener los datos:', error);
//     }
// }

// // Llamada a la función
// obtenerPeliculas();

//TODO- ME COMUNICO CON EL SERVIDOR CON AXIOS 
const buttonS = document.getElementById("botonSubmit");
if (moviesContainer) {
    obtenerPeliculas();
} else if(buttonS){
    buttonSubmit();
    buttonReset();


}

function obtenerPeliculas() {
    axios.get("http://localhost:3000/movies")
    .then((respuestaDelServidor) => {
        const arrayHtmlMovies = respuestaDelServidor.data.map(moviesLoad);

        //TODO- Aquí se iteran cada uno de los elementos HTML y se los añade al contenedor (del DOM)
        arrayHtmlMovies.forEach((element) => {
            moviesContainer.appendChild(element);
        });

        return respuestaDelServidor.data;
    }).catch((error) => {
        console.error('Error al obtener los datos:', error);
    });
}



