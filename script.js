const buttonModal = document.querySelector('#openModal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');

const modal = document.querySelector('.modal')
buttonModal.addEventListener('click',(e)=>{
    e.preventDefault();
    modal.classList.add('active');
    overlay.style.display = 'block';
})

closeModal.addEventListener('click',(e)=>{
    e.preventDefault();
    modal.classList.remove('active');
    overlay.style.display = 'none';
})

overlay.addEventListener('click',()=>{
    // console.log('click')
    modal.classList.remove('active');
    overlay.style.display = 'none';
})