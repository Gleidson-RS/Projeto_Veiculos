//CRIANDO A FUNÇÃO PARA CALCULAR OS DESCONTOS

const CalValor_premi = (objempresa) => {

let ResultCalValor_premi = ''

if(objempresa.quantidade < 1000 ){
    ResultCalValor_premi = "Sem valor adicional"

}else if(objempresa.quantidade >= 1000 && objempresa.quantidade < 10000 ){
    ResultCalValor_premi = objempresa.valorReceber * 0.08 

}else if(objempresa.quantidade >= 10000 && objempresa.quantidade < 15000 ){
    ResultCalValor_premi = objempresa.valorReceber * 0.10

}else if(objempresa.quantidade >= 15000 && objempresa.quantidade < 25000 ){
    ResultCalValor_premi = objempresa.valorReceber * 0.15

}else if( objempresa.quantidade > 25000 ){
    ResultCalValor_premi = objempresa.valorReceber * 0.20


}
return ResultCalValor_premi
}

const CalculoValor = (objempresa) => {

    let ResultCalValor = ''
    
    for(let i = 0;i <= objempresa.quantidade; i++){
        const CalculoValor = (objempresa) => {
            return objempresa.quantidade * 220
        }
ResultCalValor = objempresa.quantidade

}
return ResultCalValor
}
    
    
    



export{CalValor_premi}
export{CalculoValor}

