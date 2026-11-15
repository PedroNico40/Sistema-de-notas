
 // FUNÇÃO PARA CALCULAR A MÉDIA
function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

// FUNÇÃO PARA VERIFICAR A SITUAÇÃO
function verificarSituacao(media) {
    if (media >= 7) {
    return "Aprovado";
    } else if (media >= 5) {
    return "Recuperação";
    } else {
    return "Reprovado";
    }
}

// FUNÇÃO PARA VALIDAR UMA NOTA
function validarNota(nota) {
    if (typeof nota !== "number" || !Number.isFinite(nota)) {
    return false;
    }

    if (nota < 0 || nota > 10) {
    return false;
    }
 return true;
}

// ARRAY COM OS ALUNOS
let alunos = [
{ nome: "Pedro", nota1: 9, nota2: 7 },
    { nome: "Lucas", nota1: 4, nota2: 6 },
    { nome: "Maria", nota1: 8, nota2: 10 },
    { nome: "João", nota1: 3, nota2: 5 },
    { nome: "Carlos", nota1: 12, nota2: 8 }
];

// EXIBINDO OS RESULTADOS
console.log("=== SISTEMA DE NOTAS ===");

for (let i = 0; i < alunos.length; i++) {

    let aluno = alunos[i];
    // VERIFICANDO SE AS DUAS NOTAS SÃO VÁLIDAS
    if (!validarNota(aluno.nota1) || !validarNota(aluno.nota2)) {
        console.log("Aluno:", aluno.nome);
        console.log("Erro: nota inválida!");
        console.log("------------------------");
        continue;
    }
    // CALCULANDO A MÉDIA
    let media = calcularMedia(aluno.nota1, aluno.nota2);
    
    // VERIFICANDO A SITUAÇÃO
    let situacao = verificarSituacao(media);

    // EXIBINDO OS RESULTADOS
    console.log("Aluno:", aluno.nome);
    console.log("Média:", media);
    console.log("Situação:", situacao);
    console.log("------------------------");
}
