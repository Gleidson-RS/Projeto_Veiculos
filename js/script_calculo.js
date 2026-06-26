//CRIANDO A FUNÇÃO PARA CALCULAR OS DESCONTOS
const CalValor_premi = (objveiculo) => {

let ResultCalValor_premi = ''

if(quantidade < 1000 ){
    ResultCalValor_premi = "Sem valor adicional"

}else if(quantidade >= 1000 && quantidade < 10000 ){
    ResultCalValor_premi = objveiculo.valor * 0.08

}else if(quantidade >= 1000 && quantidade < 15000 ){
    ResultCalValor_premi = objveiculo.valor * 0.10

}else if(quantidade >= 1000 && quantidade < 25000 ){
    ResultCalValor_premi = objveiculo.valor * 0.15

}else if( quantidade < 25000 ){
    ResultCalValor_premi = objveiculo.valor * 0.20


}
return ResultCalValor_premi
}

const CalculoValor = (objveiculo) => {

    let ResultCalValor = ''
    
    for(i = quantidade;i < quantidade; i++){
        if(i * 220){
            console.log(i)
            divfor.innerHTML +=  `${i} <br>`
        }
        }
    
    
    }
    return ResultCalValor
    
    




export{Calculo}

