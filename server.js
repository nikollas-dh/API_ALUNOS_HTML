const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors")

const app = express();
app.use(express.json());
app.use(cors())
const porta = 3000;

const conexao = mysql.createPool({
    host: "localhost",
    user: "root",
    password : "senai",
    database: "escola_db",
    port: 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit : 0
})

app.get("/alunos", async (req, res) => {
    try{
        const [retorno] = await conexao.query("SELECT * FROM alunos")
        res.status(200).json(retorno);
    }catch(err){
        console.log(err);
        res.status(500).json({erro: "Erro ao buscar alunos"})
    }

})

app.post("/alunos", async (req,res) =>{
    try {
        const {nome, cpf, cep= null,
            uf = null, rua = null,
            numero = null, complemento= null
        } = req.body;

        if(!nome || !cpf) return res.status(400).json({msg : "Nome e cpf são obrigatorio"})
        const sql = `
            INSERT INTO alunos (nome,cpf,cep, uf, rua , numero, complemento)
            VALUES  (?, ?, ?, ?, ?, ?, ?)`;

        const parametro = [nome, cpf, cep, uf, rua, numero, complemento]

        const [resultado] = await conexao.execute(sql,parametro)
        console.log(resultado)

        const [novo] = await conexao.execute(`SELECT * FROM alunos WHERE id =  ${resultado.insertId}`)
        res.status(201).json(novo[0]);
       
    } catch (error) {
        console.log(error);
        return res.status(500).json({erro : "Erro ao inserir alunos"});
    }
})

app.get("/alunos/:id", async(req, res)=>{
    const id = req.params.id
    try {
        const[retorno] = await conexao.query(`SELECT * FROM alunos WHERE id = ${id} `)
        res.status(200).json(retorno)
    } catch (error) {
        console.log(error)
        return res.status(500).json({erro: "Erro ao buscar aluno"})
    }
})

app.put("/alunos/:id", async(req,res)=>{
    console.log(req.body)
    try {
        const {id} = req.params
        const{nome, cpf, cep, uf, rua, numero, complemento
        } = req.body
        
        if(!nome || !cpf){
            return res.status(400).json({ msg: "Nome e CPF são obrigatórios" });
        }
    const sql = `
            UPDATE alunos 
            SET nome = ?, cpf = ?, cep = ?, uf = ?, rua = ?, numero = ?, complemento = ?
            WHERE id = ?
        `;

        const parametros = [nome, cpf, cep, uf, rua, numero, complemento, id];
        const [resultado] = await conexao.execute(sql, parametros);

        if (resultado.affectedRows === 0) {
            return res.status(404).json({ msg: "Aluno não encontrado" });
        }

        const [novo] = await conexao.execute(`SELECT * FROM alunos WHERE id = ?`, [id]);
        res.status(200).json(novo[0]);
       
    } catch (error) {
        console.error(error);
        return res.status(500).json({ erro: "Erro ao atualizar aluno" });
    }
});

// app.delete("/alunos/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const sql = `DELETE FROM alunos WHERE id = ?`;
//     const [resultado] = await conexao.execute(sql, [id]);

//     if (resultado.affectedRows === 0) {
//       return res.status(404).json({ msg: "Aluno não encontrado" });
//     }

//     res.status(200).json({ msg: "Aluno deletado com sucesso" });

//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ erro: "Erro ao deletar aluno" });
//   }
// });

app.delete("/alunos/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const [resultado] = await conexao.execute("DELETE FROM alunos WHERE id = ?", [id]);

        if (resultado.affectedRows === 0) {
            return res.status(404).json({ msg: "Aluno não encontrado" });
        }

        res.status(200).json({ msg: "Aluno excluído com sucesso!" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ erro: "Erro ao excluir aluno" });
    }
});

app.listen(porta, () => console.log(`Servidor rodando http://localhost:${porta}/`));