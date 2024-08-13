const movel = document.getElementById('movel');

movel.onmousedown = function(event) {
    let shiftX = event.clientX - movel.getBoundingClientRect().left;
    let shiftY = event.clientY - movel.getBoundingClientRect().top;

    function moveAt(pageX, pageY) {
        movel.style.left = pageX - shiftX + 'px';
        movel.style.top = pageY - shiftY + 'px';
    }

    // Move the object on mouse move
    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    // Drop the object, remove event listeners
    movel.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        movel.onmouseup = null;
        movel.style.cursor = 'grab';
    };

    movel.style.cursor = 'grabbing';
};

// Prevent default drag behavior
movel.ondragstart = function() {
    return false;
};
