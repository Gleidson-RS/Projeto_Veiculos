const CalculoValor = (objempresa) => {
    return objempresa.quantidade * 220
}

const CalValor_premi = (objempresa) => {

    if (objempresa.quantidade < 1000) {

        return 0

    } else if (objempresa.quantidade < 10000) {

        return objempresa.valorReceber * 0.08

    } else if (objempresa.quantidade < 15000) {

        return objempresa.valorReceber * 0.10

    } else if (objempresa.quantidade < 25000) {

        return objempresa.valorReceber * 0.15

    } else {

        return objempresa.valorReceber * 0.20

    }

}

export { CalculoValor, CalValor_premi }