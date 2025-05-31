// teste 1
export function geradorDeTagsDeIdentificacao (nome) {
    return nome.toUpperCase()
}

// teste 2
export function verificarSePodeSerAdotado(idade, porte)
{
    if(idade === 1 && porte === 'M'){
        return true
    }
    else {
        return false
    }
}

// teste 3
export function calcularConsumoDeRacao(nome, idade, peso)
{
    const consumo = peso * 300;
    return consumo
}

// teste 4
export function decidirTipoDeAtividadePorPorte(porte) {
    switch (porte) {
        case 'pequeno':
            return 'brincar dentro de casa';
        case 'médio':
            return 'brincar no quintal';
        case 'grande':
            return 'passear ao ar livre';
        default:
            return 'atividade não definida';
    }
}


// teste 5
export async function buscarDadoAsync() {
  return 'Pipoca';
}
