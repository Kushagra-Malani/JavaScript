const BMIForm = document.querySelector('form');

BMIForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let BMIheight = parseInt(document.querySelector('#height').value);
  let BMIweight = parseInt(document.querySelector('#weight').value);
  let BMIresult = document.querySelector('#results');

  if (BMIheight === '' || BMIheight < 0 || isNaN(BMIheight)) {
    BMIresult.innerHTML = 'Please give a valid height';
  } else if (BMIweight === '' || BMIweight < 0 || isNaN(BMIweight)) {
    BMIresult.innerHTML = 'Please give a valid weight';
  } else {
    let bmi = (BMIweight / ((BMIheight * BMIheight) / 10000)).toFixed(1);
    // displaying the result
    BMIresult.innerHTML = `<span>${bmi}</span>`;
  }
});