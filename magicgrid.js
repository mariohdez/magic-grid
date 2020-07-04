'use strict';

const nintyPercent = 0.9;
const canvasId = 'magic-grid';
const headerId = 'welcome-header';
const contextType = '2d';
const canvasNotSupportMessage = 'Sorry! You are using a browser that does not support canvas.';
const contextUndefined = 'Sorry, something went wrong. Can\' draw grid.';

const drawGrid = (canvas, context) => {
    if (!context) {
        alert(contextUndefined);
        return;
    }

    let red = 255;
    let white = 0;
    let blue = 0;
    const squareSideLength = 50;

    const blueRgb = {
        red: 0,
        white: 0,
        blue: 255,
    };

    const redRgb = {
        red: 255,
        white: 0,
        blue: 0,
    };

    context.fillStyle = `rgb(${redRgb.red}, ${redRgb.white}, ${redRgb.blue})`;
    context.fillRect(0, 0, squareSideLength, squareSideLength);
};

window.onload = () => {
    const welcomeHeader = document.getElementById(headerId);
    const magicGridCanvas = document.getElementById(canvasId);
    const sideLength = 600;

    if (!magicGridCanvas.getContext) {
        alert(canvasNotSupportMessage);
    }

    magicGridCanvas.width = sideLength;
    magicGridCanvas.height = sideLength;

    let context = magicGridCanvas.getContext(contextType);
    drawGrid(magicGridCanvas, context);
};
