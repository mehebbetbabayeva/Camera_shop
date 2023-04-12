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