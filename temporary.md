# Tópicos a Adicionar ⏰
 > Utilize este espaço para guardar tópicos e links de referência para serem incluídos no repositório de conhecimento futuramente.

 > Use `----` para separar os tópicos entre si. A seguir, mensagem de commit padrão. 

```bash
git commit -m "(update): adiciona sementes ao temporary.md"
```

----
Tópico exemplo

[link1](link)

[link2](link)

----
[Ethereum](https://ethereum.org/en/developers/docs/)

Ler paper do Bitcoin

----
Funções assíncronas | Estudo e aplicação das estruturas async e await.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#description

----
### Método de estudo do Fernandin 
 > "Pra essas matérias muito teóricas tem algumas coisas que eu gosto de fazer.
I. mprimir os slides e estudar fazendo anotações em cima deles: eu gosto de fazer isso porque eu não perco tempo escrevendo coisas e fica um estudo mais interativo.
Fazer call de perguntas com os amigos: comecei a fazer isso na prova de APSOO e ER, a ideia é todo mundo levar umas perguntas e ai cada vai respondendo. Acho uma maneira muito boa de revisar conteúdo, porque mtas vezes vc vai explicar as coisas e esse é o melhor jeito de internalizar informação.
> E uma que eu usava mais no vestibular era pegar um folha de papel e tentar escrever, sem ajuda de material, tudo que eu lembrava do conteúdo. Essa é boa porque força vc a espremer a informação. Quando vc ve que não tem nada mais pra escrever, vc confere com o material.
> Por fim, uma coisa que eu lembrei agora: complementação de conteúdo. Depois de eu ter terminado de ler os slides e estudar, eu gosto muito de ver uns conteúdos extras (livros, principalmente) pra eu me acostumar ainda mais com o conteúdo. Fiz isso em APSOO e Requisitos lendo o Engenharia de Software Moderna. Não precisa ESTUDAR a fundo, só ler normal mesmo. Vc vai vendo as informações e vai conectando com os slides e tudo fica muito mais natural. Essa é uma "técnica" que é boa se vc tiver tempo de sobra."

----
Ensaio - tipo textual: é um texto que defende uma ideia. Pode-se iniciar com um evento trivial e apartir disso discursar sobre assuntos mais profundos.


----
BFF: Backend For Frontends -> https://samnewman.io/patterns/architectural/bff/

----
https://kysely.dev/  KYSELY: um query builder com type-safe SQL para TypeScript.
https://orm.drizzle.team/ DRIZZLE: um ORM muito utilizado para dev web.

----
Types
API or UI relevant changes
feat Commits, that add or remove a new feature to the API or UI
fix Commits, that fix a API or UI bug of a preceded feat commit
refactor Commits, that rewrite/restructure your code, however do not change any API or UI behaviour
perf Commits are special refactor commits, that improve performance
style Commits, that do not affect the meaning (white-space, formatting, missing semi-colons, etc)
test Commits, that add missing tests or correcting existing tests
docs Commits, that affect documentation only
build Commits, that affect build components like build tool, ci pipeline, dependencies, project version, ...
ops Commits, that affect operational components like infrastructure, deployment, backup, recovery, ...
chore Miscellaneous commits e.g. modifying .gitignore

---
https://www.atlassian.com/git/tutorials/cherry-pick git cherry-pick


---

- **O que é microdata? E para quê serve?** R.: É um conjunto de atributos que serve para especificar melhor o assunto dos conteúdos inseridos numa página com HTML.

- **Como escrever microdata nos pitches? Passo a passo.** R.: 

- **Atributos "itemtype" e "itemscope", "itemprop"? R**.: 
	- O "itemscope" limita o "assunto", de um conjunto de tags (as aninhadas dentro do elemento que recebeu o itemscope). 
	- Já o "itemtype" recebe uma URL (`https://schema.org/TipoDoConteudo`, ou `itemprop="url"`para sites de terceiros), indicando o tipo contido na tag raiz (com o itemscope). 
	- O "itemprop" serve para definir propriedades do conteúdo (itemscope) que está incluso no conjunto de tags em questão, "Então aí ele tá mostrando que o tipo `BlogPosting` possui os atributos `headline`, `datePublished`, `url`, e `discussionUrl`. Tipo no nosso caso, onde o tipo `Processo` possui os atributos (derivados) `solicitacoes` e `propostas`. Tipo no nosso caso, onde o tipo `Processo` possui os atributos (derivados) `solicitacoes` e `propostas`".
 
- **O que é design token-based UI architecture?** R.: dá pra usar para geração de código automático. São decisões de design representadas como dados, sendo blocos de fundação para o design de sistemas. _São variáveis JSON  ou YAML que vão guardar padrões de design para diferentes elementos_.

-------
### Astro Actions
Mais simples do que endpoints normais: https://docs.astro.build/en/guides/actions/

As actions vêm com validação e chamadas type-safe com forms.

----
### Atomic Design

Atomos combinados juntos formam molécular. Moléculas combinadas podem se combinar e formar organismos complexos.
Atomos são os blocos fundamentais de composição de toda matéria. Cada átomo tem suas propriedades, suas partes, e se ele for despedaçado, ele perde sua essência principal.
- Atoms: labels, inputs, buttons etc
- Molecules: form label, search input etc. 
- Organism: diferentes tipos de moléculas unidas, ou uma mesma molécula repetida várias vezes dentro de um conjunto.
- Templates: objetos de nível de página que colocam componentes em um layout e articulam a estrutura de conteúdo subjacente do design.
![templates](https://atomicdesign.bradfrost.com/images/content/template.png)

- Pages: instâncias de modelos que mostram a aparência de uma interface de usuário com conteúdo representativo real.

----
#### Heurísticas de Nielsen - ComprasBrasil
- Visibility of System Status: indicar ao usuário onde ele está, de onde veio e para onde vai. Ex.: nossa área de controle do andamento.
- Match between the system and the real world: o sistema deve "falar o mesmo idioma" que o usuário, isto é, utilizar convenções, termos comuns a ele. Ex.: utilização de jargões conhecidos pelos futuros usuários, como `homologação` e `adjudicação`.
- User control and freedom: permitir que o usuário corrija seus próprios erros ou mudem de ideia de forma fácil. Ex.: botões de saída (X), a Desistência.
-  Consistency and Standards: seguir padrões da indústria e da plataforma, pois situações, termos e ações muito parecidos devem significar as mesmas coisas ao longo da navegação. Ex.: nossa preocupação em padronizar as representações de UI a partir de um modelo.
- Error Prevention: prevenir erros por desatenção e erros por discrepância entre o modelo mental do design e do usuário. Ex.: 
- Recognition rather than recall: aprensentar opções de imediato, minimizando a quantidade de passos a memorizar para executar uma ação. Ex.: utilização do layout com `Visão Geral`, `Detalhes`, `Comunicação`, `Controle de Andamento` e `Controle de Processo/Lotes`.
- Flexibility and efficiency of use: utilizar atalhos proveitosos tanto para usuários experientes quanto iniciantes e permitir personalização de ações frequentes. Ex.: nossa dinâmica para o dashboard.
- Aesthetic and Minimalist Design: a interface não deve conter informação pouco necessária.
- Help users recognize, diagnose, and recover from errors: ajudar o usuário a compreender erros e sugerir soluções.
- Help and Documentation: pode ser necessário fornecer documentações para ajudar os usuários a entender como completar suas tarefas. Ex.: nosso [Portal de Ajuda](https://ajuda.portaldecomprasbrasil.com.br/).
