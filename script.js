function calcular() {

    let a = document.getElementById('i-valor-a').value
    let b = document.getElementById('i-valor-b').value
    let c = document.getElementById('i-valor-c').value

    let raiz_quadrada = Math.sqrt

    let p_res = document.getElementById('p-res')

    if (a == '' && b == '' && c == '') {

        alert('Nenhum dado foi informado!')

    } else if (a == '') {

        alert('Valor de A não foi informado!')

    } else if (b == '') {

        alert('Valor de B não foi informado!')

    } else if (c == '') {

        alert('Valor de C não foi informado!')

    } else {

        let delta = b ** 2 - 4 * a * c

        if (delta < 0) {

            p_res.innerHTML = `O valor de Delta (${delta}) é menor que 0!`

        } else {

            let x_positivo = ((-b) + raiz_quadrada(delta)) / (2 * a)
            let x_negativo = ((-b) - raiz_quadrada(delta)) / (2 * a)

            p_res.innerHTML = `S = {${x_positivo}, ${x_negativo}}`
        }

    }

}

function limpar() {

    let a = document.getElementById('i-valor-a')
    let b = document.getElementById('i-valor-b')
    let c = document.getElementById('i-valor-c')

    if (a.value == '' && b.value == '' && c.value == '') {

        alert('Não existe nenhum dado para limpar!')

    } else {

        a.value = ''
        b.value = ''
        c.value = ''

    }

}