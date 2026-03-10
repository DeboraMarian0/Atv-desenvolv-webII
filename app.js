document.querySelector(".container").style.border = "#000 solid 2px"
document.querySelector(".container").style.marginTop = "30px"
document.querySelector(".container").style.padding = "20px"
document.querySelector("h1").style.backgroundColor = "#42ecb9"
document.querySelector("h1").style.textAlign = "center"
document.querySelector("h1").style.padding = "4px"

function mudarTema(){
    var tema = document.querySelector("input[name = tema]:checked").value //O :checked é para informar que é para pegar o valor que foi marcado pelo usuário. Se é o escuro, pegar o value escuro.
    if(tema == "escuro"){
        document.querySelector(".container").style.border = "#fff solid 2px"
        document.querySelector(".container").style.backgroundColor = "#000"
        document.querySelector("body").style.backgroundColor = "#000"
        document.querySelector("div").style.color = "#fff"
        document.querySelector("h1").style.backgroundColor = "#c920bb"
    }else{
        document.querySelector(".container").style.border = "#000 solid 2px"
        document.querySelector(".container").style.backgroundColor = "#fff"
        document.querySelector("body").style.backgroundColor = "#fff"
        document.querySelector("div").style.color = "#000"
        document.querySelector("h1").style.backgroundColor = "#42ecb9"
    }
}

let lista = document.getElementById("lista") //Variável global - Essa variável representa isso no HTML: <ul id="lista"></ul>

function adicionar(){
    var conteudoAtual = lista.innerHTML //pega o conteúdo atual da lista e guarda
    var nome = document.getElementById("nome").value //Procura o campo de texto pelo id nome e pega o valor que o usuário digitou com o value
    var telefone = document.getElementById("telefone").value
    var tipoContato = document.getElementById("contato").value

    if(nome == ""){
        document.querySelector(".erro").innerHTML = "Preencha o campo 'Nome'"
        document.querySelector(".erro").style.color = "red"
    }else if(telefone == ""){
        document.querySelector(".erro").innerHTML = "Preencha o campo 'Telefone'"
        document.querySelector(".erro").style.color = "red"
    }else{
        document.querySelector(".erro").innerHTML = "" //retira a frase de erro se caso o usuário deixou algum campo vazio
        var itemLista = "<li>" + nome + " " +"["+ telefone + "] " + "[" + tipoContato + "]" + "</li>" // cria um novo item de lista (<li>)
        var novoConteudo = conteudoAtual + itemLista //Aqui acontece a junção do que já existe com o novo item. 
        lista.innerHTML = novoConteudo //faz com que o conteúdo da lista no HTML seja atualizado, mostrando os dados inseridos pelo usuário
        
        document.getElementById("nome").value = "" //limpa o campo depois de clicar no adicionar
        document.getElementById("telefone").value = ""
        document.getElementById("contato").value = "Outro"
    }
    
}

function limpar(){
    lista.innerHTML = ""
}

