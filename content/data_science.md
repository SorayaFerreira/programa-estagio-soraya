---
title: abstraction
description: Conteúdo sobre abstração de conceitos ou objetos
pubDate: Feb 02 2025
tags:
  - Modelo Mental
  - Abstração
  - Hipótese
  - Método de Estudo
---
<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=f2c438&height=120&section=header"/>

# Sumário
> - [Terminologia da Ciência de Dados](#terminologia-da-ciência-de-dados)

# Terminologia da Ciência de Dados

> Ciência de Dados (Data Science): 
- É uma área interdisciplinar que combina estatística, programação e extração de conhecimento em dados, abrangendo subáreas como Mineração de Dados (Data Mining), Inteligência Artificial (AI) e Aprendizado de Máquina (Machine Learning).

> Big Data
- Definição: Refere-se a **conjuntos de dados volumosos e com alta complexidade** que demandam infraestrutura robusta para sua coleta e processamento.
- **Os 5 Vs**: Um conceito-chave para caracterizar Big Data, incluindo: **Volume** (quantidade de dados gerados), **Velocidade** (frequência de geração dos dados), **Variedade** (diversidade de formatos, como dados multimodais ou estruturados/não-estruturados), **Veracidade** (confiabilidade dos dados, considerando ruídos), e **Valor** (benefícios que os dados podem trazer para o negócio).
- **Tipos de Dados em Big Data**: Podem ser **estruturados** (tabular), **não-estruturados** (textos, imagens), **georreferenciados**, **gerados por máquinas**, **públicos** (open-source), **temporais** (séries temporais) ou em **fluxo** (data streaming).

> Aprendizado de Máquina (Machine Learning - AM)
- **Definição**: É uma **subárea da Inteligência Artificial** que se concentra no desenvolvimento de algoritmos capazes de **aprender com dados, extrair padrões e realizar previsões ou decisões** com base nesses padrões. Pode ser considerado uma "caixa de ferramentas" para a IA.
- **Tipos de Algoritmos**: Os principais tipos são **AM Supervisionado**, **AM Não Supervisionado**, **AM Semissupervisionado** e **AM por Reforço**. No contexto do agrupamento de perfis de investidores, o **Aprendizado Não Supervisionado** é a abordagem principal.
- **Dados e Atributos**: Dados são geralmente organizados em formato tabular, onde cada **linha é uma instância (ou objeto/item/registro)** e cada **coluna representa um atributo (ou característica/feature)**. A **qualidade dos atributos** é crucial para o desempenho dos modelos. É importante saber que o **tipo do atributo** (nominal, numérico, ordinal, intervalo, razão) determina qual método pode ser aplicado.

> **Pré-processamento e Manipulação de Dados**
- **Etapas**: Inclui a **seleção de dados**, o **pré-processamento** em si, e a **transformação dos dados**.
- **Transformação dos Dados**: Envolve projetar os dados em um novo conjunto de atributos ou dimensão (subespaço). Exemplos de técnicas são **PCA** (Principal Component Analysis), **t-SNE** (t-Distributed Stochastic Neighbor Embedding) e **UMAP** (Uniform Manifold Approximation and Projection).
- **Seleção de Atributos**: Métodos usados para **identificar e selecionar os atributos mais relevantes**, como Correlação de Pearson e Chi-quadrado.

> **Agrupamento de Dados (Data Clustering)**
- **Definição**: É a **tarefa de encontrar GRUPOS DE INSTÂNCIAS/OBJETOS de maneira que os objetos de um grupo são similares entre si e dissimilares com relação aos objetos de outros grupos**.
- **Contexto no Projeto**: Essencial para **encontrar segmentos de clientes e nichos de mercado**, como os perfis de investidores do Tesouro Direto.
- **Medidas de Proximidade**: Para o agrupamento, é necessário definir a **medida de proximidade**, seja por **Similaridade** (quão similar é um par de objetos) ou **Dissimilaridade** (quão distante um par de objetos está). Medidas comuns de Dissimilaridade incluem **Euclidiana**, **Manhattan** e **Minkowski**.

> **Técnicas de Agrupamento**
- **Agrupamento Particional (K-Médias / K-Means)**:
- **Funcionamento**: Um dos algoritmos mais populares. Cada grupo é representado por um **centróide** (ponto central), e cada objeto é associado ao centróide mais próximo. O **número de grupos (K)** deve ser predefinido.
- **Algoritmo**: Inicia-se selecionando K centróides iniciais; em seguida, os objetos são atribuídos ao centróide mais próximo, e os centróides de cada grupo são recalculados, repetindo-se até a convergência.
- **Análise**: É **simples e eficiente**, funciona bem para **grupos esféricos e bem separados**, mas pode encontrar **soluções sub-ótimas** e **depende da escolha inicial dos centróides**.
- **Agrupamento Hierárquico**:
- **Funcionamento**: Representa o agrupamento em uma **hierarquia usando um dendrograma**, que mostra as distâncias entre os grupos.
- **Métodos**: Podem ser **Aglomerativos (bottom-up)**, começando com cada objeto em um grupo e unindo os pares mais "próximos" até formar um único grupo; ou **Divisivos (top-down)**, começando com todos os objetos em um grupo e subdividindo-o recursivamente. Um exemplo aglomerativo é o **Single-Linkage (MIN Linkage)**.
- **Análise**: Não exige a definição prévia do número de grupos (K), mas sim a seleção de um **nível de corte (limiar de distância)**. É um procedimento "guloso", e embora possa ser computacionalmente intensivo (calculando matriz de distâncias O(N²)), produz uma **hierarquia que permite boa interpretabilidade dos grupos**.

> **Avaliação de Agrupamentos**

- **Propósito**: Avaliar a qualidade dos grupos formados, importante para encontrar uma boa partição e estimar o número ideal de K.
- **Critérios**:
- **Critérios Externos**: Avaliam as partições obtidas em relação a uma "verdade" conhecida (ground-truth). O **Rand Index (RI)** é um exemplo, calculando a similaridade entre duas partições com base em pares de objetos.
- **Critérios Internos**: Avaliam a **compactação de cada grupo** e a **separação entre os grupos**. O critério mais popular é a **Silhueta (Silhouette Width Criterion)**, que calcula um valor para cada objeto, considerando a distância média intra-cluster e entre-clusters. Pode ser utilizada para estimar o número de grupos (K).

> **Visualização e Interpretação de Dados**
- **Importância**: Fundamental para **detectar tendências, anomalias e padrões** em dados de alta dimensionalidade ou grande volume, apoiar a tomada de decisão, gerar hipóteses visuais e, crucialmente, **comunicar resultados com clareza** a públicos diversos.
- **Estatísticas Descritivas**: Base para a interpretação, incluindo medidas de **tendência central** (Média, Mediana, Moda) e **dispersão** (desvio padrão, variância, quartis e IQR), que ajudam a identificar **outliers**.
- **Tipos de Gráficos**:
- **Histogramas**: Representam a distribuição de frequências de valores em intervalos (bins).
- **BoxPlots**: Utilizam as estatísticas de quartis para mostrar a distribuição dos dados e identificar outliers. O **Violin Plot** é uma variante que combina estatísticas de quartis com a distribuição de densidade.
- **Gráficos de Dispersão (Scatter Plot)**: Mostram a relação entre duas ou três variáveis numéricas, revelando dispersão, coesão ou correlação.
- **Gráficos de Linhas Paralelas (Parallel Plot)**: Úteis para visualizar dados de alta dimensionalidade, permitindo comparar múltiplos atributos simultaneamente e identificar tendências ou agrupamentos.
- **Mapas (Choropleth)**: Permitem visualizar dados geográficos, relacionando estatísticas a regiões específicas.
- **Storytelling com Dados**: A prática de usar gráficos, estatísticas e contexto para **transmitir uma mensagem clara e transformar a análise exploratória em uma história compreensível e relevante** para o público. Isso inclui contextualizar os dados brutos, interpretar descobertas, explicar perfis e concluir com uma mensagem relevante.

> **Insight**
- **Definição**: Um **insight** é uma **descoberta valiosa ou um entendimento profundo** obtido a partir da análise de dados, que revela **padrões, tendências ou anomalias**. O objetivo é que esses insights **apoiam a tomada de decisão** e permitem **gerar hipóteses visuais**. No contexto do seu projeto, a **análise exploratória dos dados** e a **aplicação de técnicas de visualização dos dados** são etapas cruciais para a **obtenção de insights**, que devem ser **comunicados com clareza**, especialmente se o público-alvo não for da área de computação.

> **Classe**
- **Definição**: No **Aprendizado de Máquina Supervisionado**, uma **"classe" é um rótulo ou categoria predefinida (também chamada de meta-atributo)** que cada instância (linha) em um conjunto de dados possui. Por exemplo, em uma análise de sentimentos, as classes podem ser "Positivo", "Negativo" ou "Neutro" para um texto. Em algoritmos de **Classificação**, as classes são rótulos nominais. Além disso, no contexto de **avaliação de agrupamentos** usando o **Rand Index (RI)**, a "classe" refere-se a uma **verdadeira categorização (ground-truth)** dos dados, utilizada para comparar e avaliar a qualidade da partição obtida pelo agrupamento.

> **Conjunto**
- **Definição**: Em Ciência de Dados, o termo **"conjunto"** refere-se a uma **coleção de elementos ou dados**.
- **Conjunto de Dados (Dataset)**: Refere-se a um **conjunto de dados volumosos e com alta complexidade**, dos quais os algoritmos de aprendizado de máquina extraem padrões. A base de dados completa a ser explorada pode ser considerada um conjunto de dados.
- **Conjunto de Atributos**: Pode-se "projetar os dados em um **novo conjunto de atributos** ou dimensão", o que significa um agrupamento de características que descrevem as instâncias.
- **Outros Contextos**: Também é usado para se referir a um **"conjunto de questões norteadoras"** para a análise de dados.

> **Agregação**
- **Definição**: Embora o termo "agregação" não seja explicitamente definido nos materiais fornecidos, ele está implicitamente presente em diversas práticas de ciência de dados. No contexto dos dados, **"agregação" geralmente se refere ao processo de sumarizar ou combinar dados de múltiplas fontes ou de um mesmo conjunto para obter uma visão consolidada ou estatísticas descritivas**. Por exemplo, ao calcular **estatísticas descritivas** como Média, Mediana, Moda, Desvio Padrão e Variância, você está agregando informações de um conjunto de dados para obter valores resumidos. A própria tarefa de **Agrupamento de Dados (Data Clustering)** pode ser vista como uma forma de agregação, onde objetos são combinados em **grupos baseados em similaridade**.

> **Correlacionamento de Dados**
- **Definição**: O **"correlacionamento de dados"** é o **processo de identificar e medir a relação ou associação entre duas ou mais variáveis (atributos) em um conjunto de dados**. Essa análise é fundamental para entender como as mudanças em uma variável podem estar ligadas a mudanças em outra.
- **Métodos**: Técnicas como a **Correlação de Pearson** e **Chi-quadrado** são usadas para quantificar essa relação, sendo importantes na **seleção de atributos** para identificar e descartar atributos altamente correlacionados ou similares, o que pode impactar o desempenho do modelo.
- **Visualização**: **Gráficos de Dispersão (Scatter Plots)** são ferramentas visuais eficazes para **identificar a correlação entre atributos**, mostrando a dispersão dos pontos e se há uma organização coesa.

----

<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=f2c438&height=120&section=footer"/>