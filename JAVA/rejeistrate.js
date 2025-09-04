const form = document.getElementById('miFormulario');

  

    const nombre = document.getElementById('nombre').value.trim();
    if (nombre === '') error;

    const apellido = document.getElementById('apellido').value.trim();
    if (apellido === '') error;

    const dni = document.getElementById('dni').value.trim();
    if (dni === '' || isNaN(dni)) error;

    const mail = document.getElementById('mail').value.trim();
    if (mail === '' || !mail.includes('@')) error;

    const pass = document.getElementById('pass').value.trim();
    if (pass.length < 6) error;

    const fecha = document.getElementById('date').value;
    if (fecha === '') error;

    
  function error(){iziToast.error({
    title: 'Error',
    message: errores.join('<br>'),
    position: 'topRight',
    timeout: 5000
  });}
    
  iziToast.success({
    title: 'OK',
    message: 'Los datos ingresados son correctos!',
    position: 'topRight'
  });

 