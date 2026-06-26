//IMPORTANDO ARQUIVOS
import {CalculoIPVA} from "./script_calculo.js"




//PEGANDO ELEMENTOS DO DOM
const divVeiculo = document.querySelector('#div-form-veiculo')
const formVeiculo = document.querySelector('#form-veiculo')
const divLista = document.querySelector('#div-lista')
const btnLimpar = document.querySelector('#btn-limpar')


//CRIANDO O ARRAY veiculo
const veiculo = []
const ipva = ''
const seguro = ''

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
        combustivel: dadosFormveiculo.get('combustivel'),

        valor: Number(
            dadosFormveiculo
                .get('valor')
                .replaceAll('.', '')
                .replace(',', '.')
        )

    }   
veiculo.ipva = CalculoIPVA(veiculo)
veiculo.seguro = Number(veiculo.valor) * 0.10


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
        divLista.innerHTML += `${i + 1} - Modelo:${elem.modelo} - Marca:${elem.marca} - Placa:${elem.placa} - Ano:${elem.ano} - Valor:${elem.valor} - Combustivel:${elem.combustivel} - Seguro:${elem.seguro} - IPVA:${elem.ipva} <br>`

    })
}
