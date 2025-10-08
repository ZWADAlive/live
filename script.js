// Efeito de "glitch" leve no logo
const logo = document.querySelector('.logo');
setInterval(() => {
  const intensity = Math.random() * 2;
  logo.style.textShadow = `0 0 ${intensity}px #999`;
}, 200);
