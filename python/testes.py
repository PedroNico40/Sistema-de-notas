import math
# Importa as funções do programa principal.
from notas import (
    calcular_media,
    verificar_situacao,
    validar_nota
)

# Casos de teste definidos no relatório.
testes = [
    {
        "id": "T01",
        "nota1": 8,
        "nota2": 8,
        "media_esperada": 8,
        "situacao_esperada": "APROVADO"
    },
    {
        "id": "T02",
        "nota1": 6,
        "nota2": 8,
        "media_esperada": 7,
        "situacao_esperada": "APROVADO"
    },
    {
        "id": "T03",
        "nota1": 3,
        "nota2": 5,
        "media_esperada": 4,
        "situacao_esperada": "RECUPERAÇÃO"
    },
    {
        "id": "T04",
        "nota1": 3.8,
        "nota2": 4,
        "media_esperada": 3.9,
        "situacao_esperada": "REPROVADO"
    },
    {
        "id": "T05",
        "nota1": 7.3,
        "nota2": 8.2,
        "media_esperada": 7.75,
        "situacao_esperada": "APROVADO"
    },
    {
        "id": "T06-A",
        "nota1": -1,
        "nota2": 8,
        "media_esperada": None,
        "situacao_esperada": "ENTRADA_INVALIDA"
    },
    {
        "id": "T06-B",
        "nota1": 11,
        "nota2": 8,
        "media_esperada": None,
        "situacao_esperada": "ENTRADA_INVALIDA"
    }
]

tolerancia = 1e-9
aprovados = 0

print("=== TESTES DO SISTEMA DE NOTAS ===")

# Executa os testes.
for teste in testes:
    media_obtida = None

    if not validar_nota(teste["nota1"]) or not validar_nota(teste["nota2"]):
        situacao_obtida = "ENTRADA_INVALIDA"

    else:
        media_obtida = calcular_media(
            teste["nota1"],
            teste["nota2"]
        )

        situacao_obtida = verificar_situacao(media_obtida)

    # Compara a média obtida com a esperada.
    if media_obtida is None and teste["media_esperada"] is None:
        media_correta = True

    elif media_obtida is not None and teste["media_esperada"] is not None:
        media_correta = math.isclose(
            media_obtida,
            teste["media_esperada"],
            rel_tol=0.0,
            abs_tol=tolerancia
        )

    else:
        media_correta = False

    # Compara as situações.
    situacao_correta = (
        situacao_obtida == teste["situacao_esperada"]
    )

    passou = media_correta and situacao_correta

    if passou:
        aprovados += 1

    # Exibe os resultados.
    print("\nTeste:", teste["id"])
    print("Notas:", teste["nota1"], "e", teste["nota2"])

    media_esperada = teste["media_esperada"]
    print(
        "Média esperada:",
        "Não calculada" if media_esperada is None
        else f"{media_esperada:.2f}"
    )

    print(
        "Média obtida:",
        "Não calculada" if media_obtida is None
        else f"{media_obtida:.2f}"
    )

    print("Situação esperada:", teste["situacao_esperada"])
    print("Situação obtida:", situacao_obtida)
    print("Resultado:", "PASSOU" if passou else "FALHOU")


# Exibe o resumo.
print("\n=== RESUMO ===")
print("Testes aprovados:", aprovados, "de", len(testes))
