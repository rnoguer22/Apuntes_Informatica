function validaCorreo(campo){
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(regex.test(campo.value))
        campo.style.borderColor = '';
    else
        campo.style.borderColor = 'red';
}

let miCampo = document.getElementById('micampo');
miCampo
let miBoton = document.getElementById('miboton');

miBoton.addEventListener('click', validaCorreo(miCampo))