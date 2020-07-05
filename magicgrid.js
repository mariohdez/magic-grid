'use strict';

const sideLength = 600;
const squareSideLength = 50;
const canvasId = 'magic-grid';
const headerId = 'welcome-header';
const contextType = '2d';
const canvasNotSupportMessage = 'Sorry! You are using a browser that does not support canvas.';
const contextUndefined = 'Sorry, something went wrong. Can\' draw grid.';

const getRandomColor = () => {
    const max = 255;
    const min = 0;
    return {
        red: Math.floor(Math.random() * (max - min + 1) + min),
        white: Math.floor(Math.random() * (max - min + 1) + min),
        blue: Math.floor(Math.random() * (max - min + 1) + min),
    }
}


const drawGrid = (canvas, context) => {
    if (!context) {
        alert(contextUndefined);
        return;
    }

    const iterationLength = sideLength / squareSideLength;

    for (let j = 0; j < iterationLength; ++j) {
        for (let i = 0; i < iterationLength; ++i) {
            let color = getRandomColor();
            context.fillStyle = `rgb(${color.red}, ${color.white}, ${color.blue})`;
            context.fillRect(i * squareSideLength, j*squareSideLength, squareSideLength, squareSideLength);
        }
    }
};

window.onload = () => {
    const magicGridCanvas = document.getElementById(canvasId);

    if (!magicGridCanvas.getContext) {
        alert(canvasNotSupportMessage);
    }

    magicGridCanvas.width = sideLength;
    magicGridCanvas.height = sideLength;

    let context = magicGridCanvas.getContext(contextType);
    drawGrid(magicGridCanvas, context);
};
