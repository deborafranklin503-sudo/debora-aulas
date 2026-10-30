// const express = require('ecpress');
// const app = express();

// app.use(express.jawson());

// app.post('/usuarios',function(req,res)){
//     const nome = req.body.nome;
//     const cargo = req.body.cargo;

//     console.log('Nome:',nome);
//     console.log('Cargo:',cargo);

//     res.status(201).json({
//         mensagem: 'usuário cadastrado com sucesso!',
//         id:1,
//         nome:nome,
//         cargo:cargo
//     })
// }
// app.listen(3000,function(){
//     console.log('Servidor rodando na porta 3000');
// });


const formulario = document.getElementById('formularioUsuario');
const listaVisual = document.getElementById('listaVisual');

let nomeUsuarioSendoEditado = null;

function carregarUsuarios() {

    fetch('http://localhost:3000/usuarios')
        .then(function (resposta) {
         
            return resposta.json();
        })
        .then(function (listaDeUsuarios) {
        
            listaVisual.innerHTML = '';
           
            listaDeUsuarios.forEach(function (user) {
              
                const itemLista = document.createElement('li');
           
                itemLista.innerHTML = `
                <span><strong>${user.nome}</strong> - ${user.cargo}</span>
                <div class="lista-user">
                    <!-- Botão de editar que envia os dados atuais desta linha para a função de preparação -->
                    <button class="btn-editar" onclick="prepararEdicao('${user.nome}', '${user.cargo}')">Editar</button>
                    <!-- Botão de excluir que passa o nome do usuário a ser removido -->
                    <button class="btn-deletar" onclick="deletarUsuario('${user.nome}')">Excluir</button>
                </div>
            `;
            
                listaVisual.appendChild(itemLista);
            });
        })
        .catch(function (erro) {
          
            console.error('Erro ao buscar usuários:', erro);
        });
}

formulario.addEventListener('submit', function (evento) {
   
    evento.preventDefault();

    const dadosUsuario = {
        nome: document.getElementById('campoNome').value,
        cargo: document.getElementById('campoCargo').value
    };

    if (nomeUsuarioSendoEditado !== null) {
    
        fetch(`http://localhost:3000/usuarios/${(nomeUsuarioSendoEditado)}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
        })
           

    } else {
       
        fetch('http://localhost:3000/usuarios', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dadosUsuario)
        })
            .then(function (resposta) {
                return resposta.json();
            })
            .then(function (usuarioSalvo) {
                formulario.reset(); 
                carregarUsuarios(); 
            })
            .catch(function (erro) {
                alert('Erro ao salvar usuário.');
            });
    }
});


function prepararEdicao(nome, cargo) {
  
}


function deletarUsuario(nome) {
    
}




































































































































