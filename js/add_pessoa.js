document.addEventListener('DOMContentLoaded', function() {
    nome = document.querySelector('#nome')
    idade = document.querySelector('#idade')
    medicamento = document.querySelector('#medicamento')
    dosagem = document.querySelector('#dosagem')
    horario = document.querySelector('#horario')
    frequencia = document.querySelector('#frequencia')
    
    concluir = document.querySelector('input[type="submit"]')

    //localStorage

    localStorage.setItem('nome', nome)
    localStorage.setItem('idade', idade.value)
    localStorage.setItem('medicamento', medicamento.value)
    localStorage.setItem('dosagem', dosagem.value)
    localStorage.setItem('horario', horario.value)
    localStorage.setItem('frequencia', frequencia.value)

    //Abilitar botão sumit

    function update() {
        if(nome.value == '' || idade.value == '' || medicamento.value =='' || dosagem.value =='' || horario.value =='' || frequencia.value =='') {
            concluir.disabled = true
        } else {
            concluir.disabled = false
        }
    }
    nome.addEventListener('input', function() {
        update()
    })

    idade.addEventListener('input', function() {
        update()
    })
    medicamento.addEventListener('input', function() {
        update()
    })
    dosagem.addEventListener('input', function() {
        update()
    })
    horario.addEventListener('input', function() {
        update()
    })
    frequencia.addEventListener('input', function() {
        update()
    })
    update()
})