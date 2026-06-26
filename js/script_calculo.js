//CRIANDO A FUNÇÃO PARA CALCULAR OS DESCONTOS

const CalValor_premi = (objempresa) => {

let ResultCalValor_premi = ''

if(objempresa.quantidade < 1000 ){
    ResultCalValor_premi = "Sem valor adicional"

}else if(objempresa.quantidade >= 1000 && objempresa.quantidade < 10000 ){
    ResultCalValor_premi = objempresa.valor * 0.08

}else if(objempresa.quantidade >= 1000 && objempresa.quantidade < 15000 ){
    ResultCalValor_premi = objempresa.valor * 0.10

}else if(objempresa.quantidade >= 1000 && objempresa.quantidade < 25000 ){
    ResultCalValor_premi = objempresa.valor * 0.15

}else if( objempresa.quantidade < 25000 ){
    ResultCalValor_premi = objempresa.valor * 0.20


}
return ResultCalValor_premi
}

const CalculoValor = (objempresa) => {

    let ResultCalValor = ''
    
    for(let i = objempresa.quantidade;i < objempresa.quantidade; i++){
        if(i * 220){
         ResultCalValor = i
        }


}
return ResultCalValor
}
    
    
    



export{CalValor_premi}
export{CalculoValor}

