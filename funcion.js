document.body.style.background;

const formulario = document.querySelector('#form-contacto');

formulario.addEventListener('submit',function(e){

    e.preventDefault()

    const correo = document.querySelector('#correo')

    let formularioValido = true;

    const camposObligatorios = formulario.querySelectorAll('[required]');

    camposObligatorios.forEach(function(campo){

        if(campo.value.trim() == ''){
            campo.classList.add('campo-error');
            formularioValido = false;
        }else{
            campo.classList.remove('campo-error');
        }

    });


    const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(correo.value.trim() !== '' && !patronCorreo.test(correo.value.trim())){
        correo.classList.add('campo-error');
        formularioValido = false;
    }else if (correo.value.trim() !== '') {
        correo.classList.remove('campo-error');
    }


    if (formularioValido) {
        document.querySelector('#mensaje-confirmacion').textContent =
        'Formulario enviado correctamente espera tu respuesta :)';
    }

});

