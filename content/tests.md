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

# Tipos de Testes
O teste de software, de forma geral, é a investigação do software para obter informações sobre sua qualidade no contexto em que deve operar, e isso inclui o processo de usar o produto para revelar eventuais falhas. O objetivo principal dos testes é buscar um contra-exemplo**, ou seja, determinar entradas que façam as saídas obtidas diferirem das saídas esperadas, provando que o produto não está correto.

A seguir, apresento os tipos de teste mencionados nas fontes, com uma explicação simplificada de suas características, incluindo os exemplos que você solicitou:

> Teste Funcional (ou Caixa Preta / Caixa Fechada)
*   Características: Baseia-se na especificação dos requisitos do software, sem considerar os detalhes internos da implementação. Ele aborda o software de um ponto de vista macroscópico, focado em verificar se as funções estão sendo executadas corretamente sob a perspectiva do usuário.
*   Técnicas Comuns: Para otimizar a quantidade de testes, utiliza-se o Particionamento de Equivalência, que divide o domínio de entrada em subdomínios, e a Análise do Valor Limite, que foca nos valores extremos das entradas, onde os erros tendem a ocorrer com mais frequência. Quando há interações entre múltiplas variáveis de entrada, podem ser empregados Grafo de Causa-Efeito ou Tabelas de Decisão para testar combinações lógicas. Existe também a técnica Baseada em Erros, que pressupõe intuitivamente os tipos prováveis de erros.

> Teste Estrutural (ou Caixa Branca / Caixa Transparente)
*   Características: Diferente do teste funcional, este tipo de teste é baseado na estrutura interna do código-fonte e exige conhecimento da implementação. Seu objetivo é exercitar o maior número possível de caminhos, ramos e instruções do programa, identificando trechos de código não exercitados e complementando os testes baseados em requisitos.
*   Critérios de Cobertura: São utilizadas métricas como Cobertura de Linhas (executar todas as instruções), Cobertura de Ramos (garantir que cada ramo de decisão seja executado), Cobertura de Condições/Decisões (avaliar cada decisão como verdadeira e falsa) e Cobertura de Caminhos (executar todas as sequências possíveis de execução). Um critério mais rigoroso, usado em sistemas críticos, é o MC/DC (Modified Condition/Decision Coverage), que assegura que cada condição em uma decisão afete isoladamente o resultado final.

> Teste de Unidade (Unit Test)
*   Características: É a fase em que se testam as menores unidades de software desenvolvidas, como métodos ou pequenos trechos de código, de forma isolada. É um teste rápido, fácil de controlar e escrever, proporcionando feedback imediato aos desenvolvedores. O objetivo é encontrar falhas de funcionamento dentro de uma pequena parte do sistema, independentemente do todo.

> Teste de Integração:
*   Características: Após as unidades serem testadas separadamente, este teste as avalia de forma integrada, focando na interface entre as unidades e na interação do código com partes externas. Para auxiliar, são utilizados Stubs (pseudo-implementações que simulam respostas de componentes ainda não prontos) e Drivers (simulam chamadas de módulos que ainda não existem). Existem estratégias como *Big-bang* (integrar tudo no final), *Bottom-up* (integrar módulos de baixo nível primeiro) e *Top-down* (integrar módulos de alto nível primeiro).

> Teste de Sistema:
*   Características: Investiga o funcionamento da aplicação como um todo, incluindo a execução dos fluxos dos casos de uso e a integração com o ambiente operacional (similar ao de produção). O objetivo é executar o sistema do ponto de vista do usuário final, buscando falhas em características funcionais (regras de negócio) e não-funcionais (como usabilidade, segurança, eficiência).
*   Tipos Específicos: Inclui testes de Recuperação (verifica a capacidade de recuperação do produto após falhas), Segurança (verifica os mecanismos de proteção), Stress (executa o sistema com recursos anormais) e Desempenho (avalia o desempenho do software integrado ao sistema).

> Teste de Aceitação:
*   Características: É um teste funcional realizado pelos usuários finais para demonstrar a conformidade do software com os requisitos definidos pelo cliente. Envolve treinamento, documentação e empacotamento.
*   Subtipos: Podem ser Teste Alfa (executado na instalação do desenvolvedor pelo cliente) e Teste Beta (executado na instalação de um ou mais clientes pelo usuário final).

> Teste de Regressão:
*   Características: Consiste em reaplicar todos os testes que já foram executados em versões ou ciclos anteriores do sistema, a cada nova versão ou modificação do software. É crucial para reduzir "efeitos colaterais" e garantir que mudanças ou correções não introduziram novos defeitos ou quebraram funcionalidades existentes.

> Teste de Fumaça (Smoke Testing):
*   Características: Uma verificação superficial e rápida para detectar as falhas mais críticas em um sistema, realizada logo após uma nova build. É um teste rápido e barato, útil para verificar se as funcionalidades essenciais estão funcionando antes de testes mais aprofundados.

> Teste E2E (End-to-End) / Jornada de Usuário:
*   Características: Foca na execução do sistema na perspectiva do usuário final, simulando uma jornada completa de uso. Abrange desde o front-end até o back-end, garantindo que as funcionalidades operem corretamente em cenários reais. Esses testes podem ser caros para manutenção. Em aplicativos móveis, são grandes testes de integração que buscam simular o mais próximo da produção.

> Teste de Usabilidade (User eXperience - UX):
*   Características: Concentra-se em avaliar se a aplicação é fácil de usar e satisfatória para o usuário final. Envolve a análise de conteúdo, funcionalidades, navegabilidade, design e o feedback de usuários reais para capturar suas expectativas e percepções após o uso. Falhas de usabilidade são as que mais afetam a percepção de qualidade por usuários móveis.

> Teste de Segurança:
*   Características: Verifica se os mecanismos de proteção do sistema funcionam corretamente, protegendo-o contra uso indevido ou intrusões. Em aplicações móveis, isso inclui garantir que o aplicativo atenda aos requisitos de segurança definidos pelos *stakeholders*, cuidando do armazenamento de dados, provedores de conteúdo, uso de permissões e validação de dados do usuário.

> Teste de Desempenho:
*   Características: Avalia o desempenho do software quando integrado ao sistema, verificando sua capacidade de atender a requisitos não-funcionais como velocidade, tempo de resposta, quantidade de downloads, velocidade do processador e capacidade de armazenamento. Geralmente está associado ao teste de Stress.

> Teste de Compatibilidade:
*   Características: Verifica se a aplicação móvel roda corretamente em todos os dispositivos e sistemas operacionais alvo. É crucial devido à fragmentação, que é a grande diversidade de dispositivos e versões de SO no mercado. Uma matriz de compatibilidade é frequentemente usada para planejar e documentar essa verificação.

> Teste de Estabilidade:
*   Características: Avalia a capacidade do aplicativo de funcionar de forma contínua e confiável sob diferentes condições de uso, sem travamentos, falhas ou degradação de desempenho. Foca na resistência do aplicativo diante de longas sessões, mudanças de rede, uso intenso de recursos do dispositivo e integrações com serviços externos.

> Teste de Conectividade:
*   Características: Tem como objetivo testar o acesso a todos os componentes essenciais para que a aplicação móvel faça uso apropriado do contexto em que estiver inserida, especialmente em relação à infraestrutura de rede (telecomunicações).

> Teste de Certificação:
*   Características: Verifica se a aplicação móvel atende a todos os padrões estabelecidos pelas lojas de aplicativos (como Google Play, App Store e Windows Store) onde será distribuída. Os critérios são aplicados quando a aplicação já foi desenvolvida e será submetida para publicação.

> Testar em Produção:
*   Características: Uma fase complementar de testes realizada no ambiente real de produção para obter resultados mais precisos. Aumenta a confiança da equipe de que os usuários experimentarão a mesma funcionalidade verificada.
*   Tipos Específicos: Inclui Monitoramento Contínuo (estabilidade, tempo de resposta), Monitoramento de Aplicações (RUM - Real User Monitoring, e monitoramento sintético), Acompanhamento em Tempo Real (verificar transações em cada camada). Também são feitos Testes A/B (para obter feedback de usuários sobre diferentes versões) e Teste de Pico (avalia desempenho sob carga extrema).

> Outros Tipos e Atividades Relevantes:
*   Teste UI (User Interface): Testes a nível de usuário, focando em acessibilidade, layout, navegadores e responsividade.
*   Teste de Componente: Verifica a funcionalidade ou aparência de um módulo ou componente de forma independente.
*   Teste de Recurso (Feature Test): Verifica a interação de dois ou mais componentes ou módulos independentes, operando no nível da funcionalidade.
*   Teste de Aplicativo (Application Test): Verifica a funcionalidade de todo o aplicativo na forma de um binário implantável, sendo grandes testes de integração.
*   Teste de Candidato a Lançamento (Release Candidate Test): Semelhante aos testes de aplicativo, mas com o binário minificado e otimizado, executado em um ambiente o mais próximo possível da produção.
*   Teste de Contrato: Um tipo de teste que verifica se o contrato de interface entre diferentes módulos ou serviços é mantido.
*   Teste Exploratório: Uma abordagem de teste manual que enfatiza a liberdade do testador para explorar o software, buscando defeitos sem um roteiro predefinido.
*   Teste Conceitual: Utilizado nas fases iniciais do desenvolvimento para validar ideias, funcionalidades e fluxos com usuários em potencial, antes mesmo da implementação, para evitar desperdício de recursos.
*   Testes Automatizados: Uma categoria ampla que engloba a automação da execução de testes, com o uso de ferramentas e scripts predefinidos.
*   Context-aware Test: Foca em aplicativos que dependem de sensores, localização e adaptação ao contexto.
*   Análise Estática: Embora não seja um "teste de execução", é uma técnica de detecção de defeitos que analisa o código estaticamente em busca de erros de tipagem e digitação.
*   Revisões de Software (Software Reviews): Incluem Revisões Técnicas, Inspeções e Walkthroughs. São processos nos quais produtos de software são examinados por membros da equipe ou *stakeholders* para encontrar defeitos, fornecer feedback ou aprovações. São considerados atividades de verificação e validação estática de artefatos de software. A revisão de código é uma prática amplamente adotada para garantir qualidade e manutenibilidade.

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
