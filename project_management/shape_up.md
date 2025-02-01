# Gestão de Projetos
O Shape Up é o framework utilizado para gerência desse projeto, visando organização e entrega de valor. O livro pode ser consultado [aqui](https://basecamp.com/shapeup), todavia a seguir são descritos conceitos centrais que podem auxiliar a compreensão do método de maneira resumida.

### Sumário
#### Shaping
- **Principles of Shaping**: protótipos fiéis são concretos demais e limitam a criatividade; palavras são abstratas demais; é preciso ser crítico sobre o problema e sua solução. 
- **Set Boundaries**: é o primeiro passo para iniciar o shaping. É decidido quanto tempo destinar à ideia original e como definir o problema.
- **Find the Elements**: explicar a ideia por meio de um desenho, de modo alto nível, com o fito de ser rápido, resolver o problema e possibilitar criatividade.
- **Risks and Rabbit Holes**: trata-se de observar a solução, procurando entraves ou questões não resolvidas que podem induzir o time a erros. Uma vez encontrados, a solução deve ser alterada, ou certos detalhes devem ser melhor especificados.
- **Write the Pitch**: é escrever um resumo do problema, restrições, solução, entraves e limitações. Tem três elementos principais: o problema, o appetite e a solução. Ele tem relação com um documento de requisitos.

#### Betting
- **Bets, Not Backlogs**: backlogs desperdiçam tempo. Então, bets têm o propósito de ser mais assertivos e práticos. Os pitches são bets em potencial. 
- **The Betting Table**: reunião que ocorre no cool-down, composta pelos principais stakeholders. O resultado da reunião é um planejamento do próximo ciclo, que pode ser baseado nas pitches e não precisa de validação de outrem.
- **Place Your Bets**: é sobre as expectativas e o projeto que será escolhido para execução durante um ciclo, o que pode ser um novo produto ou aperfeiçoamento de um produto que já existe. 

#### Building
- **Hand Over Responsibility**: não são atribuídas tarefas, mas projetos, para as pessoas. Há uma fase inicial no ciclo em que o time não “produz código”, mas apenas busca compreender por onde começar.
- **Get One Piece Done**: após o momento de auto-orientação, é preciso definir quais tarefas serão desenvolvidas, isto é, como o bet será dividido em tarefas menores. No início, essa meta não deve ser muito exigente. 
- **Map the Scopes**: é uma técnica mais abrangente que a anterior (get one piece of done) que deve ser utilizada ao longo do projeto. As tarefas não devem ser separadas por cargos, mas por estrutura, por “fatias”, que são os escopos.
- **Show Progress**: é sobre separar o trabalho em to-dos e demonstrar o status do projeto para o gerente. Há etapas entre descobrir o quê deve ser feito e realmente executar.
- **Decide When to Stop**: trata da qualidade. Perto do final do ciclo, é necessário analisar se haverá uma entrega, ou se é boa o suficiente para o cliente, por exemplo.

### Glossário
- **Appetite**: é a quantidade de tempo que queremos gastar em um projeto, e não que podemos gastar no projeto. Estimativas são difíceis e sempre tendem ao erro.
- **Baseline**: é como os clientes estão executando seus processos sem a solução que estamos desenvolvendo. Como estão “se virando” atualmente.
- **Bet**: quando uma equipe decide conduzir um projeto sem interrupções durante um ciclo.
- **Betting table**: parece a fase de planejamento da próxima sprint, do framework SCRUM.
- **Big batch**: é o projeto em desenvolvimento.
- **Breadboard**: conceito de IHC (Interação Humano-Computador) que define recursos e suas conexões, ainda sem estilizar.
- **Circuit breaker**: é uma técnica para lidar com riscos. Ao invés de prolongar um projeto para mais de um ciclo, ele deve ser cancelado.
- **Cleanup mode**: é um tempo reservado na fase final para resolver tudo que precisa de reparo antes de lançar o produto.
- **Cool-down**: é um intervalo de duas semanas entre os ciclos para ser aproveitado conforme o necessário.
- **Cycle**: período de seis semanas para equipe trabalhar de modo ininterrupto no projeto alocado.
- **De-risk**: é a ação de combater riscos, aumentando as chances de realizar entrega dentro do ciclo e reduzindo os entraves (rabbit holes).
- **Discovered tasks**: atividades que o time pode precisar executar antes de iniciar o produto, por exemplo, estudar uma nova tecnologia que será requisitada no projeto.
- **Downhill**: fase em que todas as incógnitas foram desvendadas e o time pode iniciar a execução da tarefa, do escopo ou projeto.
- **Fat marker sketch**: é um protótipo de baixa fidelidade, desenhado na mão com linhas largas.
- **Hill chart**: é uma espécie de diagrama que tem o intuito de demonstrar em que momento o serviço está dentro do todo, algo que “vai do desconhecido ao concluído”.
- **Iceberg**: é a parte mais complexa do trabalho, na perspectiva de back-end versus front-end ou UI/UX.
- **Imagined tasks**: é parecido com discovered tasks, mas ocorre ainda antes.
- **Layer cake**: é quando há possibilidade de fazer estimativas a partir do protótipo.
- **Level of abstraction**: nível de abstração.
- **Must-haves**: critérios de aceite, definição de pronto.
- **Nice-to-haves**: são tarefas marcadas com um ‘~’ no início. Elas são deixadas para o final do ciclo e, se não forem concluídas com sucesso, são canceladas.
- **Pitch**: é um documento que fica no betting table que apresenta a modelagem de uma ideia de projeto
- **Production mode**: fase em que a arquitetura (de software) está definida e o Shape Up é aplicado.
- **Rabbit hole**: é uma parte do projeto extremamente complexa, difícil, de escopo aberto.
- **R&D mode**: fase de definição da arquitetura de software.
- **Raw ideas**: requisitos ou funcionalidades expressos em palavras, e que ainda não foram modelados.
- **Scopes**: porções de um projeto passíveis de construção, integração e finalização, de modo independente. É um incremento do modelo incremental de desenvolvimento.
- **Scope hammering**: tentativa de simplificação de um escopo para conseguir entregar dentro do prazo.
- **Shape**: é tornar uma ideia de projeto mais palpável, definindo elementos chave da solução, antes de iniciar o desenvolvimento.
- **Six weeks**: é o tamanho de um ciclo.
- **Small batch**: é a entrega que ocorre no intervalo de uma a duas semanas entre os ciclos.
- **Time horizon**: é o prazo final.
- **Uphill**: fase anterior ao downhill, quando ainda há incógnitas não desvendadas.

### Fazendo um Bom Pitch
> A essência de um bom pitch.
- Reconhece as limitações atuais, indicando o que seria possível em um cenário sem essas limitações;
- Tem uma base teórica bem forte. Em outras palavras, um modelo mental bem definido (quais são os conceitos, padrões, abstrações, atores e coisas do problema/solução);
- Propõe uma solução muito bem explicada, facilitando muito a compreensão e trabalho do responsável pela implementação.

> Um bom pitch geralmente é relevante, simples e completo:
- Relevante, porque ele deve surgir dentro de um contexto importante e/ou introduzir um contexto importante (porque esse problema é uma dor do cliente/da equipe de desenvolvimento)
- Simples, pelo princípio da navalha de Ockham: geralmente, a solução mais simples é a mais provável;
- Completo, porque uma solução precisa de fato atender o problema central e todos os demais que o pitch menciona.

Definição de PITCH com outras palavras: 
> "Um pitch é uma apresentação detalhada de uma parte do sistema. Você precisa explicar para o resto da equipe porque aquela parte do sistema é importante, como ela deve funcionar e interagir com as outras partes com as quais se relaciona. Às vezes, isso significa apresentar alguns relacionamentos do banco, atores e casos de uso, diagramas, etc."

A Cento Software utiliza um campo a mais na definição de pitches, que o **escopo**. Ele serve tanto para indicar o que está incluso no pitch e o que ele delega para outros pitchs, quanto a quais outros pitches ele está ligado, garantindo assim a conexão entre as partes do que estamos fazendo.