//IMPORTANDO ARQUIVOS
import {Calculo} from "./script_calculo.js"




//PEGANDO ELEMENTOS DO DOM
const divempresa = document.querySelector('#div-form-empresa')
const formempresa = document.querySelector('#form-empresa')
const formulario = document.querySelector('#div-formulario')
const btnLimpar = document.querySelector('#btn-limpar')


//CRIANDO O ARRAY empresa
const empresa = []
const Valor_a_Recebera = ''
const Valor_da_premiação = ''
let valor_final = ''

//CAPTURAR O EVENTO submit DO FORMULÁRIO
formempresa.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const dadosFormempresa = new FormData(formempresa)

    const empresa = {
        descrição: dadosFormempresa.get('descrição'),
        quantidade: dadosFormempresa.get('quantidade'),


        valor: Number(
            dadosFormempresa
                .get('valor')
                .replaceAll('.', '')
                .replace(',', '.')
        )

    }   
empresa.Valor_a_Recebera = Calculo(empresa)
empresa.Valor_da_premiação = Number(empresa.valor)
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
         Placa:${elem.Valor_a_Recebera} -
         Ano:${elem.Valor_da_premiação} -
         Valor:${elem.valor_final} - <br>`

    })
}

/*
divinnerHTML
Descrição da empresa;
Quantidade Recolhida;
Valor a Receber;
Valor da Premiação ou o Texto abaixo da Meta;


*/