const btnLogin = document.getElementById('btn-login');

const validacao = () => {
  const login = document.getElementById('login').value;
  const senha = document.getElementById('psw').value;
  if (login === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  }
  alert('Email ou senha inválidos.');
};


const btnSubmit = document.querySelector('#submit-btn');

btnSubmit.addEventListener('click', (event) => {
  const checkbox = document.querySelector('#checkboxInfo');

  if (checkbox.value !== 'true') {
    event.preventDefault();
  }
});
