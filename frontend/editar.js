console.log("Funcionando");
const urlParametro = new URLSearchParams(window.location.search)
const id = urlParametro.get("id")

console.log("ID do aluno para editar", id)

const inputID = document.getElementById("id")
inputID.value = id;

const API = 'http://localhost:3000/alunos'

async function carregarAluno() {
    if(!id){
        alert("Nenhum aluno selecionado para edição")
        return
    }
    const resposta = await fetch(`${API}/${id}`)
    const ALUNO = await resposta.json()
    console.log(ALUNO)

    document.getElementById("nome").value = aluno[0].nome;
    document.getElementById("cpf").value = aluno[0].cpf;
    document.getElementById("cep").value = aluno[0].cep;
    document.getElementById("uf").value = aluno[0].uf;
    document.getElementById("rua").value = aluno[0].rua;
    document.getElementById("numero").value = aluno[0].numero;
    document.getElementById("complemento").value = aluno[0].complemento;
}

carregarAluno()