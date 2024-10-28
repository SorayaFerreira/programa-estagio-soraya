# Padrões de Versionamento 🏗

Os padrões de versionamentos visam gerenciar mudanças significativas nas aplicações, seguindo certa hierarquia.
A seguir, são apresentados alguns padrões e comparações entre eles.


## Semantic Versioning

Esta é a padronização mais utilizada, visto que é de fato sucinta, clara e abrangente, sendo capaz de representar a maioria dos projetos, na minha opinião.

Funciona da seguinte forma, segundo a própria especiaficação:


"Dado um número de versão MAJOR.MINOR.PATCH, incremente a:
- versão Maior(MAJOR): quando fizer mudanças incompatíveis na API,
- versão Menor(MINOR): quando adicionar funcionalidades mantendo compatibilidade, e
- versão de Correção(PATCH): quando corrigir falhas mantendo compatibilidade.
Rótulos adicionais para pré-lançamento(pre-release) e metadados de construção(build) estão disponíveis como extensão ao formato MAJOR.MINOR.PATCH."

[TEXTO COMPLETO AQUI](https://semver.org/lang/pt-BR/)

## CalVer 📆

O CalVer baseia-se em datas para realizar o versionamento, prevendo versões com data específica (formato AAAA.MM.DD), versões mensais (formato AAAA.MM) e versões semanais (formato AAAA.SS). Tal padrão atende necessidades muito específicas em contextos que têm as datas como algo significativo.

É comparado ao SemVer por prever números inteiros separados por ponto.

## Sentimental Versioning
Ao contrário do SemVer, este não tem especificação formal, apenas um guia com sugestões. Segundo ele, o padrão criado deve ser original, com números apreciáveis ao autor, e explicado se for algo belo, caso contrário, as novas versões são improvisadas conforme o humor momentâneo.

## FloatVer 
Este é um esquema de versionamento que utiliza números de ponto flutuante não negativos com tamanho IEEE754 32-bit. O formato é `breaking.nonbreaking`:
- breaking: incrementa 1 quando a mudança torna a versão incompatível com as anteriores.
- nonbreaking: incrementa 1 quando a mundança não afeta a compatibilidade com versões anteriores, isto é, não demanda mais RAM, cores do processador ou tempo de execução, nem altera a semântica da versão anterior.

É um padrão menos específico que o SemVer e utiliza números float, ao invés de inteiros.