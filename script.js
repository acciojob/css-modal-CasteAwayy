const buttonModal = document.querySelector('#openModal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content')
buttonModal.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('click');
    modal.style.display = 'block';
    modalContent.classList.add('active');
    
})

closeModal.addEventListener('click',(e)=>{
    e.preventDefault();
    modalContent.classList.remove('active');
    modal.style.display = 'none';
})

overlay.addEventListener('click',()=>{
    modalContent.classList.remove('active');
    modal.style.display = 'none';
})