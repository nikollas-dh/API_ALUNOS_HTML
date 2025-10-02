const API = 'http://localhost:3000/alunos'

async function carregarTabela() {

    try {
        const resposta = await fetch(API)
        const ALUNOS = await resposta.json()
        console.log(ALUNOS)

        const tbody = document.getElementById("tbody")

        tbody.innerHTML = "<tr><td colspan='10'>Carregando...</td></tr>"
        tbody.innerHTML = "";
        tbody.innerHTML = ALUNOS.map(a =>
            `<tr>
                <td>${a.id}</td>
                <td>${a.nome}</td>
                <td>${a.cpf}</td>
                <td>${a.cep}</td>
                <td>${a.uf}</td>
                <td>${a.rua} senai</td>
                <td>${a.numero}</td>
                <td>${a.complemento}</td>
                <td> 
                  <button class = "btnEditar">
                      <a href="editar.html?id=${a.id}">Editar</a>
                  </button> 
                 <button class "btnExcluir" onclick="excluirAluno(${a.id})">Excluir</button>
                </td>
            </tr>`
        ).join("");


    } catch (error) {
        console.error(error.message)

    }

}

async function excluirAluno(id) {
    // e.preventDefault();
  //  alert("aaaaaaaa")
    const confirmarExclusao = confirm(`Deseja realmente excluir o aluno de ID ${id}?`);
    if (!confirmarExclusao) {
        return
    }
    try {
        const resposta = await fetch(`${API}/${id}`, {
            method: "DELETE",

        })
        // requisicao.status === 200 ? console.log(requisicao.json()) : console.log("Erro na requisição")
        if (resposta.status === 200) {
            console.log(resposta.json())
            alert("Aluno excluído com sucesso!")
            carregarTabela();

        } else {
            console.log("Erro na requisição")
        }
    } catch (error) {
        console.error(error)
    }
}

carregarTabela();

