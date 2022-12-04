document.addEventListener('DOMContentLoaded', function() {
    main = document.querySelector('main')
    add_pessoa = document.querySelector('#add_pessoa')

    function NovoElemento(event){
        novo_h3 = document.createElement('h3')
        novo_h3.classList.add('espacar_leve')
        novo_h3.innerHTML = localStorage.getItem('nome')
        main.insertBefore(novo_h3, add_pessoa)
    }
    NovoElemento()
})