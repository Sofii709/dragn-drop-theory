const circles = document.querySelectorAll('.circle');
let activeEl = null;

let shiftX = 0;
let shiftY = 0;

circles.forEach(function(circle) {
    circle.addEventListener('mousedown', function(event) {
        activeEl = circle;
        activeEl.style.zIndex = '2';
        const move = activeEl.getBoundingClientRect();
        shiftX = event.clientX - move.left;
        shiftY = event.clientY - move.top;
    })
});

document.addEventListener('mousemove', function(event) {
    if (activeEl != null) {
        activeEl.style.left = (event.clientX - shiftX) + "px";
        activeEl.style.top = (event.clientY - shiftY) + "px";
    }
});

document.addEventListener('mouseup', function() {
    if(activeEl != null){
    activeEl.style.zIndex = '1';
    }
    activeEl = null;
})