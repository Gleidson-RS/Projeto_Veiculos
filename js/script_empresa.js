//IMPORTANDO ARQUIVOS
import {CalculoValor} from "./script_calculo.js"
import {CalValor_premi} from "./script_calculo.js"



//PEGANDO ELEMENTOS DO DOM
const divempresa = document.querySelector('#div-form-empresa')
const formempresa = document.querySelector('#form-empresa')
const formulario = document.querySelector('#div-formulario')
const btnLimpar = document.querySelector('#btn-limpar')


//CRIANDO O ARRAY empresa
const empresa = []

//CAPTURAR O EVENTO submit DO FORMULÁRIO
formempresa.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const dadosFormempresa = new FormData(formempresa)

    const empresa = {
        descrição: dadosFormempresa.get('descrição'),
        quantidade: dadosFormempresa.get('quantidade'),
        Valor_a_Recebera: dadosFormempresa.get('Valor_a_Recebera'),
        Valor_da_premiaçã: dadosFormempresa.get('Valor_da_premiaçã'),
        valor_final: dadosFormempresa.get('valor_final'),

    }   
empresa.Valor_a_Recebera = CalculoValor(empresa.valor)
empresa.Valor_da_premiação = CalValor_premi(empresa)
valor_final = Valor_a_Recebera + Valor_da_premiação


    addempresa(empresa)
})


//FUNÇÃO ADICIONAR empresa
const addempresa = (objempresa) => {
    empresa.push(objempresa)

    listempresa()

    formempresa.reset()
}


//FUNÇÃO LISTAR empresa
const listempresa = () => {
    // Limpa a lista antes de recriar
    formulario.innerHTML = ''

    empresa.forEach((elem, i) => {
        formulario.innerHTML += 
        `${i + 1} -
         descrição:${elem.descrição} -
         quantidade:${elem.quantidade} -
         Valor_a_Recebera:${elem.Valor_a_Recebera} -
         Valor_da_premiação:${elem.Valor_da_premiação} -
         Valor:${elem.valor_final} - <br>`

    })
}
