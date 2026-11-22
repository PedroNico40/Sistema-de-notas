
import math


# Calcula a média das duas notas.
def calcular_media(nota1, nota2):
    return (nota1 + nota2) / 2

# Verifica a situação acadêmica do aluno.
def verificar_situacao(media):
    if media >= 7:
        return "APROVADO"
    elif media >= 4:
        return "RECUPERAÇÃO"
    else:
        return "REPROVADO"


# Valida se a nota é um número finito entre 0 e 10.
def validar_nota(nota):
    if isinstance(nota, bool) or not isinstance(nota, (int, float)):
        return False

    if not math.isfinite(nota):
        return False

    if nota < 0 or nota > 10:
        return False

    return True


# Processa e exibe os dados do aluno.
def processar_aluno(aluno):
    print("Aluno:", aluno["nome"])
    print("Nota 1:", aluno["nota1"])
    print("Nota 2:", aluno["nota2"])

    if not validar_nota(aluno["nota1"]) or not validar_nota(aluno["nota2"]):
        print("Situação: ENTRADA_INVALIDA")
        print("------------------------")
        return

    media = calcular_media(aluno["nota1"], aluno["nota2"])
    situacao = verificar_situacao(media)

    print(f"Média: {media:.2f}")
    print("Situação:", situacao)
    print("------------------------")


# Lista de alunos cadastrados.
alunos = [
    {"nome": "Pedro", "nota1": 9, "nota2": 7},
    {"nome": "Lucas", "nota1": 4, "nota2": 6},
    {"nome": "Maria", "nota1": 8, "nota2": 10},
    {"nome": "João", "nota1": 3, "nota2": 5},
    {"nome": "Carlos", "nota1": 12, "nota2": 8}
]


# Executa o sistema.
if __name__ == "__main__":
    print("=== SISTEMA DE NOTAS ACADÊMICAS ===")

    for aluno in alunos:
        processar_aluno(aluno)
