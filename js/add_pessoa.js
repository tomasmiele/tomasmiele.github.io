document.addEventListener('DOMContentLoaded', function() {
    nome = document.querySelector('#nome')
    idade = document.querySelector('#idade')
    medicamento = document.querySelector('#medicamento')
    dosagem = document.querySelector('#dosagem')
    horario = document.querySelector('#horario')
    frequencia = document.querySelector('#frequencia')
    concluir = document.querySelector('input[type="button"]')
    bot_concluir = document.querySelector('#botao_concluir')

    aviso = document.createElement('h2')
    aviso.classList.add('aviso')
    aviso.innerHTML = 'Em seu estoque não há esse medicamento, você deve comprá-lo'
    main = document.querySelector('main')
    h2s = document.querySelectorAll('h2')
    condicao = true

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

    bot_concluir.addEventListener('click', function(){
        if(concluir.disabled == false){
            window.location.replace("novo_perfil.html")
        }
    })

    medicamento.addEventListener('input', function() {
        localStorage.setItem('medicamento', medicamento.value)
        update()
        medicamentos = localStorage.getItem('estoque')
        if (medicamentos.includes(medicamento.value) == false){
            if(condicao == true){
                main.insertBefore(aviso, h2s[1])
                condicao = false
            }}
        else{
            if (main.contains(aviso) == true){
                aviso.remove()
                condicao = true
            }}
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