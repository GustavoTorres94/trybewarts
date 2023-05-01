const btnSubmit = document.querySelector('#btn-login');

const validacao = () => {
  const login = document.getElementById('login').value;
  const senha = document.getElementById('psw').value;
  if (login === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  }
  alert('Email ou senha inválidos.');
};

btnSubmit.addEventListener('click', validacao);

const btnEnviar = document.querySelector('#submit-btn')

function enviar(event) {
  const checkbox = document.querySelector('#checkboxInfo');

  if (checkbox.value !== 'true') {
    event.preventDefault();
  } else/* (checkbox.value !== 'false')*/ {
    btnSubmit.addEventListener('click', validacao);
  }
}

btnEnviar.addEventListener('click', enviar);
