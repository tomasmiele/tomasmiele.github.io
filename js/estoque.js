document.addEventListener('DOMContentLoaded', function() {
    medicamentos_no_estoque = document.querySelectorAll('h1')

    medicamentos = []

    for (i of medicamentos_no_estoque){
        medicamentos.push(i.innerHTML)
    }
    localStorage.setItem('estoque', medicamentos)

    remedios = localStorage.getItem('estoque')
})