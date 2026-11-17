
// Função para calcular a média das notas.
function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;}

// Função para verificar a situação acadêmica.
function verificarSituacao(media) {
    if (media >= 7) {
        return "APROVADO";
    } else if (media >= 4) {
        return "RECUPERAÇÃO";
    } else {
        return "REPROVADO";
    }}

// Função para validar as notas de 0 a 10.
function validarNota(nota) {
    if (typeof nota !== "number" || !Number.isFinite(nota)) {
    return false;
    }

    if (nota < 0 || nota > 10) {
    return false;
    }

    return true;}

// Função para processar e exibir os dados do aluno.
function processarAluno(aluno) {
    console.log("Aluno:", aluno.nome);
 console.log("Nota 1:", aluno.nota1);
    console.log("Nota 2:", aluno.nota2);

    if (!validarNota(aluno.nota1) || !validarNota(aluno.nota2)) {
     console.log("Situação: ENTRADA_INVALIDA");
    console.log("------------------------");
        return; }

    let media = calcularMedia(aluno.nota1, aluno.nota2);
    let situacao = verificarSituacao(media);

 console.log("Média:", media.toFixed(2));
console.log("Situação:", situacao);
    console.log("------------------------");}

// Lista de alunos cadastrados.
let alunos = [
 { nome: "Pedro", nota1: 9, nota2: 7 },
    { nome: "Lucas", nota1: 4, nota2: 6 },
 { nome: "Maria", nota1: 8, nota2: 10 },
    { nome: "João", nota1: 3, nota2: 5 },
    { nome: "Carlos", nota1: 12, nota2: 8 }
];

// Executa o sistema e percorre a lista de alunos.
if (require.main === module) {
 console.log("=== SISTEMA DE NOTAS ACADÊMICAS ===");

    for (let i = 0; i < alunos.length; i++) {
     processarAluno(alunos[i]);
    }}

// Exporta as funções para o arquivo de testes.
module.exports = {
calcularMedia,
verificarSituacao,
validarNota,
processarAluno};
