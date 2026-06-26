//CRIANDO A FUNÇÃO PARA CALCULAR OS DESCONTOS
const CalculoIPVA = (objveiculo) => {

    const idade = 2026 - Number(objveiculo.ano)
    
    let resultCalc = ''
    
    if(idade > 20 ){
        resultCalc = "ISENTO"
    
    }else if(objveiculo.combustivel == 'Gasolina' ){
        resultCalc = objveiculo.valor * 0.20
    
    }else if(objveiculo.combustivel == 'Etanol' ){
        resultCalc = objveiculo.valor * 0.15
    
    }else if(objveiculo.combustivel == 'Bicombustível' ){
    resultCalc = objveiculo.valor * 0.10
    
    }else if(objveiculo.combustivel == 'Híbrido' ){
    resultCalc = objveiculo.valor * 0.08
    
    }else if(objveiculo.combustivel == 'Elétrico'){
        resultCalc = objveiculo.valor * 0.02    
    
    }
    return resultCalc
    }
    export{CalculoIPVA}