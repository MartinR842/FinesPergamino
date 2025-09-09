const btnEnviar=document.getElementById('btnEnviar');

btnEnviar.addEventListener('submit',function(event){
  event.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const apellido = document.getElementById('apellido').value.trim();
  const dni = document.getElementById('dni').value.trim();
  const mail = document.getElementById('mail').value.trim();

  if (nombre===''){
      iziToast.error({
      title: 'Error',
      message: 'Complete todos los campos',
      position:'topCenter',
      timeout:3000,
      progressBarColor: 'rgba(19, 182, 136, 1)',
      TransitionIn:'fadeInDown',
      });
      return;
    
  }else{
      iziToast.success({
      title: 'OK',
      message: 'Los datos han sido enviados correctamente!',
      position:'topCenter',
      timeout:3000,
      progressBarColor: 'rgba(19, 182, 136, 1)',
      TransitionIn:'fadeInDown',
      });

  }
  

  if (apellido===''){
      iziToast.error({
      title: 'Error',
      message: 'Complete todos los campos',
      position:'topCenter',
      timeout:3000,
      progressBarColor: 'rgba(19, 182, 136, 1)',
      TransitionIn:'fadeInDown',
      });
    
  }else{
      iziToast.success({
      title: 'OK',
      message: 'Los datos han sido enviados correctamente!',
      position:'topCenter',
      timeout:3000,
      progressBarColor: 'rgba(19, 182, 136, 1)',
      TransitionIn:'fadeInDown',
      });

  }
  
  if (dni.length=== 8){
    iziToast.success({
      title: 'OK',
      message: 'Los datos han sido enviados correctamente!',
      position:'topCenter',
      timeout:3000,
      progressBarColor: 'rgba(19, 182, 136, 1)',
      TransitionIn:'fadeInDown',
      });
      
    
  }else{
      
      iziToast.error({
      title: 'Error',
      message: 'Complete todos los campos',
      position:'topCenter',
      timeout:3000,
      progressBarColor: 'rgba(19, 182, 136, 1)',
      TransitionIn:'fadeInDown',
      });

  }

  if (mail.includes('@')){
    iziToast.success({
      title: 'OK',
      message: 'Los datos han sido enviados correctamente!',
      position:'topCenter',
      timeout:3000,
      progressBarColor: 'rgba(19, 182, 136, 1)',
      TransitionIn:'fadeInDown',
      });
      
    
  }else{
      
      iziToast.error({
      title: 'Error',
      message: 'Complete todos los campos',
      position:'topCenter',
      timeout:3000,
      progressBarColor: 'rgba(19, 182, 136, 1)',
      TransitionIn:'fadeInDown',
      });

  }
  
  });




  