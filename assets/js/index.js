const btnAddTarefa = document.getElementById("btn_add_tarefa")
const inputTarefa = document.getElementById("tarefas")
const listaTarefas = document.getElementById("lista_tarefas")
const concluirTarefa = document.getElementsByClassName("btn_conferir")
const deletarTarefa = document.getElementsByClassName("btn_remover")

// Adiciona tarefa ao clicar no botão

btnAddTarefa.addEventListener("click", (evento) => {
    evento.preventDefault()
    if(inputTarefa.value.trim() === "") {
        alert("Por favor, insira uma tarefa válida.")
        return
    } else {
        const tarefas =  document.getElementById("tarefas").value
        const novaTarefa = document.createElement("li")
        const divBtns = document.createElement("div")
        const btnConcluido = document.createElement("button")
        const btnDeletar = document.createElement("button")
        const iconeConcluido = document.createElement("i")
        const iconeDeletar = document.createElement("i")
        novaTarefa.classList.add("tarefa_item")
        divBtns.classList.add("btns")
        btnConcluido.classList.add("btn_conferir")
        btnDeletar.classList.add("btn_remover")
        iconeConcluido.classList.add("fa-solid", "fa-check")
        iconeDeletar.classList.add("fa-solid", "fa-xmark")
        iconeConcluido.style = "color: #34ab29;"
        iconeDeletar.style = "color: #de5151;"
        novaTarefa.innerText = tarefas
        btnConcluido.appendChild(iconeConcluido)
        btnDeletar.appendChild(iconeDeletar)
        divBtns.appendChild(btnConcluido)
        divBtns.appendChild(btnDeletar)
        novaTarefa.appendChild(divBtns)
        listaTarefas.appendChild(novaTarefa)
        inputTarefa.value = ""
    }
})

listaTarefas.addEventListener("click", (evento) => {
    const elemento = evento.target

    if(elemento.closest(".btn_remover")){
        const li = elemento.closest("li")
        li.remove()
    }

    if(elemento.closest(".btn_conferir")){
        const li = elemento.closest("li")
        li.classList.toggle("concluida")
    }
})