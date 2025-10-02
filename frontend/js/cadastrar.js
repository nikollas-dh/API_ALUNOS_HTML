const API = 'http://localhost:3000/alunos'


const inputNome = document.getElementById("nome")
const inputCpf = document.getElementById("cpf")
const inputCep = document.getElementById("cep")
const inputUf = document.getElementById("uf")
const inputRua = document.getElementById("rua")
const inputNumero = document.getElementById("numero")
const inputComplemento = document.getElementById("complemento")
const formAluno = document.getElementById("form-aluno")


async function salvar(e) {
  e.preventDefault();
  console.log("Salvando aluno");
  const nome = inputNome.value.trim();
  const cpf = inputCpf.value.trim();
  const cep = inputCep.value.trim();
  const uf = inputUf.value.trim();
  const rua = inputRua.value.trim();
  const numero = inputNumero.value.trim();
  const complemento = inputComplemento.value.trim();

  if (!nome || !cpf) {
    alert("Gentileza preecher os campos")
    return;
  }
  const novoAluno = {
    nome, cpf, cep, uf, rua, numero, complemento
  }

  // console.log(alunos)

  try {
    const requisicao = await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(novoAluno)
    })

    if (requisicao.status === 201) {
      const dados = await requisicao.json();
      console.log(dados)
      alert("Aluno cadastrado com sucesso!")
      window.location.href = "menu.html";
    } else {
      console.log("Erro na requisição")
    }
  } catch (error) {
    console.error(error)
  }
  // carregarTabela()
}

formAluno.addEventListener("submit", salvar)