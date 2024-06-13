document.getElementById('calcular').addEventListener('click', function() {
    // Obtenção dos valores de entrada
    const homens = parseInt(document.getElementById('homens').value) || 0;
    const mulheres = parseInt(document.getElementById('mulheres').value) || 0;
    const criancas = parseInt(document.getElementById('criancas').value) || 0;

    // Cálculo das quantidades necessárias em gramas
    const carneBovinaGramas = (homens * 500) + (mulheres * 300) + (criancas * 200);
    const frangoGramas = (homens * 200) + (mulheres * 200) + (criancas * 100);
    const linguicaGramas = (homens * 200) + (mulheres * 200) + (criancas * 200);

    // Cálculo das quantidades de refrigerante e cerveja em litros
    const refrigeranteLitros = ((homens * 300) + (mulheres * 400) + (criancas * 200)) / 1000;
    const cervejaLitros = ((homens * 800) + (mulheres * 500)) / 1000;

    // Conversão de gramas para quilogramas para carne bovina, frango e linguiça
    const carneBovinaKg = (carneBovinaGramas / 1000).toFixed(2); // Arredonda para 2 casas decimais
    const frangoKg = (frangoGramas / 1000).toFixed(2);
    const linguicaKg = (linguicaGramas / 1000).toFixed(2);

    // Criação da string de resultado
    const result = `
        <p>Carne Bovina: ${carneBovinaKg} kg (${carneBovinaGramas} g)</p>
        <p>Frango: ${frangoKg} kg (${frangoGramas} g)</p>
        <p>Linguiça: ${linguicaKg} kg (${linguicaGramas} g)</p>
        <p>Refrigerante: ${refrigeranteLitros.toFixed(2)} litros</p>
        <p>Cerveja: ${cervejaLitros.toFixed(2)} litros</p>
    `;

    // Atualização do conteúdo do elemento #result
    document.getElementById('result').innerHTML = result;

    // Limpar os campos de entrada após exibir o resultado
    document.getElementById('homens').value = '';
    document.getElementById('mulheres').value = '';
    document.getElementById('criancas').value = '';
});

// Limpar o resultado ao clicar nos campos de entrada para inserir novos números
document.getElementById('homens').addEventListener('focus', limparResultado);
document.getElementById('mulheres').addEventListener('focus', limparResultado);
document.getElementById('criancas').addEventListener('focus', limparResultado);

function limparResultado() {
    document.getElementById('result').innerHTML = '';
}
