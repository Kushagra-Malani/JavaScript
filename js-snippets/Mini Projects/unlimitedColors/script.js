// Generate a random color
let randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  let intervalId;
  const startChangingColors = function () {
    function changeBgColor() {
      document.body.style.backgroundColor = randomColor();
    }
  
    intervalId = setInterval(changeBgColor, 1000);
  };
  
  const stopChangingColors = function () {
    clearInterval(intervalId);
  };
  
  document.getElementById('start').addEventListener('click', startChangingColors);
  
  document.getElementById('stop').addEventListener('click', stopChangingColors);