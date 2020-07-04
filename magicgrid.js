'use strict';

const canvasId = 'magic-grid';
const headerId = 'welcome-header';
const contextType = '2d;'
const canvasNotSupportMessage = 'Sorry! You are using a browser that does not support canvas.';

const getCanvasWidth = (windowWidth) => {
    const nintyPercent = 0.9;
    return windowWidth * nintyPercent;
};

const getCanvasHeight = (windowHeight, welcomeHeaderHeight) => {
    const nintyPercent = 0.9;
    return (windowHeight - welcomeHeaderHeight) * nintyPercent;
};

window.onresize = (event) => {
    // Resize the canvas width and height.
    const welcomeHeader = document.getElementById(headerId);
    const magicGridCanvas = document.getElementById(canvasId);

    magicGridCanvas.width = getCanvasWidth(window.innerWidth);
    magicGridCanvas.height = getCanvasHeight(window.innerHeight, welcomeHeader.clientHeight);

    console.log(`canvas width: ${magicGridCanvas.width}, and height: ${magicGridCanvas.height}.`);
};

window.onload = () => {
    const welcomeHeader = document.getElementById(headerId);
    const magicGridCanvas = document.getElementById(canvasId);

    if (!magicGridCanvas.getContext) {
        alert(canvasNotSupportMessage);
    }

    magicGridCanvas.width = getCanvasWidth(window.innerWidth);
    magicGridCanvas.height = getCanvasHeight(window.innerHeight, welcomeHeader.clientHeight);

    console.log(`canvas width: ${magicGridCanvas.width}, and height: ${magicGridCanvas.height}.`);

    let context = magicGridCanvas.getContext(contextType);
};
