//? O operador ! inverte o valor lógico da expressão.
//? Por exemplo:
//? !nome significa "o valor de nome está vazio, indefinido ou falso".
//? Em JavaScript, valores como "" (string vazia), null, undefined, ou 0 são avaliados como falsy.
//? O operador ! os tranforma em true, indicando que algo está faltando.
//? Assim, se qualquer um dos campos não for preenchido, o bloco if será executado, exibindo o alerta.


const formulario = document.getElementById("formulario")

//* Função para verificar se o valor contém apenas letras e espaços (Validação para o campo Nome)
function isValidName(string) {
    //^ Marcello - m=0 - a=1 - r=3
    for (let index = 0; index < string.length; index++) {
        let char = string[index];
        
        if (!(
          (char >= "A" && char <= "Z") ||
          (char >= "a" && char <= "z") ||
          char === " "
        )
      ) {
        return false;
      }
    }
    return true;
}

// console.log(isValidName('Marcello'));

//* Função para validar o CPF (11 digitos números)
function isValidCpf(cpf) {
  //console.log(isNaN(cpf)); // não é numérico
  return cpf.length === 11 && !isNaN(cpf);
}
//console.log(isValidCPF("sjhfsd"));

//* Função para validar o telefone (11 digitos numéricos)
function isValidPhone(phone) {
  return phone.length === 11 && !isNaN(phone);
}

//* Função para validar CEP (8 dígitos numéricos)
function isValidCEP(cep) {
  return cep.length === 8 && !isNaN(cep);
}

// console.log(isValidCEP("12345678"));
// console.log(isValidCEP("123456"));
// console.log(isValidCEP("asdfghjk"));


//* Função para validar o Estado (sigla dois caracteres, apenas letras maiúsculas)
function isValidStade(state) {
  return (
    state.length === 2 &&
    state[0] >= 'A' &&
    state[0] <= 'Z' &&
    state[1] >= 'A' &&
    state[1] <= 'Z'
  );
}
// console.log(isValidStade('SC'));
// console.log(isValidStade('sc'));
// console.log(isValidStade('SC2'));

//* Função para realizar validações
function validarEguardarFormulario(evento) {
  evento.preventDefault();

  //^ obter os valores dos campos de input
  const nome = document.getElementById('nome').value.trim(); //trim é responsável por retirar o espaço inicial e final da string
  const cpf = document.getElementById('cpf').value.trim();
  const telefone = document.getElementById('telefone').value.trim();
  const cep = document.getElementById('cep').value.trim();
  const rua = document.getElementById('rua').value.trim();
  const numero = document.getElementById('numero').value.trim();
  const complemento = document.getElementById('complemento').value.trim();
  const bairro = document.getElementById('bairro').value.trim();
  const cidade = document.getElementById('cidade').value.trim();
  const estado = document.getElementById('estado').value.trim();

  //* Verificação se todos os campos estão preenchidos
  if (
    !nome ||
    !cpf ||
    !telefone ||
    !cep ||
    !rua ||
    !numero ||
    !complemento ||
    !bairro ||
    !cidade ||
    !estado
  ) {
    alert('Por favor, preencha todos os campos');
    return;
  }

  if (!isValidName(nome)) {
    alert("O nome deve conter apenas letras e espaços");
    return;
  }

  if (!isValidCpf(cpf)) {
    alert("O CPF deve conter 11 dígitos numéricos");
    return;
  }

  if (!isValidPhone(telefone)) {
    alert("O Telefone deve conter 11 dígitos numéricos");
    return;
  }
  if (!isValidCEP(cep)) {
    alert("O CEP deve conter 8 dígitos numéricos");
    return;
  }
  if (!isValidStade(estado)) {
    alert("O Estado deve conter uma sigla de letras maiúsculas");
    return;
  }

  //^ Se tudo estiver correto, salvar os dados no localStorage
  const dadosFormulario = {
    nome,
    cpf,
    telefone,
    cep,
    rua,
    numero,
    complemento,
    bairro,
    cidade,
    estado,
  };

  localStorage.setItem("dadosFormulario", JSON.stringify(dadosFormulario));
  formulario.reset();
  alert("Dados salvos com sucesso!");


}

//* Adicionar o evento de submissão do formulário
formulario.addEventListener("submit", validarEguardarFormulario)
