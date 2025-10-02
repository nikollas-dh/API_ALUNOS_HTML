console.log("Funcionando");

const urlParametro = new URLSearchParams(window.location.search)
const id = urlParametro.get("id")

console.log("ID do aluno para editar", id)

const inputID = document.getElementById("id")
inputID.value = id;

const API = 'http://localhost:3000/alunos'

async function carregarAluno() {
    if (!id) {
        alert("Nenhum aluno selecionado para edição")
        return
    }
    const resposta = await fetch(`${API}/${id}`)
    const ALUNO = await resposta.json()
    console.log(ALUNO)

    document.getElementById("nome").value = ALUNO[0].nome;
    document.getElementById("cpf").value = ALUNO[0].cpf;
    document.getElementById("cep").value = ALUNO[0].cep;
    document.getElementById("uf").value = ALUNO[0].uf;
    document.getElementById("rua").value = ALUNO[0].rua;
    document.getElementById("numero").value = ALUNO[0].numero;
    document.getElementById("complemento").value = ALUNO[0].complemento;
}

async function Atualizar(e) {
    e.preventDefault();
   // alert("fpEGOU O BAO DFÇJKLAJKFDSAÇL")
    const nome = document.getElementById("nome").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const cep = document.getElementById("cep").value.trim();
    const uf = document.getElementById("uf").value.trim();
    const rua = document.getElementById("rua").value.trim();
    const numero = document.getElementById("numero").value.trim();
    const complemento = document.getElementById("complemento").value.trim();

    const alunoEditado = {
        nome, cpf, cep, uf, rua, numero, complemento
    };

    console.log(alunoEditado)
    if (!nome && !cpf) {
        alert("Gentileza preecher os campos")
        return
    }
    const novoAluno = {
        nome, cpf, cep, uf, rua, numero, complemento
    }
    try {
        const requisicao = await fetch(`${API}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: novoAluno ? JSON.stringify(alunoEditado) : undefined
        })
        // requisicao.status === 201 ? console.log(requisicao.json()) : console.log("Erro na requisição")
        if (requisicao.status === 200) {
            console.log(requisicao.json())
            alert("Aluno atualizado com sucesso")
            // Redirect to a new URL
            window.location.href = "menu.html";
        } else {
            console.log("Erro na requisição", requisicao.status)
        }
    } catch (error) {
        console.error("Erro na atualização", error)
    }
}

carregarAluno()

const formAluno = document.getElementById("form-aluno");

formAluno.addEventListener("submit", Atualizar);
