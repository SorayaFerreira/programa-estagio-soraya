---
title: tests
description: Conteúdos sobre Verificação, Validação e Teste de Software
pubDate: Mar 18 2025
tags:
  - Testes
  - Playwright
  - VVT
---
<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=ff5733&height=120&section=header"/>

# Sumário
- [Tipos de Testes](#tipos-de-testes)
- [Verificação X Validação](#verificação--validação)
- [Playwright](#playwright)

# Anotações das Aulas 📝
**Anotações da Disciplina de Verificação, Validação e Teste de Software**  


### REVISÃO, INSPEÇÃO E CONCEITOS

* Aprovação de PR sem comentário é uma revisão inválida. Precisa haver evidências de que vc revisou aquilo.  
* **Verificação:** analisar se o produto de software está sendo desenvolvido da maneira correta. *Are we building the software right?*  
* **Validação:** analisar se o que está sendo desenvolvido está correto, de acordo com o que foi solicitado pelo cliente que atende às necessidades dos usuários. *Are we building the right software?*  
* **Teste:** é o conjunto de técnicas utilizado num processo que ratifica se as funcionalidades e o sistema como um todo estão funcionando consoante o esperado, levando em conta o contexto. Economia, confiança, segurança, negócio. É impossível testar exaustivamente,  
* *A **revisão é** um processo de leitura de um artefato de software. O objetivo é que aquele artefato tenha qualidade suficiente para implementarmos a próxima etapa.* Realizamos verificação e validação **estática** de artefatos de software. Ela garante qualidade e manutenibilidade. Também promove a transparência de conhecimento entre os membros da equipe, evitando “ilhas de conhecimento”. A revisão deve ser feita por duas pessoas. E o objetivo dela não é o de corrigir nada, mas de encontrar problemas e atribuí-los ao dev. *Um produto é examinado por stakeholders, que fornecem comentários e aprovações.*  
* **Inspeção:** técnica mais formal do que a revisão técnica, com objetivo principal a identificação e a remoção de defeitos.   
* É legal entender os algoritmos de mesclagem de branches do GIT.  
* Tipos: walkthrough; inspeções de software e Revisão.  
* **Walkthrough:** reunião informal para avaliar um produto. Objetivo é comunicar ou receber aprovação. São úteis para requisitos e modelos. Tem um conjunto de papéis na reunião. Tem que ser pragmática, objetiva. O desenvolvedor guia os presentes através do produto. *É o mais flexível e informal do três.* Tem líder, autor, revisor, escrivão.  
* **Inspeção:** é mais rigorosa e formal. Deve ter plano de medição para coletar métricas. Tem papéis também na reunião. Quando um detalhe é apontado mais de uma vez, ele deixa de ser uma discrepância e se torna um defeito. Toma menos de uma hora por defeito, que deve ser removido. *Precisa haver um profissional experiente em Engenharia de Software. Tem autor, moderador e inspetor.*  
* **Heurística**: lista fundamentada de técnicas que nos guiam em algo.  
* **Discrepância:** desvio de expectativa, falta de clareza em algo, pode ser uma falta de revisão em fases anteriores, é uma issue que você classifica com enhancement.  
* **Norma IEEE 830:** para verificar a conformidade do código seguindo os requisitos. Omissão, ambiguidade, inconsistência, fato incorreto, informação estranha, discrepância.  
* **Defeito:** impede o funcionamento correto.  
* **Técnicas para detecção de defeitos: ad-hoc** (faz do jeito que te dá na cabeça), **check-list** (lista de questões que os inspetores devem responder, com respostas sim/não. Bom para **novatos**), técnicas de leitura.  
* **Software com qualidade:** é uma solução que atende às necessidades dos interessados, causando sua satisfação. Conformidade com requisitos e satisfação do cliente.  
* **Depuração:** visualiza uma consequência não previsível do teste. Apenas identifica a localização do erro, mas não aponta a falha em si.  
* **Estratégias de Teste:**   
  * **Pirâmide de teste:** teste unitário \> teste de integração \> teste de UI \> teste de Jornada de usuário.  
  * **Árvore de testes:** análise estática \> testes unitários/integração \> testes de snapshot \> testes E2E. Evita a criação de testes sensíveis, que quebram quando há uma mudança em algum componente. Flexível e resiliente.  
  * **Modelo de queijo suiço:** cada fatia de queijo é uma camada do sistema. As camadas são imperfeitas, com buracos. Porém, se as camadas forem sobrepostas, alguns buracos ficam cobertos, outros ficam ainda expostos. A meta do modelo suiço é impedir que uma falha passe por esse buraco que restou. Teste automatizado \> teste manual \> validação do cliente \> mitigando o erro. Serviço \> BFF (Backend for Frontend) \> UI \> End to end.  
* A base de nossa estratégia é ser eficaz e sistemática. Escrever testes certos e permitir que qualquer dev consiga chegar à mesma suíte de testes.  
* **Paradoxo do pesticida:** um mesmo tipo de veneno não é capaz de matar todas as pragas possíveis numa lavoura.  
* **Stubs:** usado em testes de integração. É uma pseudo-implementação de determinadas especificações. *Dublê de resposta.*  
* **Drivers:** operações que automatizam testes de acordo com casos de teste. *Dublê de chamador.*  
* **Teste de Sistema:** recuperação \> segurança \> stress \> desempenho.  
* **Reteste:**   
  * **regressão: a**plica a cada nova versão do software ou a cada ciclo, todos os testes que já foram aplicados nas versões anteriores.  
  * **aceitação:** foco nos requisitos, testes funcionais, o sistema satisfaz ou não seus critérios de aceitação.  
  * **fumaça:** é uma estratégia de integração incremental. O sistema é reconstruído com novos componentes incorporados e é exercitado diariamente.

### CASOS DE TESTE

* Um **incremento** é algo funcional que vai para produção. Os testes devem ser sempre rastreáveis com os requisitos.  
* Nosso curso é chamado *Engenharia,* porque é sistemática e quantificável e depende muito de processo.  
* O teste funcional é **caixa-preta.**  
* Se não foi encontrado falhas no teste, podemos dizer que o software é de alta qualidade, ou o teste é de baixa qualidade. Isso vai depender de: nível de conhecimento, tipo do teste sendo feito, fase do projeto, maturidade da equipe, nível de cobertura.  
* O plano no caso de teste vai até o resultado esperado, apenas. Não tem resultado obtido, isso não fica no plano de teste.  
* A execução do teste precisa ter uma ordem lógica. Gestos entram em testes mobile.  
* Um registro só é válido se ele tem uma evidência, como um print, um log, um vídeo, etc.  
* Há informações *sensíveis ao contexto,* como as aplicações de clima.  
* **Bateria de testes \== Rodada**: conjunto de casos de teste para uma determinada entrega. É relativo ao objetivo de uma sprint.  
* A prioridade dos casos de teste é definida de acordo com a estratégia de teste.  
* **Procedimento:** é quando eu testo duas coisas ligadas, mas seguindo uma ordem. Conjunto de ações para testar algo.  
* **suíte:** é um conjunto de cenários de teste.  
* **Caso de teste:** entrada, restrições para sua execução, resultado esperado, comportamento esperado.  
* **Elementos:** roteiro de teste, critérios de cobertura dos testes, bateria de testes, incidentes de teste (issue, bug).  
* **Testes de integração:**  
  * Bing-bang: construir tudo separado e integrar só no final. Dificulta o encontro de defeitos.  
  * Bottom-up: módulos de nível mais baixo, ou seja, que não dependem um do outro. Módulo só é integrado quando os dependentes já foram integrados e testados. Não é necessário escrever stubs.  
  * Top-down: módulos de nível mais alto, verificando inicialmente os módulos com mais importância precisa de bons e vários stubs.

### ESTRATÉGIAS DE TESTE

* Na sprint 0, você precisa definir uma estratégia de testes, de verificação e de validação, analisando o documento de requisitos, a complexidade do domínio e o nível de maturidade da equipe. Essa estratégia precisa ser eficaz e sistemática.  
* **fitness function/função objetivo**: é   
* A **unidade de um teste** consiste tanto no componente sendo testado, quanto no código do teste em si.  
* **Mockar:** é fazer **stubs e drivers**.   
* Tanto fluxos principais quanto fluxos arriscados precisam receber teste de sistema.  
* **Smoke-test:** definir casos de teste prioritários numa situação de urgência com o mínimo para garantir qualidade.  
* **Teste de regressão:** é quando voltamos nas sprints anteriores e recuperamos os testes feitos, a fim de garantir que testes feitos anteriormente continuam funcionando.  
    
* **ANÁLISE DO VALOR LIMITE**  
* Um grande número de erros tende a ocorrer nos limites do domínio de entrada invés de no centro.  
    
* **GRAFO DE CAUSA-EFEITO**: é aquele diagrama escama de peixe.
* **Critério** (não técnica) necessário quando se deseja testar combinações de entradas.  
* Utiliza árvores de decisão.  
* Se um requisito é muito simples, não precisa utilizar um recurso de infraestrutura.

### TESTES \- PRÁTICA

* A **estratégia de qualidade** abrange a estratégia de testes.  
* É importante modelar visualmente a estratégia de testes para que o time tenha total compreensão.  
* Não adianta querer automatizar todos os testes possíveis.  
* O **Modelo do Troféu** é outro modelo de estratégia de testes só que mais voltado para o ecossistema javascript.  
* Existe um milhão de ferramentas de testes automatizados. Não pode priorizar apenas as ferramentas que você domina. Tem que dar preferência praquilo que resolve o problema.  
* Também não adianta pensar nas melhores tecnologias, padrões, modelos etc, se nós não levarmos em consideração os **3 Ps – Pessoas, Processos e Produto**.  
* O Selenium é antigão e mais manual. O Cypress permite automatizar melhor algumas coisas, ele é voltado para testes end-to-end.  
* Todo elemento do HTML está estruturado numa árvore chamada DOM. É com ele que a gente interage. O ID é o filtro para busca mais rápido, é quase instantâneo.

### GERENCIAMENTO DE DEFEITOS

* No NES, eles têm percebido que, se o time não entende a arquitetura muito bem, eles não conseguem fazer testes unitários e de integração.  
* Como a gente prioriza os testes unitários? R.: tem que ter entendimento do negócio, do que é a entrega, os critérios de teste, o objetivo da sprint.  
* Não podemos negligenciar os testes unitários dentro da sprint.  
* A gente precisa saber gerenciar os defeitos.  
* Na sprint review você precisa dar credibilidade que aquele incremento tem valor.  
* O defeito está no meio, entre o erro e a falha. O termo genérico é bug, mas é possível classificar entre erro, defeito e falha. Quando você comete um erro, isso produz um defeito. Quando esse defeito surgir, nós temos uma falha.  
* Para nós da engenharia de software é o impacto que concretiza as consequências de se fazer algo errado.  
* É importante fazer os iniciantes do time sentirem a dor do valor do impacto dele. É importante expor as pessoas aos defeitos.  
* Há 3 tipos de defeitos:  
  * Faltantes: falta total ou parcial de um requisito.  
  * Errado: o requisito foi implementado incorretamente.  
  * Acréscimo: comportamento ou elemento que foi implementado, mas não estava especificado no requisito. Se quiser sugerir, coloque como enhancement  
* Você tem que encontrar defeito, sim, no final da sprint, sobretudo se for sprint especial. Sempre desconfie daquilo que você está entregando.  
* O próprio github, via issues, já é um tipo de rastreamento de defeitos.  
* **Recomendações para o relato de defeitos:**  
  * Resumir: descrever o defeito resumidamente.  
  * Precisão: antes de reclamar, certifique-se de que é um desvio de comportamento mesmo, e não uma falha de conhecimento.  
  * Neutralizar: nada de humor, piadinha, nada. Não ser prolixo.  
  * Generalizar: complementando a descrição com repertório, apontando possíveis impactos futuros.  
  * Reproduzir: tem que ser reproduzível para ter qualidade.  
  * Evidenciar: dar evidências do defeito, seja com prints, com vídeo, logs etc.  
  * Revisar: revisar a descrição, tratando ele como um documento de projeto, sério, grave.  
* Sinônimos de bug: incidente, erro, falha, defeito  
* **Testes Contínuos:** tem o fito de não deixar o teste apenas para o final. Tem uma vertente que busca automatizar tudo que é passível de ser automatizado, o que não estiver, deve ser muito bem justificado e assinado e aprovado por quem concordou com isso. Oferece maior eficiência e qualidade de implementação, redução de desconexões entre membros de equipes de DevOps. Detecção e correção rápida de erros. Feedback contínuo e melhoria antecipada. Aprimorar a experiência de usuário. Redução de custos com interrupções.   
* **Metodologias de teste contínuo:** shift-left, teste de unidade, testes de integração e mensagens, teste shift-right, teste de fumaça (smoke testing).  
* **Teste A/B:** é uma estratégia de teste em produção bem confiável.  
* **Teste de pico (ou teste de estresse):** é realmente deixar o sistema sendo utilizado para você identificar os gargalos.  
* **Práticas recomendadas para testes em produção**: criar um dataset de dados sintéticos, nomear dados de teste, evitar uso de dados reais por causa da LGPD (elemento de triangulação), técnicas de proteção, credenciais de teste para ter controle, testar sob baixa carga (momentos de pouco acesso do sistema),   
* Não adianta nada as ferramentas serem boas se vocês não são bons profissionais.  


### PROJETANDO PARA TESTABILIDADE

* Serve para saber se algo é testável.  
* É o grau em que um sistema de software ou uma unidade sob teste suporta seu próprio teste. É a capacidade de um artefato de software (sistema, módulo, requisitos ou documento de design)  
* Ter alta testabilidade significa ter facilidade em identificar falhas.  
* Baixa testabilidade: mais esforço para testar, menos testes por período de tempo; menos chances de encontrar defeitos.  
* É impossível estabelecer critérios se os requisitos não estiverem muito bem definidos.  
* A testabilidade está mais ligada aos requisitos.  
* Testes flaky: é um teste instável, às vezes funciona, às vezes não.  
* DfT \- Design for Testability: projetar para testabilidade.  
* Teste sistemático: novatos devem conseguem entender o que acontece num teste, utilizar e fazer manutenção no teste. Se um novato não conseguir isso com facilidade, o teste não foi sistemático.  
* Observabilidade: é a facilidade de ver o que está ocorrendo num componente. É algo importante para a testabilidade.  
* Um bom desenvolvedor sabe fazer bons testes.  
* Assertiva é para comparar o resultado real com o resultado esperado.  
* O **domínio** é o coração da aplicação.  
* Código de coisas externas à aplicação, como APIs externas, são coisas da infraestrutura.  
* Os artefatos precisam ser preparados para serem testados.  
* Qualquer artefato que está ligado ao software deve ser testável.  
* A testabilidade está diretamente ligada à clareza dos requisitos  
* “Se temos código difícil de testar, provavelmente ele não será testado.”  
* Os testes são os primeiros clientes do código que você escreve.


# Tipos de Testes ⚗️🧪
A seguir, apresento os tipos de teste mencionados nas fontes (prof. Awdren), com uma explicação simplificada de suas características e exemplos.

> **Teste Funcional (ou Caixa Preta / Caixa Fechada)**
*   Características: Baseia-se na especificação dos requisitos do software, sem considerar os detalhes internos da implementação. Ele aborda o software de um ponto de vista macroscópico, focado em verificar se as funções estão sendo executadas corretamente sob a perspectiva do usuário.
*   Técnicas Comuns: Para otimizar a quantidade de testes, utiliza-se o Particionamento de Equivalência, que divide o domínio de entrada em subdomínios, e a Análise do Valor Limite, que foca nos valores extremos das entradas, onde os erros tendem a ocorrer com mais frequência. Quando há interações entre múltiplas variáveis de entrada, podem ser empregados Grafo de Causa-Efeito ou Tabelas de Decisão para testar combinações lógicas. Existe também a técnica Baseada em Erros, que pressupõe intuitivamente os tipos prováveis de erros.

> **Teste Estrutural (ou Caixa Branca / Caixa Transparente)**
*   Características: Diferente do teste funcional, este tipo de teste é baseado na estrutura interna do código-fonte e exige conhecimento da implementação. Seu objetivo é exercitar o maior número possível de caminhos, ramos e instruções do programa, identificando trechos de código não exercitados e complementando os testes baseados em requisitos.
*   Critérios de Cobertura: São utilizadas métricas como Cobertura de Linhas (executar todas as instruções), Cobertura de Ramos (garantir que cada ramo de decisão seja executado), Cobertura de Condições/Decisões (avaliar cada decisão como verdadeira e falsa) e Cobertura de Caminhos (executar todas as sequências possíveis de execução). Um critério mais rigoroso, usado em sistemas críticos, é o MC/DC (Modified Condition/Decision Coverage), que assegura que cada condição em uma decisão afete isoladamente o resultado final.

> **Teste de Unidade (Unit Test)**
*   Características: É a fase em que se testam as menores unidades de software desenvolvidas, como métodos ou pequenos trechos de código, de forma isolada. É um teste rápido, fácil de controlar e escrever, proporcionando feedback imediato aos desenvolvedores. O objetivo é encontrar falhas de funcionamento dentro de uma pequena parte do sistema, independentemente do todo.

> **Teste de Integração:**
*   Características: Após as unidades serem testadas separadamente, este teste as avalia de forma integrada, focando na interface entre as unidades e na interação do código com partes externas. Para auxiliar, são utilizados Stubs (pseudo-implementações que simulam respostas de componentes ainda não prontos) e Drivers (simulam chamadas de módulos que ainda não existem). Existem estratégias como *Big-bang* (integrar tudo no final), *Bottom-up* (integrar módulos de baixo nível primeiro) e *Top-down* (integrar módulos de alto nível primeiro).

> **Teste de Sistema:**
*   Características: Investiga o funcionamento da aplicação como um todo, incluindo a execução dos fluxos dos casos de uso e a integração com o ambiente operacional (similar ao de produção). O objetivo é executar o sistema do ponto de vista do usuário final, buscando falhas em características funcionais (regras de negócio) e não-funcionais (como usabilidade, segurança, eficiência).
*   Tipos Específicos: Inclui testes de Recuperação (verifica a capacidade de recuperação do produto após falhas), Segurança (verifica os mecanismos de proteção), Stress (executa o sistema com recursos anormais) e Desempenho (avalia o desempenho do software integrado ao sistema).

> **Teste de Aceitação:**
*   Características: É um teste funcional realizado pelos usuários finais para demonstrar a conformidade do software com os requisitos definidos pelo cliente. Envolve treinamento, documentação e empacotamento.
*   Subtipos: Podem ser Teste Alfa (executado na instalação do desenvolvedor pelo cliente) e Teste Beta (executado na instalação de um ou mais clientes pelo usuário final).

> **Teste de Regressão:**
*   Características: Consiste em reaplicar todos os testes que já foram executados em versões ou ciclos anteriores do sistema, a cada nova versão ou modificação do software. É crucial para reduzir "efeitos colaterais" e garantir que mudanças ou correções não introduziram novos defeitos ou quebraram funcionalidades existentes.

> **Teste de Fumaça (Smoke Testing):**
*   Características: Uma verificação superficial e rápida para detectar as falhas mais críticas em um sistema, realizada logo após uma nova build. É um teste rápido e barato, útil para verificar se as funcionalidades essenciais estão funcionando antes de testes mais aprofundados.

> **Teste E2E (End-to-End) / Jornada de Usuário:**
*   Características: Foca na execução do sistema na perspectiva do usuário final, simulando uma jornada completa de uso. Abrange desde o front-end até o back-end, garantindo que as funcionalidades operem corretamente em cenários reais. Esses testes podem ser caros para manutenção. Em aplicativos móveis, são grandes testes de integração que buscam simular o mais próximo da produção.

> **Teste de Usabilidade (User eXperience - UX):**
*   Características: Concentra-se em avaliar se a aplicação é fácil de usar e satisfatória para o usuário final. Envolve a análise de conteúdo, funcionalidades, navegabilidade, design e o feedback de usuários reais para capturar suas expectativas e percepções após o uso. Falhas de usabilidade são as que mais afetam a percepção de qualidade por usuários móveis.

> **Teste de Segurança:**
*   Características: Verifica se os mecanismos de proteção do sistema funcionam corretamente, protegendo-o contra uso indevido ou intrusões. Em aplicações móveis, isso inclui garantir que o aplicativo atenda aos requisitos de segurança definidos pelos *stakeholders*, cuidando do armazenamento de dados, provedores de conteúdo, uso de permissões e validação de dados do usuário.

> **Teste de Desempenho:**
*   Características: Avalia o desempenho do software quando integrado ao sistema, verificando sua capacidade de atender a requisitos não-funcionais como velocidade, tempo de resposta, quantidade de downloads, velocidade do processador e capacidade de armazenamento. Geralmente está associado ao teste de Stress.

> **Teste de Compatibilidade:**
*   Características: Verifica se a aplicação móvel roda corretamente em todos os dispositivos e sistemas operacionais alvo. É crucial devido à fragmentação, que é a grande diversidade de dispositivos e versões de SO no mercado. Uma matriz de compatibilidade é frequentemente usada para planejar e documentar essa verificação.

> **Teste de Estabilidade:**
*   Características: Avalia a capacidade do aplicativo de funcionar de forma contínua e confiável sob diferentes condições de uso, sem travamentos, falhas ou degradação de desempenho. Foca na resistência do aplicativo diante de longas sessões, mudanças de rede, uso intenso de recursos do dispositivo e integrações com serviços externos.

> **Teste de Conectividade:**
*   Características: Tem como objetivo testar o acesso a todos os componentes essenciais para que a aplicação móvel faça uso apropriado do contexto em que estiver inserida, especialmente em relação à infraestrutura de rede (telecomunicações).

> **Teste de Certificação:**
*   Características: Verifica se a aplicação móvel atende a todos os padrões estabelecidos pelas lojas de aplicativos (como Google Play, App Store e Windows Store) onde será distribuída. Os critérios são aplicados quando a aplicação já foi desenvolvida e será submetida para publicação.

> **Testar em Produção:**
*   Características: Uma fase complementar de testes realizada no ambiente real de produção para obter resultados mais precisos. Aumenta a confiança da equipe de que os usuários experimentarão a mesma funcionalidade verificada.
*   Tipos Específicos: Inclui Monitoramento Contínuo (estabilidade, tempo de resposta), Monitoramento de Aplicações (RUM - Real User Monitoring, e monitoramento sintético), Acompanhamento em Tempo Real (verificar transações em cada camada). Também são feitos Testes A/B (para obter feedback de usuários sobre diferentes versões) e Teste de Pico (avalia desempenho sob carga extrema).


Importante mencionar que nenhuma técnica de teste isolada pode encontrar todos os *bugs* (paradoxo do pesticida) e que o teste exaustivo é impossível. Portanto, é crucial saber o que testar, priorizar e combinar diferentes técnicas de forma eficaz e sistemática para maximizar a detecção de defeitos e otimizar o custo do processo. O contexto do software (aplicativo móvel, web, sistema crítico) também desempenha um papel fundamental na definição dos casos de teste.

# Erro 🆚 Falha 🆚 Defeito

Os termos "falha", "defeito" e "erro" muitas vezes são usados de forma intercambiável, mas possuem nuances importantes no contexto de testes de software.

Aqui está um resumo das diferenças e relações, com base nas informações fornecidas:

> Defeito (Bug/Falha/Erro):
    *   As ferramentas de gestão de projetos frequentemente agrupam "Defeitos, Erros e Falhas" sob o termo "Defeitos" ou "Bugs".
    *   Um defeito é definido como um problema no código ou no design do software que impede seu funcionamento correto.
    *   Ele ocorre quando o software não atende aos requisitos especificados ou gera um comportamento incorreto devido a falhas na implementação.
    *   Defeitos são encontrados através da execução de testes, durante o uso do sistema em produção ou até por acidente.
    *   Após a revelação da presença de um erro, o defeito é o que precisa ser encontrado e corrigido.

> Falha:
    *   A "falha" é mencionada como um dos termos sinônimos para "defeito" ou "bug".
    *   O objetivo do teste é "revelar a presença de FALHAS" no programa ou sistema.
    *   É importante notar que "não há garantia que todo incidente seja uma falha, pois ainda precisa ser analisado". Isso sugere que uma falha é a manifestação observável de um problema (defeito) durante a execução.
    *   As fontes também mencionam "falhas na implementação" como causa de um defeito.

> Erro:
    *   Assim como "falha", "erro" é listado como um sinônimo para "defeito" ou "bug".
    *   No contexto de depuração, a presença do erro é o que é revelado pelo teste, e é a partir dessa revelação que o defeito deve ser encontrado e corrigido. Isso sugere que o "erro" pode ser a condição que se manifesta e indica a existência de um defeito subjacente.
    *   Um exemplo prático é o do foguete Ariane 5, que foi destruído devido a um "erro de navegação" causado por um "equívoco", indicando o erro como a causa do desvio de comportamento.

Há uma distinção clara entre Discrepância e Defeito:

*   Discrepância: Refere-se a qualquer desvio entre o comportamento esperado e o comportamento real de um sistema, mas não necessariamente indica um erro no software. Pode ser resultado de uma interpretação ambígua dos requisitos, uma mudança nas expectativas do usuário ou até uma característica do ambiente de execução. Por exemplo, o sistema exibe uma mensagem de alerta ao excluir um item, mas o cliente esperava uma solicitação de confirmação.
*   Defeito: É um problema no código ou no design do software que impede seu funcionamento correto. Um defeito ocorre quando o software não atende aos requisitos especificados ou gera um comportamento incorreto devido a falhas na implementação. Um exemplo é quando o sistema permite excluir um item, mas não remove corretamente os registros associados, causando inconsistências nos dados.

Ou seja, um erro humano leva a um defeito no código/design, que por sua vez pode causar uma falha no comportamento do sistema.

# Verificação ❎ Validação
A diferença entre Verificação e Validação é a ordem das duas últimas palavras nas frases a seguir:
> — Verificação: "Are we building the product right?"
> — Validação: "Are we building the right product?"

# Playwright
- Serve para testes de automação, sobretudo em browsers e mobile.
- Tem suporte para várias linguagens de programação.
- A documentação é organizada e intuitiva: https://playwright.dev/docs/intro
- Pode ser usado para web scraping.
- É preciso ter um projeto com node.js (npm init) antes de tentar instalar o playwright.

# try...catch

```javascript
try {
    nonExistentFunction();

} catch (error) {
    console.error(error);
} finally {
    // padrões executados independente de ter entrado no try ou no catch.
}
```

- O `catch` informa o quê fazer se for lançada uma exceção durante a execução do try.
- É possível aninhar blocos try-catch.

```javascript
try {
  throw new TypeError("oops");
} catch ({ name, message }) {
  console.log(name); // "TypeError"
  console.log(message); // "oops"
}
```

<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=ff5733&height=120&section=footer"/>
