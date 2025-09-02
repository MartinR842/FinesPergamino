const cambiarFondo = document.getElementById('cambiarFondo');
const body = document.body;
const titulo = document.querySelectorAll('h2');

cambiarFondo.addEventListener('click', cambiarModoColor);

function cambiarModoColor(){
    
      { if(body.classList.contains('tema-claro')){
        body.classList.replace('tema-claro','tema-oscuro');
        cambiarFondo.innerHTML = '<i class="bi bi-brightness-high fs-3"></i>';
        cambiarFondo.style.backgroundColor = '#c807a8ff';
        titulo.forEach(titulo => {
        titulo.style.color = '#0ecef9ff';
        });
                
    } else {
        body.classList.replace('tema-oscuro','tema-claro');
        cambiarFondo.innerHTML = '<i class="bi bi-moon-stars-fill fs-4"></i>';
        cambiarFondo.style.backgroundColor = '#5d026f';
        titulo.forEach(titulo => {
        titulo.style.color = '#061548';
        });
            }
}};
