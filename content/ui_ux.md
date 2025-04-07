---
title: ui_ux
description: Conteúdos Interação Humano-Computador 
pubDate: Mar 18 2025
tags:
  - IHC
  - UI
  - UX
  - Interfaces
  - Design
  - Atômico
---
<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=054f77&height=120&section=header"/>

# Sumário
- [Heurísticas de Nielsen](#heurísticas-de-nielsen---comprasbrasil)
- [Atomic Design](#atomic-design)

# Heurísticas de Nielsen - ComprasBrasil
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

- **O que é microdata? E para quê serve?** R.: É um conjunto de atributos que serve para especificar melhor o assunto dos conteúdos inseridos numa página com HTML.

- **Como escrever microdata nos pitches? Passo a passo.** R.: 

- **Atributos "itemtype" e "itemscope", "itemprop"? R**.: 
	- O "itemscope" limita o "assunto", de um conjunto de tags (as aninhadas dentro do elemento que recebeu o itemscope). 
	- Já o "itemtype" recebe uma URL (`https://schema.org/TipoDoConteudo`, ou `itemprop="url"`para sites de terceiros), indicando o tipo contido na tag raiz (com o itemscope). 
	- O "itemprop" serve para definir propriedades do conteúdo (itemscope) que está incluso no conjunto de tags em questão, "Então aí ele tá mostrando que o tipo `BlogPosting` possui os atributos `headline`, `datePublished`, `url`, e `discussionUrl`. Tipo no nosso caso, onde o tipo `Processo` possui os atributos (derivados) `solicitacoes` e `propostas`. Tipo no nosso caso, onde o tipo `Processo` possui os atributos (derivados) `solicitacoes` e `propostas`".
 
- **O que é design token-based UI architecture?** R.: dá pra usar para geração de código automático. São decisões de design representadas como dados, sendo blocos de fundação para o design de sistemas. _São variáveis JSON  ou YAML que vão guardar padrões de design para diferentes elementos_.

### Atomic Design
Atomos combinados juntos formam molécular. Moléculas combinadas podem se combinar e formar organismos complexos.
Atomos são os blocos fundamentais de composição de toda matéria. Cada átomo tem suas propriedades, suas partes, e se ele for despedaçado, ele perde sua essência principal.
- Atoms: labels, inputs, buttons etc
- Molecules: form label, search input etc. 
- Organism: diferentes tipos de moléculas unidas, ou uma mesma molécula repetida várias vezes dentro de um conjunto.
- Templates: objetos de nível de página que colocam componentes em um layout e articulam a estrutura de conteúdo subjacente do design.
![templates](https://atomicdesign.bradfrost.com/images/content/template.png)

- Pages: instâncias de modelos que mostram a aparência de uma interface de usuário com conteúdo representativo real.

<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=054f77&height=120&section=footer"/>