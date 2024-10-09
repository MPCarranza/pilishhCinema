function buttonReset () {
    const buttonR = document.getElementById("botonReset");
    const form = document.getElementById('formularioPeliculas');
    
    function resetForm() {
        form.reset();
    }
    
    buttonR.addEventListener('click', resetForm);
}



module.exports = buttonReset
