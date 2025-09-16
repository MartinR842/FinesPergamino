const btnEnviar=document.getElementById('btnEnviar');

miFormulario.addEventListener('submit',function(event){
  event.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const apellido = document.getElementById('apellido').value.trim();
  const dni = document.getElementById('dni').value.trim();
  const mail = document.getElementById('mail').value.trim();

  if (nombre===''){
      iziToast.error({
      title: 'Error',
      message: 'Completar el Nombre es obligatorio',
      position:'topCenter',
      timeout:5000,
      progressBarColor: 'rgba(19, 182, 136, 1)',
      TransitionIn:'fadeInDown',
      });
      return;
    
  }
  

  if (apellido===''){
      iziToast.error({
      title: 'Error',
      message: 'Completar el Apellido es obligatorio',
      position:'topCenter',
      timeout:5000,
      progressBarColor: 'rgba(19, 182, 136, 1)',
      TransitionIn:'fadeInDown',
      });
    
  }
  
  if (dni.length!= 8){
      iziToast.error({
      title: 'Error',
      message: 'D.N.I es incorrecto o no fue ingresado',
      position:'topCenter',
      timeout:5000,
      progressBarColor: 'rgba(19, 182, 136, 1)',
      TransitionIn:'fadeInDown',
      });     
    
  }

  
  /*Validar Mail*/
    const mailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!mail){
            iziToast.error({
            title: 'Error',
            message: 'El mail es obligatorio',
            position:'topCenter',
            timeout:5000,
            progressBarColor: 'rgba(19, 182, 136, 1)',
            TransitionIn:'fadeInDown',
            });
    }else if(!mailRegex.test(mail)){
            iziToast.error({
            title: 'Error',
            message: 'El mail está incorrecto',
            position:'topCenter',
            timeout:5000,
            progressBarColor: 'rgba(19, 182, 136, 1)',
            TransitionIn:'fadeInDown',
            });
      };

Swal.fire({
title: "Buen Trabajo!",
text: "Sus datos fueron enviados!",
icon: "success"
});
miformulario.reset();
});

    




  