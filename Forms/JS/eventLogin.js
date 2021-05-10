const error = document.getElementsByClassName('error');
const email = document.getElementById('email');
const passw = document.getElementById('password');
const submit = document.getElementById('submit');

let errorArray = [];

// email validation

email.onblur = function() {validateEmail(email.value)};
email.onfocus = function() {hideError(0)};

function validateEmail(emailInput){
    var emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailInput.match(emailFormat)) {
        changeErrorStyle(0);
        errorArray.push("The e format is invalid");
        return false;
    }
    return true;
};

// password validation

passw.onblur = function() {validatePassword(passw.value)};
passw.onfocus = function() {hideError(1)};

function validatePassword(passwInput){
var passwFormat = /[A-Za-z0-9]{8,}/;
    if (!passwInput.match(passwFormat)) {
    changeErrorStyle(1);
    errorArray.push("The p format is invalid");
    return false;
}
return true;
}

// span

function changeErrorStyle(index) {
    error[index].style.display = 'unset';
};
function hideError(index) {
    error[index].style.display = 'none'
};


document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
  showValues();
  handleLogin();
});


function showValues() {
  const valuesToShow = document.getElementById('hidden');
  valuesToShow.innerHTML = null;
  valuesToShow.innerHTML =
      `<ul>
          <li>Email: ${email.value}</li>
          <li>Password: ${password.value}</li>
      </ul>`;
}

// Changes for new task

function handleLogin() {
  const emailvalue = document.getElementById('email').value;
  const passwordValue = document.getElementById('password').value;

  fetch(`http://localhost:4000/login`, {
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          email: emailvalue,
          password: passwordValue
      })
  })
      .then(res => res.json())
      .then(response => console.log('Success:', response));
};