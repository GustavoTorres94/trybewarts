const btnLogin = document.getElementById('btn-login');

const validacao = () => {
  const login = document.getElementById('login').value;
  const senha = document.getElementById('psw').value;
  if (login === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } alert('Email ou senha inválidos.');
};

btnLogin.addEventListener('click', validacao);
