---
title: project_management
description: Conteúdos sobre Gerência de Projetos
pubDate: Mar 18 2025
tags:
  - Metodologias de Desenvolvimento
  - Test Driven Development
  - TDD
  - Scrum
  - Cascata
  - Modelo Incremental
  - Processo
  - Gerência de Prejeto
  - Lean Inception
---
<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=054f77&height=120&section=header"/>

# Sumário
- [Metodologias de Desenvolvimento](#metodologias-de-desenvolvimento-)
- [Processos](#processos)
- [Test Driven Development (TDD)](#test-driven-development-tdd)
- [Scrum](#scrum)
- [Cascata](#cascata)
- [Modelo Incremental](#modelo-incremental)
- [Gestão de Projetos](#gestão-de-projetos-)
- [Lean Inception](#lean-inception)

# Gestão de Projetos 🟪🟣
O Shape Up é o framework utilizado para gerência desse projeto, visando organização e entrega de valor. O livro pode ser consultado [aqui](https://basecamp.com/shapeup), todavia a seguir são descritos conceitos centrais que podem auxiliar a compreensão do método de maneira resumida.

# Metodologias de Desenvolvimento ⚙📈
Métodologias de Desenvolvimento são técnicas utilizadas no processo de desenvolvimento de software. O "X Drive Development" refere-se à prioridade na construção do projeto:
- **Feature Driven Development**: todas as features devem ser implementadas, mesmo que a data precise ser adiada.
- **Cost Driven Development**: ao final do orçamento deve haver um produto útil, mesmo que o dinheiro tenha já acabado.
- **Date Driven Development**: prioriza a data de entrega em detrimento de implementar todas as features e passar em todos os testes.

# Processos
> [Engenharia Moderna](https://engsoftmoderna.info/cap2.html#import%C3%A2ncia-de-processos).

Um processo de desenvolvimento de software define um conjunto de passos, tarefas, eventos e práticas que devem ser seguidos por desenvolvedores de software, na produção de um sistema. Sem um processo — mesmo que simplificado e leve, como os processos ágeis que estudaremos neste capítulo — existe o risco de que os times de desenvolvimento passem a trabalhar de forma descoordenada, gerando produtos sem valor para o negócio da empresa. Por fim, processos são importantes não apenas para a empresa, mas também para os desenvolvedores, pois permitem que eles tomem consciência das tarefas e resultados que se esperam deles. Sem um processo, os desenvolvedores podem se sentir perdidos, trabalhando de forma errática e sem alinhamento com os demais membros do time.

## Test Driven Development (TDD)
Este é um método de desenvolvimento de software que, como sugere o próprio nome, prioriza a fase de testes do software, valorizando a qualidade do software e os testes. Tal metodologia pode ser resumida em uma imagem, um ciclo chamado Red-Green-REfactor. A seguir, a descrição do passo a passo.
 ![Ciclo Red-Green-REfactor](https://www.tddbuddy.com/assets/img/TDDCycle.png)

1º O ciclo sempre começa pelo `Red`. Execute um teste que com certeza não passará.

2º Implemente o mínimo de código para que o programa passe no teste.

3º Faça a refatoração do código, isto é, organize, melhore e inclua tratativas. 

4º Volte ao passo `1º` até que os critérios de pronto sejam atendidos.

É importante ressaltar que, no TDD, nenhum código pode ser escrito sem que exista um teste justificando-o.

- Cenário de uso do TDD:

```python
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

```

## Scrum
É uma metodologia ágil muito utilizada atualmente. 
- Tem três pilares: transparência, inspeção e adaptação.
- Há três papéis: scrum master, product owner e dev team.
- Prevê alguns eventos: sprint planning, daily scrum, sprint, sprint review e retrospectiva.

## Cascata
Esse modelo de processo é conhecido também como "Ciclo de Vida Clássico". É bastante antigo, um dos primeiros que surgiu. Ele sugere que cada etapa do processo seja feita por completo antes de progredir para a próxima. Nessa lógica, o modelo Cascata é recomendado para projetos muito estáveis, cujos requisitos são muito bem conhecidos. Ao contrário do TDD, no qual os testes ocorrem o tempo todo, nesse método o teste é apenas uma fase ao final.

## Modelo Incremental
Já esta metodologia busca dividir o processo em ciclos, sendo que, em cada ciclo, existem as fases de Análise, Projeto, Implementação e Testes. A cada ciclo é entregue uma parte pronta, funcional do produto.

# Lean Inception

- Não é possível fazer um lean inception em menos de 3 dias.
- É necessário interação, aprovações etc.
- Vai começar com um kick-off.
- O ideal é que dure 1 uma semana. 


<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=054f77&height=120&section=footer"/>