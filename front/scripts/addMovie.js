const axios = require ("axios")

function buttonSubmit () {

    
    const buttonS = document.getElementById("botonSubmit");
    const form = document.getElementById('formularioPeliculas');
    
    async function addMovie (event) {
        event.preventDefault();

        // console.log("Mi mamá me quiere una banda")

        const titleInput = document.getElementById('validationDefault01');
        const yearInput = document.getElementById('validationDefault02');
        const directorInput = document.getElementById('validationDefault03');
        const durationInput = document.getElementById('validationDefault06');
        const genreInput = form.querySelectorAll ('input[type="checkbox"]');
        const rateInput = document.getElementById('validationDefault05');
        const posterInput = document.getElementById('validationDefault04');

        // console.log(genreInput)

        function getAllCheckboxes (checkboxes) {
            const labels = []

            checkboxes.forEach(checkbox => {
                if (checkbox.checked) {                
                const label = document.querySelector(`label[for="${checkbox.id}"]`)
                if (label) {
                    labels.push(label.textContent.trim())
                }}                
            });
            // console.log (labels)
            return labels;

        }

        const titleValue = titleInput.value;
        const yearValue = yearInput.value;
        const directorValue = directorInput.value;
        const durationValue = durationInput.value;
        const genreValue = getAllCheckboxes(genreInput);
        const rateValue = rateInput.value;
        const posterValue = posterInput.value;
        // console.log(rateValue.length)

        if(titleValue && yearValue && directorValue && durationValue && genreValue && rateValue && posterValue) {     
            
        const objForm = {
            title:titleValue,
                year:Number(yearValue),
                director:directorValue,                
                rate:rateValue.length,
                duration:durationValue,
                poster:posterValue,
                genre:genreValue
        }
        // console.log (objForm)

              await axios.post("http://localhost:3000/movies",
                objForm        
            )
            .then ((res) => {
                if(res.status == 201) {
                   alert("La película se cargó exitosamente. Ve al inicio para encontrarla.");
                }else {
                    alert("Error. No pude cargar la película.")
                }
            })     
            
            .catch ((err) => {
                console.log("Error", err)
            })
        
    }else {
        alert("Verifica que todos los campos esten completos con el tipo de dato solicitado")
    }};
    
    buttonS.addEventListener('click', addMovie);
}

module.exports = buttonSubmit;