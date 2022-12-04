document.addEventListener('DOMContentLoaded', function() {
    nome = document.querySelector('#nome')
    nome.innerHTML = localStorage.getItem('nome')

    medicamento = document.querySelectorAll('#medicamento')
    for (i of medicamento){
        i.innerHTML = localStorage.getItem('medicamento')
    }

    horario = document.querySelector('#horario')
    horario.innerHTML = localStorage.getItem('horario')
})