const nombre=document.getElementById('nombre').value();
if (nombre === '') {iziToast.error({
  title: 'Error',
  message: 'Este campo es obligatorio'.join('<br>'),
  position: 'topRight',
  timeout: 5000
  });
  };

const apellido = document.getElementById('apellido').value.trim();
if (apellido === '') {
  iziToast.error({
  title: 'Error',
  message: 'Este campo es obligatorio'.join('<br>'),
  position: 'topRight',
  timeout: 5000
});
}

const dni = document.getElementById('dni').value.trim();
if (dni === '' || isNaN(dni)) {
  iziToast.error({
  title: 'Error',
  message: 'Este campo es obligatorio'.join('<br>'),
  position: 'topRight',
  timeout: 5000
});
}

const mail = document.getElementById('mail').value.trim();
if (mail === '' || !mail.includes('@')) {
  iziToast.error({
  title: 'Error',
  message: 'Este campo es obligatorio'.join('<br>'),
  position: 'topRight',
  timeout: 5000
});
};

