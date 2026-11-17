
// Importa as funções do programa principal.
const {
    calcularMedia,
    verificarSituacao,
    validarNota
} = require("./notas");

// Casos de teste definidos no relatório.
const testes = [
    { id: "T01", nota1: 8, nota2: 8, mediaEsperada: 8, situacaoEsperada: "APROVADO" },
    { id: "T02", nota1: 6, nota2: 8, mediaEsperada: 7, situacaoEsperada: "APROVADO" },
    { id: "T03", nota1: 3, nota2: 5, mediaEsperada: 4, situacaoEsperada: "RECUPERAÇÃO" },
    { id: "T04", nota1: 3.8, nota2: 4, mediaEsperada: 3.9, situacaoEsperada: "REPROVADO" },
{ id: "T05", nota1: 7.3, nota2: 8.2, mediaEsperada: 7.75, situacaoEsperada: "APROVADO" },
    { id: "T06-A", nota1: -1, nota2: 8, mediaEsperada: null, situacaoEsperada: "ENTRADA_INVALIDA" },
    { id: "T06-B", nota1: 11, nota2: 8, mediaEsperada: null, situacaoEsperada: "ENTRADA_INVALIDA" }];

const tolerancia = 1e-9;
let aprovados = 0;

console.log("=== TESTES DO SISTEMA DE NOTAS ===");

// Executa os testes e verifica os resultados.
for (let teste of testes) {
    let mediaObtida = null;
    let situacaoObtida;

    if (!validarNota(teste.nota1) || !validarNota(teste.nota2)) {
        situacaoObtida = "ENTRADA_INVALIDA";
    } else {
        mediaObtida = calcularMedia(teste.nota1, teste.nota2);
        situacaoObtida = verificarSituacao(mediaObtida);}

    // Compara a média e a situação com os valores esperados.
    let mediaCorreta =
        (mediaObtida === null && teste.mediaEsperada === null) ||
        (mediaObtida !== null &&
        teste.mediaEsperada !== null &&
         Math.abs(mediaObtida - teste.mediaEsperada) <= tolerancia);

    let situacaoCorreta = situacaoObtida === teste.situacaoEsperada;
    let passou = mediaCorreta && situacaoCorreta;

    if (passou) {
        aprovados++;}

    // Exibe o resultado de cada teste.
    console.log("\nTeste:", teste.id);
    console.log("Notas:", teste.nota1, "e", teste.nota2);
console.log("Média esperada:", teste.mediaEsperada === null ? "Não calculada" : teste.mediaEsperada.toFixed(2));
    console.log("Média obtida:", mediaObtida === null ? "Não calculada" : mediaObtida.toFixed(2));
console.log("Situação esperada:", teste.situacaoEsperada);
    console.log("Situação obtida:", situacaoObtida);
    console.log("Resultado:", passou ? "PASSOU" : "FALHOU");
}
// Exibe a quantidade de testes aprovados.
console.log("\n=== RESUMO ===");
console.log("Testes aprovados:", aprovados, "de", testes.length);
