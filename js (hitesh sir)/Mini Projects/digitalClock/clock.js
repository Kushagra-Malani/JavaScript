const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  clock.innerHTML = `<span>${date.toLocaleTimeString()}</span>`;
}, 1000);