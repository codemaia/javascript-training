const form = document.querySelector('[data-js="form-cadastro"]');
const inputProcesso = document.querySelector('[data-js="input-process"]');
const tipoProcesso = document.querySelector('select[data-js="tipo-processo"]');

form.addEventListener('submit', event => {
    event.preventDefault();

    const processName = inputProcesso.value;
    const tipoProcessoData = tipoProcesso.options[tipoProcesso.selectedIndex].text;


    const objData = {
        processo : processName,
        tipoProcesso : tipoProcessoData,
    }

    console.log(objData);
})