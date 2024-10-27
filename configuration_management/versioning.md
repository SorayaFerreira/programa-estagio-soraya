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

