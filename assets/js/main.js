const featuresMain = document.querySelector('#features-main');
let isDown = false;
let startX;
let scrollLeft;
featuresMain.addEventListener('touchstart', (event) => {
    isDown = true;
    startX = event.touches[0].pageX - featuresMain.offsetLeft;
    scrollLeft = featuresMain.scrollLeft;
  });

  featuresMain.addEventListener('touchend', () => {
    isDown = false;
  });
  featuresMain.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.touches[0].pageX - featuresMain.offsetLeft;
    const walk = (x - startX) * 2;
    featuresMain.scrollLeft = scrollLeft - walk;
  });