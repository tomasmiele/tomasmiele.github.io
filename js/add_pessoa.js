document.addEventListener('DOMContentLoaded', function() {
    nome = document.querySelector('#nome')
    idade = document.querySelector('#idade')
    medicamento = document.querySelector('#medicamento')
    dosagem = document.querySelector('#dosagem')
    horario = document.querySelector('#horario')
    frequencia = document.querySelector('#frequencia')
    concluir = document.querySelector('input[type="submit"]')

    function update() {
        if(nome.value == '' || idade.value == '' || medicamento.value =='' || dosagem.value =='' || horario.value =='' || frequencia.value =='') {
            concluir.disabled = true
        } else {
            concluir.disabled = false
        }
    }
    nome.addEventListener('input', function() {
        localStorage.setItem('nome', nome.value)
        update()
    })

    idade.addEventListener('input', function() {
        localStorage.setItem('idade', idade.value)
        update()
    })
    medicamento.addEventListener('input', function() {
        localStorage.setItem('medicamento', medicamento.value)
        update()
        medicamentos = localStorage.getItem('estoque')
        console.log(medicamentos)
        if (medicamentos.includes(medicamento) == false){
                console.log('ok')
            }
    })
    dosagem.addEventListener('input', function() {
        localStorage.setItem('dosagem', dosagem.value)
        update()
    })
    horario.addEventListener('input', function() {
        localStorage.setItem('horario', horario.value)
        update()
    })
    frequencia.addEventListener('input', function() {
        localStorage.setItem('frequencia', frequencia.value)
        update()
    })
    update()
})