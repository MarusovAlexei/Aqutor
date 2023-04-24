function generateBalls() {
  var gooeyAnimations = document.querySelector(".gooey-animations");
  var windowWidth = window.innerWidth;
  var ballCount = Math.floor(windowWidth / 20);

  for (var i = 0; i < ballCount; i++) {
    var ball = document.createElement("div");
    ball.classList.add("ball");
    gooeyAnimations.appendChild(ball);

    var colors = ["#28323B", "#FFA036"];
    ball.style.bottom = "0px";
    ball.style.left = Math.random() * windowWidth + "px";
    ball.style.animationDelay = Math.random() * 5 + "s";
    ball.style.transform = "translateY(" + Math.random() * 10 + "px)";
    ball.style.backgroundColor = colors[i % 2];
  }
}

generateBalls();

window.addEventListener("resize", function (e) {
  var balls = document.querySelectorAll(".gooey-animations .ball");
  balls.forEach(function (ball) {
    ball.remove();
  });
  generateBalls();
});
