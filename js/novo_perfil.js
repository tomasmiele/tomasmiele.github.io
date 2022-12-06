document.addEventListener('DOMContentLoaded', function() {
    main = document.querySelector('main')
    header = document.querySelector('header')
    
    nome = document.querySelector('#nome')
    nome.innerHTML = localStorage.getItem('nome')

    horario = document.querySelector('#horario')
    horario.innerHTML = localStorage.getItem('horario')

    medicamento_1 = header.querySelector('h2')
    medicamento_1_2 = main.querySelector('p')
    medicamento_1.innerHTML = localStorage.getItem('medicamento')
    medicamento_1_2.innerHTML = localStorage.getItem('medicamento')
})