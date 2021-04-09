const campoCep = document.querySelector('#cep');

campoCep.oninvalid = function() {
    this.setCustomValidity('');

    if(!this.validity.valid) {
        this.setCustomValidity('Ops! Tem algo errado neste campo!');
        this.parentNode.classList.add('contatoCampo--erro');
    }
}

// var inputNome = document.getElementById('cep');
		
// inputNome.addEventListener('invalid', function() {
//         inputNome.setCustomValidity('Ops! Tem algo errado nesse campo!');
// }, false);

// inputNome.addEventListener('change', function() {
//         inputNome.setCustomValidity('');
// }, false);