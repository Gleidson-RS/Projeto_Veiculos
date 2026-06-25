//IMPORTANDO ARQUIVOS
import {calculo} from "./script_calculo.js"




//PEGANDO ELEMENTOS DO DOM
const divLista = document.querySelector('#div-form-veiculo')
const formveiculo = document.querySelector('#form-veiculo')


//CRIANDO O ARRAY veiculo
const veiculo = []


//CAPTURAR O EVENTO submit DO FORMULÁRIO
formveiculo.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const dadosFormveiculo = new FormData(formveiculo)

    const veiculo = {
        nome: dadosFormveiculo.get('modelo'),
        idade: dadosFormveiculo.get('marca'),
        nome: dadosFormveiculo.get('placa'),
        nome: dadosFormveiculo.get('ano'),
        nome: dadosFormveiculo.get('valor'),
        renda: dadosFormveiculo.get('combustivel')
    }

    addveiculo(veiculo)
})


//FUNÇÃO ADICIONAR veiculo
const addveiculo = (objveiculo) => {
    veiculo.push(objveiculo)

    listveiculo()

    formveiculo.reset()
}


//FUNÇÃO LISTAR veiculo
const listveiculo = () => {
    // Limpa a lista antes de recriar
    divLista.innerHTML = ''

    veiculo.forEach((elem, i) => {
        divLista.innerHTML += ` ${i + 1} - ${elem.nome} - ${elem.idade} <br>`

    })
}