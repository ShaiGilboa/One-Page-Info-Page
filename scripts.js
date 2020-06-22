const Noa = document.getElementById('Noa')
const Theo = document.getElementById('Theo')
const act1 = document.getElementById('act1')
const act2 = document.getElementById('act2')

const modal = document.getElementById('modal')
const modalContent = document.getElementById('modalContent')

const handleModalClose = () =>{
  modal.style.display = 'none';
}

const handleClick = (event) => {
  modal.style.display = 'block';
  modalContent.src = event.target.src
  modal.addEventListener('click',handleModalClose)
}

Noa.addEventListener('click', handleClick)
Theo.addEventListener('click', handleClick)
act1.addEventListener('click', handleClick)
act2.addEventListener('click', handleClick)

const menu = document.getElementById('menu')
const burger = document.getElementById('burgerMenu')
const header = document.querySelector('header')

const toggleMenu = () => {
  menu.classList.toggle('in')

}

burger.addEventListener('click', toggleMenu)

const hol = document.getElementById('hol')
const holModal = document.getElementById('modal2')
const holModalContent = document.getElementById('modalContent2')
let page = 1;

const handleModal2Close = () => {
  holModal.style.display = 'none';
}

const holHandler = () => {
  page = 1;
  modal2.style.display = 'block';
  modalContent2.src = `./assets/holocaust/Holocaust-Visit-by-Nessa-with-additions-by-Ella-and-Noa-page-00${page}.jpg`
  modalContent2.addEventListener('click',handleModal2Close)
}

hol.addEventListener('click', holHandler)

const next = () => {
  if(page < 3){
    page++;
    modalContent2.src = `./assets/holocaust/Holocaust-Visit-by-Nessa-with-additions-by-Ella-and-Noa-page-00${page}.jpg`
  }
}

const prev = () => {
  if(page > 1){
    page --;
    modalContent2.src = `./assets/holocaust/Holocaust-Visit-by-Nessa-with-additions-by-Ella-and-Noa-page-00${page}.jpg`
  }
}

const download = (name, src) => {
  var link = document.createElement('a');
  link.href = src;
  link.download = `${name}.jpg`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vw = window.innerWidth * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vw', `${vw}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vw = window.innerWidth * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vw', `${vw}px`);
});