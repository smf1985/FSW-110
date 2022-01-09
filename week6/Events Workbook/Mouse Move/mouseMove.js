const box = document.querySelector('.red-box');

box.addEventListener('mousemove', function(e) {
    box.textContent = "This is the mouse coordinates: X=" + e.clientX + "/ Y=" + e.clientY;
});