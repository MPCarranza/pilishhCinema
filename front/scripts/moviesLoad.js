//TODO- transformo el temptData en HTML

function moviesLoad (element, index) {
    element.id = index + 1;

    const div = document.createElement("div")
    div.className = "pelicula"
    
    const a = document.createElement("a")
    a.className = "titulo"
    a.innerText = element.title

    const button = document.createElement ("button")
    button.className = "button"
    button.innerText = "Ver ahora"

    const divTextoCursiva = document.createElement("div")
    divTextoCursiva.className = "textoCursiva"
    const year = document.createElement("p")
    year.innerText = element.year
    const director = document.createElement("p")
    director.innerText = element.director
    const duration = document.createElement("p")
    duration.innerText = element.duration
    const genre = document.createElement("p")
    genre.innerText = element.genre
    const rate = document.createElement ("span")
    rate.innerText = element.rate

    
    const img = document.createElement("img")
    img.src = element.poster
    img.classList.add("peliculaImg")
    img.value = element.id
    img.background = element.background

    divTextoCursiva.appendChild(year)
    divTextoCursiva.appendChild(director)
    divTextoCursiva.appendChild(duration)
    divTextoCursiva.appendChild(genre)
        
    div.appendChild(a)
    div.appendChild(img)
    div.appendChild(button)
    div.appendChild(divTextoCursiva)
    div.appendChild(rate)
    
    //TODO- Esto es para cambiar de fondo cuando el click se posa sobre las imagenes

    // img.addEventListener("mouseenter", (imageSelect) => {
    //     const background = imageSelect.target.background
    //     const body = document.querySelector("body")
    //     body.style.backgroundImage = `url(${background})`
    // })

    return div;
}    

//TODO- Aquí conecto con mis datos locales
// const arrayHtmlMovies = tempData.map(moviesLoad)

//TODO- Aquí se iteran cada uno de los elementos HTML y se los añade al contenedor (del DOM)
// arrayHtmlMovies.forEach((element) => {moviesContainer.appendChild(element)});

module.exports = moviesLoad;