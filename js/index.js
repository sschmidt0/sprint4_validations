const searchInput = document.getElementById('searchInput');
const emailLogin = document.getElementById('emailLogin');
const passwordLogin = document.getElementById('passwordLogin');
const firstName = document.getElementById('firstname');
const surname = document.getElementById('surname');
const emailRegister = document.getElementById('email');
const passwordRegister = document.getElementById('password');
const passwordRegister2 = document.getElementById('password2');
const province = document.getElementById('province');

const searchForm = document.getElementById('searchForm');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

let passwordValue = passwordRegister.value;

const hasNumber = (str) => {
  let booleanNum = false;
  [...str].forEach(char => {
    if (!isNaN(parseInt(char))) booleanNum = true;
  });
  return booleanNum;
}

const hasMajuscule = (str) => {
  let booleanMaj = false;
  [...str].forEach(char => {
    console.log(char);
    if (char === char.toUpperCase()) booleanMaj = true;
  });
  return booleanMaj;
}


const handleSearch = () => {
  searchForm.classList.remove('is-invalid');

  if (searchInput.value == '') {
    searchInput.classList.add('is-invalid');
    document.getElementById("errorSearch").textContent = "Introdueix una paraula per cercar";
    error = true;
  } else if (searchInput.value.length < 3) {
    searchInput.classList.add('is-invalid');
    document.getElementById("errorSearch").textContent = "La paraula ha de tenir almenys 3 caràcters";
    error = true;
  }

  console.log(searchInput.value);
  return false;
}

const handleSubmitLogin = () => {
  let errors = false;
  loginForm.classList.remove('is-invalid');

  if (emailLogin.value == '') {
    emailLogin.classList.add('is-invalid');
    document.getElementById('errorEmailLogin').innerHTML = "Introdueix el correu electrònic";
    errors = true;
  } else if (!validar_email(emailLogin.value)) {
    emailLogin.classList.add('is-invalid');
    document.getElementById('errorEmailLogin').innerHTML = "El correu no és vàlid";
    errors = true;
  }

  if (passwordLogin.value == '') {
    passwordLogin.classList.add('is-invalid');
    document.getElementById('errorPasswordLogin').innerHTML = "Introdueix la paraula de pas";
    errors = true;
  }

  if(!errors) {
    return true;
  }
  return false;
}

const handleSubmitRegister = () => {
  let errors = false;
  registerForm.classList.remove('is-invalid');

  if (firstName.value == '') {
    firstName.classList.add('is-invalid');
    document.getElementById('errorFirstname').textContent = "Introdueix un nom";
    errors = true;
  }

  if (surname.value == '') {
    surname.classList.add('is-invalid');
    document.getElementById('errorSurname').textContent = "Introdueix almenys un cognom";
    errors = true;
  }

  if (emailRegister.value == '') {
    emailRegister.classList.add('is-invalid');
    document.getElementById('errorEmailRegister').textContent = "Introdueix un correu electrònic";
    errors = true;
  } else if (!validar_email(emailRegister.value)) {
    emailRegister.classList.add('is-invalid');
    document.getElementById('errorEmailRegister').textContent = "El correu no és vàlid";
    errors = true;
  }

  if (passwordRegister.value == '') {
    passwordRegister.classList.add('is-invalid');
    document.getElementById('errorPasswordRegister').textContent = "Introdueix una paraula de pas";
    errors = true;
  } else if (passwordRegister.value.length < 8) {
    passwordRegister.classList.add('is-invalid');
    document.getElementById('errorPasswordRegister').textContent = "La paraula de pas ha de tenir almenys 8 caràcters";
    errors = true;
  } else if (!hasNumber(passwordRegister.value)) {
    passwordRegister.classList.add('is-invalid');
    document.getElementById('errorPasswordRegister').textContent = "La paraula de pas ha de tenir almenys 1 nombre";
    errors = true;
  } else if (!hasMajuscule(passwordRegister.value)) {
    passwordRegister.classList.add('is-invalid');
    document.getElementById('errorPasswordRegister').textContent = "La paraula de pas ha de tenir almenys una majúscula";
    errors = true;
  }

  if (passwordRegister2.value !== passwordRegister.value) {
    passwordRegister2.classList.add('is-invalid');
    document.getElementById('errorPasswordRegister2').textContent = "Les paraules de pas no coincideixen";
    errors = true;
  } else if (passwordRegister2.value == '') {
    passwordRegister2.classList.add('is-invalid');
    document.getElementById('errorPasswordRegister2').textContent = "Confirma la paraula de pas";
    errors = true;
  }

  if (province.value == '') {
    province.classList.add('is-invalid');
    document.getElementById('errorProvince').textContent = "Selecciona una província";
    errors = true;
  }

  if(!errors) {
    return true;
  }
  return false;
}


searchForm.addEventListener('blur', (e) => {
  e.preventDefault();
  if (e.target.value != '') e.target.classList.remove('is-invalid');
}, true);

loginForm.addEventListener('blur', (e) => {
  if (e.target.value != '') e.target.classList.remove('is-invalid');
}, true);

registerForm.addEventListener('blur', (e) => {
  if (e.target.value != '') e.target.classList.remove('is-invalid');
}, true);


function validar_email(email) {
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}
