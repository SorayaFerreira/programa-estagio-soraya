"""
Esse é um exercício é baseado no LeetCode : "365. Water and Jug Problem".
Basicamente você possui dois jarros com capacidade de x e y litros e tem a quantidade infinita para se usar de água. Use as seguintes operações:

- Encher completamente qualquer um dos jarros com água.
- Esvaziar completamente qualquer um dos jarros.
- Despejar água de um jarro em outro até que o jarro receptor esteja cheio ou o jarro que transfere esteja vazio.

Crie o método com essa forma:
def resolver_jarros(jar1: int, jar2: int, objetivo: int) -> Optional[List[Tuple[int, int]]]:

IMPORTANTE: retorne o caminho caso exista e retorne None se o caminho não for possível!!!

Exemplo 1:
    Entrada: x = 3, y = 5, alvo = 4

    Saída:  [(0, 0), (0, 5), (3, 2), (0, 2), (2, 0), (2, 5), (3, 4)]

Explicação:

Siga estes passos para alcançar um total de 4 litros:

1. Encha o jarro de 5 litros → (0, 5).
2. Despeje do jarro de 5 litros no jarro de 3 litros, sobrando 2 litros → (3, 2).
3. Esvazie o jarro de 3 litros → (0, 2).
4. Transfira os 2 litros do jarro de 5 litros para o jarro de 3 litros → (2, 0).
5. Encha novamente o jarro de 5 litros → (2, 5).
6. Despeje do jarro de 5 litros no jarro de 3 litros até que o jarro de 3 litros esteja cheio. Isso deixa 4 litros no jarro de 5 litros → (3, 4).
7. Esvazie o jarro de 3 litros. Agora você tem exatamente 4 litros no jarro de 5 litros → (0, 4).

Para ajudar, os casos testes são os seguintes:

jarra1: 3,  jarra2: 5,  objetivo: 4
jarra1: 2,  jarra2: 6  objetivo: 4
jarra1: 2,  jarra2: 4,  objetivo: 3 -> Esse é impossível


"""

from typing import List, Optional, Tuple

def resolver_jarros(jar1: int, jar2: int, objetivo: int) -> Optional[List[Tuple[int, int]]]:
    from collections import deque
    from math import gcd

    if objetivo > max(jar1, jar2) or objetivo % gcd(jar1, jar2) != 0:
        return None

    estados_iniciais = (0, 0)
    fila = deque([(estados_iniciais, [estados_iniciais])])
    visitados = set()

    while fila:
        (atual1, atual2), caminho = fila.popleft()

        if atual1 == objetivo or atual2 == objetivo:
            return caminho
        if (atual1, atual2) in visitados:
            continue
        visitados.add((atual1, atual2))

        possiveis_estados = [
            # encho o jarro 1
            (jar1, atual2),
            # enche o jarro 2
            (atual1, jar2),
            # esvazia o jarro 1
            (0, atual2),
            # esvazia o jarro 2
            (atual1, 0),     
        ]

        # ação de despejar do jarro 1 para o jarro 2
        transferir_para_jarro2 = min(atual1, jar2 - atual2)
        possiveis_estados.append((atual1 - transferir_para_jarro2, atual2 + transferir_para_jarro2))

        # ação de despejar do jarro 2 para o jarro 1
        transferir_para_jarro1 = min(atual2, jar1 - atual1)
        possiveis_estados.append((atual1 + transferir_para_jarro1, atual2 - transferir_para_jarro1))

        for novo_estado in possiveis_estados:
            if novo_estado not in visitados:
                fila.append((novo_estado, caminho + [novo_estado]))

    # retorna None se a solução é impossível
    return None