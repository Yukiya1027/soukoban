var timer;
var canvas;
var context;

function Init()
{
  window.addEventListener('keydown', KeyDownFunc, true);

  timer = setInterval(Scene, 1000/600);

  canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");
}
