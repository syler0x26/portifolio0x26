const btnBloqued = document.querySelector('.btnBloqued')
btnBloqued.addEventListener("click", () => {
  alert('Olá, Aqui é o Syler. Desativei os botões. Vou liberá-los no dia do lançamento. \n Hi,This is Syler. I disabled the buttons. I will release them on launch day.')
})
const btnsBlo = document.querySelectorAll('.bloqued');

function Theme() {
  document.body.classList.toggle('is-light')
  document.body.classList.toggle('is-dark')
}
document.querySelector('#trocarDeTema').addEventListener('click', Theme)


//menu
menu.addEventListener('shown.bs.collapse', () => {
  btnMenu.classList.add('aberto');
});

menu.addEventListener('hidden.bs.collapse', () => {
  btnMenu.classList.remove('aberto');
});

