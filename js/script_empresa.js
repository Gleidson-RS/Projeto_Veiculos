import { CalculoValor, CalValor_premi } from "./script_calculo.js"


const formempresa = document.querySelector("#form-empresa")
const formulario = document.querySelector("#div-formulario")


const empresas = []


formempresa.addEventListener("submit", (evt) => {
evt.preventDefault()


const dados = new FormData(formempresa)
const empresa = {

descricao: dados.get("descricao"),


quantidade: Number(dados.get("quantidade"))
}


empresa.valorReceber = CalculoValor(empresa)
empresa.valorPremiacao = CalValor_premi(empresa)
empresa.valorFinal =
empresa.valorReceber + empresa.valorPremiacao


addempresa(empresa)

})


function addempresa(objempresa) {

empresas.push(objempresa)

listempresa()

formempresa.reset()

}

function listempresa() {

formulario.innerHTML = ""

empresas.forEach((elem, i) => {

formulario.innerHTML += `<br>
---------Empresa ${i + 1}---------<br>
Descrição: ${elem.descricao}<br>
Quantidade: ${elem.quantidade}<br>
Valor a Receber: R$ ${elem.valorReceber.toFixed(2)}<br>
Valor da Premiação: R$ ${elem.valorPremiacao.toFixed(2)}<br>
Valor Final: R$ ${elem.valorFinal.toFixed(2)}
`

})

}