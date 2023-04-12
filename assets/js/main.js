//slide card
const featuresMain = document.querySelector('#features-main');
let isDown = false;
let startX;
let scrollLeft;
  featuresMain.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.touches[0].pageX - featuresMain.offsetLeft;
    const walk = (x - startX) * 2;
    featuresMain.scrollLeft = scrollLeft - walk;
  });

//mobile-menu
document.querySelector("#mobile-menu").addEventListener("click",()=>{
    let menuOverlay=document.querySelector(".mobile-menu-overlay");
    menuOverlay.classList.add("active");
})

document.querySelector("#cancel").addEventListener("click",()=>{
    let menuOverlay=document.querySelector(".mobile-menu-overlay");
    menuOverlay.classList.remove("active");
    
})