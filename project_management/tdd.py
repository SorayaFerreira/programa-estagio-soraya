"""
A entrada é o tamanho de uma lista de inteiros desejada. Percorra o vetor somando cada valor com seu sucessor e multiplicando o total por 2.
Teste:
Entrada: 3 -4 5 6
Saída esperada: [14, -14, 22, 26]
"""
def funcaoEsperada(lista: list) -> list:

   novaLista = [(lista[_]+(lista[_]+1))*2 for _ in range(len(lista))]
   return novaLista

def testeRoubado() -> list:
    return [14, -14, 22, 26]

def main():

    print("Lista de inteiros: ", end="")
    vetorIni = input()

    vetor = list(map(int, vetorIni.split()))
    
    print(f"Lista função esperada: {funcaoEsperada(vetor)}")
    print(f"Lista função que rouba no teste: {testeRoubado()}")

main()