
document.addEventListener('DOMContentLoaded', () => {
    const draggable = document.getElementById('draggable');
    
    draggable.addEventListener('mousedown', (event) => {
        // Salva as posições iniciais
        const startX = event.clientX;
        const startY = event.clientY;
        const rect = draggable.getBoundingClientRect();
        const offsetX = startX - rect.left;
        const offsetY = startY - rect.top;

        const mouseMoveHandler = (event) => {
            const x = event.clientX - offsetX;
            const y = event.clientY - offsetY;
            draggable.style.left = `${x}px`;
            draggable.style.top = `${y}px`;
        };

        const mouseUpHandler = () => {
            document.removeEventListener('mousemove', mouseMoveHandler);
            document.removeEventListener('mouseup', mouseUpHandler);
        };

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    });
});
