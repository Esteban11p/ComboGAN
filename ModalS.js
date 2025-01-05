'use strict'

/* Habre el modal para REGISTRARTE */

const user = document.getElementById('user');
const theModal = document.getElementById('modal');

const close = document.getElementById('delete');
const close2 = document.getElementById('delete2');

// modo register

const Mregister = document.getElementById('modal_Register');

user.addEventListener('click', function() {
  Mregister.style.display = 'block'
  theModal.style.display = 'block';
});

close.addEventListener('click', function() {
  theModal.style.display = 'none';
});

// modo Crear Cuenta

const crear = document.getElementById('Bcrear');
const Mcrear_cuenta = document.getElementById('Mcrear_cuenta');

crear.addEventListener('click', function() {
  Mcrear_cuenta.style.display = 'block';
  Mregister.style.display = 'none'
  theModal.style.display = 'block';
});

close2.addEventListener('click', function() {
  theModal.style.display = 'none';
});




/* Habre el modal para VENDER tu ganado */

const vender = document.getElementById('Vender');
const theModalV = document.getElementById('modalV-GAN');

const deleteMventas = document.getElementById('deleteMventas');

// modo register
vender.addEventListener('click', function() {
 
  theModalV.style.display = 'block';
});

deleteMventas.addEventListener('click', function(){
  theModalV.style.display = 'none';

});








