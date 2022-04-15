//jshint esversion:9
const modal = document.querySelector(".modal");
const loginBtn = document.querySelector(".login-btn");
const closeBtn = document.querySelector(".close-btn");





const openModal = () => modal.style.display = "block";  


const closeModal = (e) => modal.style.display = "none";


const outside = (e) => e.target == modal ? closeModal() : null;
// Eventlisteners 
loginBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", outside);

