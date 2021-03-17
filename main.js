`use strict`;
const canvasBoard = document.getElementById(`board`);
const colourInput = document.getElementById(`colours`);
const ctx = canvasBoard.getContext(`2d`);
window.addEventListener(`load`, board);
function board() {
  canvasBoard.height = window.innerHeight / 1.2;
  canvasBoard.width = window.innerWidth / 1.2;
  ctx.lineWidth = 10;
  let isPainting = false;
  function startDraw(ev) {
    isPainting = true;
    // enables movement on the board when mousedown
    draw(ev);
  }
  function draw(ev) {
    if (!isPainting) return;
    ctx.lineCap = `round`;
    ctx.strokeStyle = colourInput.value;
    ctx.lineTo(ev.offsetX, ev.offsetY);
    ctx.stroke();
    // stops re-stroking of previous sub-paths
    ctx.beginPath();
    ctx.moveTo(ev.offsetX, ev.offsetY);
  }
  function endDraw() {
    isPainting = false;
    ctx.beginPath();
  }
  canvasBoard.addEventListener(`mousedown`, startDraw);
  canvasBoard.addEventListener(`mousemove`, draw);
  canvasBoard.addEventListener(`mouseup`, endDraw);
}
