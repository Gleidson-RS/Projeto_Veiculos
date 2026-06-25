//CRIANDO A FUNÇÃO PARA CALCULAR OS DESCONTOS
const calculo = (objPessoa) => {
    let resultCalc = ''
    
    if((objPessoa.idade <= 18) || (objPessoa.renda <= 1700)){
      resultCalc = '0'
    }else if(objPessoa.renda <= 5000){
        resultCalc = objPessoa.renda * 0.05
    }else if(objPessoa.renda <= 8000){
        resultCalc = objPessoa * 0.10
    }else if(objPessoa.renda <= 12000){
        resultCalc = objPessoa * 0.15
    }else{
        resultCalc = objPessoa * 0.20
    }
    
      return resultCalc
    }
    
    export{calculo}