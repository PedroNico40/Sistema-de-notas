
import dis
from notas import calcular_media

print("=== ANALISE DO BYTECODE ===")
print("Funcao analisada: calcular_media")
print()

dis.dis(calcular_media)
