var filterBtn = document.querySelector('#filter');
var submitBtn = document.querySelector('#submit');
var container = document.querySelector('#container');
var emailInput = document.querySelector('#email-input');
var background = document.querySelector('#background');
var error = document.querySelector('h3');
var exitBtn = document.querySelector('span');
var filterToggle = false;
var submit = false;

filterBtn.addEventListener('click', function(e) {
  if (!filterToggle) {
    container.style.backgroundColor = 'rgba(255,165,0, 0.45)';
    filterToggle = true;
    filterBtn.innerText = 'TAKE IT OFF';
  } else if (filterToggle) {
    container.style.backgroundColor = 'rgba(255, 255, 0, 0)';
    filterToggle = false;
    filterBtn.innerText = 'TEST IT OUT';
  }
});

submitBtn.addEventListener('click', function(e) {
  if (validator.isEmail(emailInput.value) && !submit) {
    axios
      .post('/contact', {
        email: emailInput.value
      })
      .then(serverResponse => {
        console.log(serverResponse);
        emailInput.value = '';
        submitBtn.innerHTML = `YOU'RE IN`;
        submit = true;
      });
  } else {
    submitBtn.innerHTML = 'ERROR';
    setTimeout(function() {
      submitBtn.innerText = 'STAY CONNECTED';
    }, 2000);
  }
});
e;
