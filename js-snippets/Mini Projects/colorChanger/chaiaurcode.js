const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

//buttons will have a node-list so, we can apply forEach loop
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    let color = e.target.id;
    if (color === 'grey') {
      body.style.backgroundColor = color;
    } else if (color === 'white') {
      body.style.backgroundColor = color;
    } else if (color === 'blue') {
      body.style.backgroundColor = color;
    } else if (color === 'yellow') {
      body.style.backgroundColor = color;
    }
  });
});
