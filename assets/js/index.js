const btnAddTarefa = document.getElementById("btn_add_tarefa")
const inputTarefa = document.getElementById("tarefas")
const listaTarefas = document.getElementById("lista_tarefas")
const modal = document.getElementById("modal")
const btn_fecharModal = document.getElementById("btn_fecharModal")

// localStorage.removeItem("tarefas")
// Criação de lista no local storage
let lista = JSON.parse(localStorage.getItem("tarefas")) || []

// Função para renderizar tarefas
const renderizar = () => {
    listaTarefas.innerHTML = ""
    lista.forEach((tarefas, id) => {
btnAddTarefa.addEventListener("click", (evento) => {
    evento.preventDefault()
    if(inputTarefa.value.trim() === "") {
        modal.showModal()
    } else {
        const tarefas =  inputTarefa.value
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
        novaTarefa.textContent = tarefas
        btnConcluido.appendChild(iconeConcluido)
        btnDeletar.appendChild(iconeDeletar)
        divBtns.appendChild(btnConcluido)
        divBtns.appendChild(btnDeletar)
        novaTarefa.appendChild(divBtns)
        listaTarefas.appendChild(novaTarefa)
        novaTarefa.dataset.id = id
    });
}

// Adiciona tarefa ao clicar no botão
btnAddTarefa.addEventListener("click", (evento) => {
    evento.preventDefault()
    if(inputTarefa.value.trim() === "") {
        modal.showModal()
    } else {
        const tarefas =  document.getElementById("tarefas").value
        lista.push(tarefas)
        localStorage.setItem("tarefas", JSON.stringify(lista))
        inputTarefa.value = ""
        renderizar()
    }
})

btn_fecharModal.addEventListener("click", () => {
            modal.close()
})

listaTarefas.addEventListener("click", (evento) => {
    const elemento = evento.target

    if(elemento.closest(".btn_remover")){
        const li = elemento.closest("li")
        const id = Number(li.dataset.id)
        lista = lista.filter((item, indice) => id !== indice )
        localStorage.setItem("tarefas", JSON.stringify(lista))
        renderizar()
    }

    if(elemento.closest(".btn_conferir")){
        const li = elemento.closest("li")
        li.classList.toggle("concluida")
    }
})

renderizar()