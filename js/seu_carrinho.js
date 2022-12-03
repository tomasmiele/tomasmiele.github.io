document.addEventListener('DOMContentLoaded', function() {
    encomenda1 = document.querySelector('#encomenda1')
    quantidade_e1 = localStorage.getItem('encomenda1')
    encomenda1.innerHTML = 'Losartana / ' + quantidade_e1 + ' caixas'
    
})