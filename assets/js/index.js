const btnAddTarefa = document.getElementById("btn_add_tarefa")
const inputTarefa = document.getElementById("tarefas")
const listaTarefas = document.getElementById("lista_tarefas")
const modal = document.getElementById("modal")
const btn_fecharModal = document.getElementById("btn_fecharModal")

// Criação de lista no local storage
let lista = JSON.parse(localStorage.getItem("tarefas")) || []

// Função para renderizar tarefas ao carregar a página
const renderizar = () => {
    listaTarefas.innerHTML = ""
    lista.forEach((tarefas, id) => {
        const novaTarefa = document.createElement("li")
        const span = document.createElement("span")
        const divBtns = document.createElement("div")
        const btnConcluido = document.createElement("button")
        const btnDeletar = document.createElement("button")
        const iconeConcluido = document.createElement("i")
        const iconeDeletar = document.createElement("i")
        novaTarefa.classList.add("tarefa_item")
        if (tarefas.concluida) {
            novaTarefa.classList.add("concluida")
        }
        divBtns.classList.add("btns")
        btnConcluido.classList.add("btn_conferir")
        btnDeletar.classList.add("btn_remover")
        iconeConcluido.classList.add("fa-solid", "fa-check")
        iconeDeletar.classList.add("fa-solid", "fa-xmark")
        iconeConcluido.style = "color: #34ab29;"
        iconeDeletar.style = "color: #de5151;"
        span.textContent = tarefas.texto
        btnConcluido.appendChild(iconeConcluido)
        btnDeletar.appendChild(iconeDeletar)
        divBtns.appendChild(btnConcluido)
        divBtns.appendChild(btnDeletar)
        novaTarefa.appendChild(span)
        novaTarefa.appendChild(divBtns)
        listaTarefas.appendChild(novaTarefa)
        novaTarefa.dataset.id = id
    })
}

// Adiciona tarefa ao clicar no botão
btnAddTarefa.addEventListener("click", (evento) => {
    evento.preventDefault()
    if(inputTarefa.value.trim() === "") {
        modal.showModal()
    } else {
        const tarefas =  {
            texto: inputTarefa.value,
            concluida: false
        }
        lista.push(tarefas)
        localStorage.setItem("tarefas", JSON.stringify(lista))
        inputTarefa.value = ""
        renderizar()
    }
})

// Fechar modal aberto
btn_fecharModal.addEventListener("click", () => {
    modal.close()
})

// Marcar tarefa como concluída ou excluir
listaTarefas.addEventListener("click", (evento) => {
    const elemento = evento.target
    const li = elemento.closest("li")
    if(!li) return
    const id = Number(li.dataset.id)
    if(elemento.closest(".btn_remover")){
        lista = lista.filter((item, indice) => id !== indice )
        localStorage.setItem("tarefas", JSON.stringify(lista))
        renderizar()
    }
    if(elemento.closest(".btn_conferir")){
        lista[id].concluida = !lista[id].concluida
        localStorage.setItem("tarefas", JSON.stringify(lista))
        renderizar()
    }
})

renderizar()