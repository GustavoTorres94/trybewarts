const btnSubmit = document.querySelector('#btn-login');
const btnEnviar = document.querySelector('#submit-btn');
const check = document.querySelector('#agreement');

const validacao = () => {
  const login = document.getElementById('login').value;
  const senha = document.getElementById('psw').value;
  if (login === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  }
  alert('Email ou senha inválidos.');
};

btnSubmit.addEventListener('click', validacao);

const enviar = () => {
  const confirm = document.querySelector('#agreement');

  if (confirm.checked) {
    btnEnviar.disabled = false;
  }
};
check.addEventListener('click', enviar);

// btnEnviar.addEventListener('click', enviar);

// const enviar = (event) => {
//   const checkbox = document.querySelector('#checkboxInfo');

//   if (checkbox.value !== 'true') {
//     event.preventDefault();
//   } else/* (checkbox.value !== 'false') */ {
//     btnSubmit.addEventListener('click', validacao);
//   }
// };

// btnEnviar.addEventListener('click', enviar);
