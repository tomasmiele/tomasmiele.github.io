document.addEventListener('DOMContentLoaded', function() {
    botao1 = document.querySelector('#btn1')
    botao2 = document.querySelector('#btn2')
    quantidade = document.querySelector('#qnt')
    lista_quantidade = []

    botao1.addEventListener('click', function(){
        if(lista_quantidade.length > 0){
            lista_quantidade.pop()
            quantidade.innerHTML = lista_quantidade.length
        }
        else{
            quantidade.innerHTML = lista_quantidade.length
        }
        localStorage.setItem('encomenda1', quantidade.innerHTML)
    })

    botao2.addEventListener('click', function(){
        lista_quantidade.push(0)
        quantidade.innerHTML = lista_quantidade.length
        localStorage.setItem('encomenda1', quantidade.innerHTML)
    })


})