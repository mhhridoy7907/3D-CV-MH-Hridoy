
const cv = document.getElementById('cv');
let angle = 0;
function autoRotate() {
    angle += 0.2;
    cv.style.transform = `rotateY(${angle}deg) rotateX(5deg)`; // slight tilt
    requestAnimationFrame(autoRotate);
}
autoRotate();
