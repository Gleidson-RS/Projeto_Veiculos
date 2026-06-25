//IMPORTANDO ARQUIVOS
import {calculo} from "./script_calculo.js"




//PEGANDO ELEMENTOS DO DOM
const divVeiculo = document.querySelector('#div-form-veiculo')
const formVeiculo = document.querySelector('#form-veiculo')
const divLista = document.querySelector('#div-lista')
const btnLimpar = document.querySelector('#btn-limpar')


//CRIANDO O ARRAY veiculo
const veiculo = []


//CAPTURAR O EVENTO submit DO FORMULÁRIO
formVeiculo.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const dadosFormveiculo = new FormData(formVeiculo)

    const veiculo = {
        modelo: dadosFormveiculo.get('modelo'),
        marca: dadosFormveiculo.get('marca'),
        placa: dadosFormveiculo.get('placa'),
        ano: dadosFormveiculo.get('ano'),
        valor: dadosFormveiculo.get('valor'),
        combustivel: dadosFormveiculo.get('combustivel')
    }

    addveiculo(veiculo)
})


//FUNÇÃO ADICIONAR veiculo
const addveiculo = (objveiculo) => {
    veiculo.push(objveiculo)

    listveiculo()

    formVeiculo.reset()
}


//FUNÇÃO LISTAR veiculo
const listveiculo = () => {
    // Limpa a lista antes de recriar
    divLista.innerHTML = ''

    veiculo.forEach((elem, i) => {
        divLista.innerHTML += ` ${i + 1} - ${elem.modelo} - ${elem.marca} - ${elem.placa} ${elem.ano} ${elem.valor} ${elem.combustivel} <br>`

    })
}
btnLimpar.addEventListener('click', () => {
    divLista.innerHTML = ''
})