
function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

function verificarSituacao(media) {
    if (media >= 7) {
     return "Aprovado";
    } else if (media >= 5) {
    return "Recuperação";
    } else {
    return "Reprovado";
    }
}

function validarNota(nota) {
    if (typeof nota !== "number" || !Number.isFinite(nota)) {
    return false;
    }
    return nota >= 0 && nota <= 10;
}

let testes = [
    { id: 1, nota1: 8, nota2: 9, esperado: "Aprovado" },
    { id: 2, nota1: 5, nota2: 6, esperado: "Recuperação" },
    { id: 3, nota1: 3, nota2: 4, esperado: "Reprovado" },
    { id: 4, nota1: 7, nota2: 7, esperado: "Aprovado" },
    { id: 5, nota1: 5, nota2: 5, esperado: "Recuperação" },
    { id: 6, nota1: 10, nota2: 11, esperado: "Erro: nota inválida" }
];
for (let teste of testes) {
    let resultado;

    if (!validarNota(teste.nota1) || !validarNota(teste.nota2)) {
        resultado = "Erro: nota inválida";
    } else {
        let media = calcularMedia(teste.nota1, teste.nota2);
        resultado = verificarSituacao(media);
    }
    console.log("Teste:", teste.id);
    console.log("Esperado:", teste.esperado);
    console.log("Obtido:", resultado);
    console.log("Situação:", resultado === teste.esperado ? "APROVADO" : "REPROVADO");
    console.log("------------------------");
}
