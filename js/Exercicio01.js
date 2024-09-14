let form = document.getElementById("formTarefas");
let listaTarefas = document.getElementById("listaTarefas");

//evento para adicionar uma nova tarefa

form.addEventListener("submit", function(evento) {

    evento.preventDefault(); // previne o compoartamento padrão do formuláRrio

    let tarefaTexto = document.getElementById("novaTarefa").value;

    // Verifica se o campo de texto não está vazio

    if (tarefaTexto !== ""){

        let novaTarefa = document.createElement("li");
        novaTarefa.innerText = tarefaTexto;

        //Adiciona evento para marcar a tarefa como concluída

        novaTarefa,this.addEventListener("click" , function(){

            this.classList.toggle ("concluida");
        });

        // Cria um botão para remover a tarefa

        let botaoRemover = document.createElement("button");
        botaoRemover.innerText = "Remover";
        botaoRemover.addEventListener("click",function(){
            listaTarefas.removeChild(novaTarefa); //Remova a tarefa da lista

       });

       novaTarefa.appendChild(botaoRemover);
       listaTarefas.appendChild(novaTarefa);
       document.getElementById ("novaTarefa").value = "";
    }
});