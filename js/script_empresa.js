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


        descriçao: dadosFormempresa.get('descriçao'),
        quantidade: Number(dadosFormempresa.get('quantidade'))
    }
    
    empresa.valorReceber = CalculoValor(empresa);
    empresa.valorPremiacao = CalValor_premi(empresa);
    empresa.valorFinal = empresa.valorReceber + empresa.valorPremiacao;
    
    addempresa(empresa);
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
        `
         descriçao:${elem.descriçao} - <br>
         quantidade:${elem.quantidade} - <br>
         Valor_a_Recebera:${elem.Valor_a_Recebera} - <br>
         Valor_da_premiaçao:${elem.Valor_da_premiaçao} - <br>
         Valor:${elem.valor_final} - <br>`

    })
}
