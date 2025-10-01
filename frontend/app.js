const API = 'http://localhost:3000/alunos'

async function carregarTabela() {

  try {
    const resposta = await fetch(API)
    const ALUNOS = await resposta.json()
    console.log(ALUNOS)

    // console.log(resposta.json())
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
                  <button>
                      <a href="editar.html?id=${a.id}">Editar</a>
                  </button> 
                 <button onclick="excluirAluno(${a.id})">Excluir</button>
                </td>
            </tr>`
    ).join("");


  } catch (error) {
    console.error(error.message)

  }



  // setTimeout(() => {

  // }, 2000) // 5 segundos
}

// async function Deletar(id) {
//  // e.preventDefault();
//   alert("aaaaaaaa")

//    try{
//       const resposta = await fetch(`${API}/${id}`, {
//         method: "DELETE",
  
//       })
//    // requisicao.status === 200 ? console.log(requisicao.json()) : console.log("Erro na requisição")
//    if(requisicao.status ===200){
//       console.log(requisicao.json())
//    }else{
//      console.log("Erro na requisição")
//    }
//   }catch(error) {
//     console.error(error)
//   }
//  // carregarTabela()
// }

// async function Deletar(id) {
//   const confirmar = confirm(`Deseja realmente excluir o aluno de ID ${id}?`);
//   if (!confirmar) {
//     return
//   }

//   try {
//     const resposta = await fetch(`${API}/${id}`, {
//       method: "DELETE",
//     });

//     if (resposta.status ===200) {
//       alert("Aluno excluído com sucesso!");
//        carregarTabela(); 
//     } else {
//       alert("Erro ao excluir o aluno.");
//       console.log(await resposta.json());
//     }
//     } catch (error) {
//       console.error(error);
//       alert("Erro na requisição.");
//   }
// }

async function excluirAluno(id) {
    if (!confirm("Tem certeza que deseja excluir este aluno?")) {
        return;
    }

    try {
        const resposta = await fetch(`http://localhost:3000/alunos/${id}`, {
            method: "DELETE"
        });

        if (resposta.ok) {
            alert("Aluno excluído com sucesso!");
            carregarTabela(); // recarrega a lista
        } else {
            alert("Erro ao excluir aluno!");
        }
    } catch (error) {
        console.error("Erro:", error);
        alert("Erro de conexão com servidor.");
    }
}

carregarTabela();

