---
title: networks
description: Conteúdo sobre Redes de Computadores
pubDate: Mar 17 2025
tags:
  - Redes Computadores
---
<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=aa2299&height=120&section=header"/>

# Sumário
- [Redes de Computadores](#redes-de-computadores)
- [Proxy](#proxy)
- [Protocolo HTTP](#protocolo-http-)

# Redes de Computadores 🌐🪄
- Rede é um conjunto de coisas interconectadas.
- Toda máquina conectada à rede é um **host**. Também é qualquer coisa que usa o TCP/IP.
- LAN (Local Area Network): sua casa, uma faculdade, uma pequena empresa.
- WAN (Wide Area Network): é difícil determinar o que é algo amplo.
- [RNP (Rede Naciona de ensino e Pesquisa)](https://www.rnp.br/): é uma rede brasileira para educação e pesquisa, tendo o objetivo de impulsionar a ciência e a educação para todos.
- Roteador: dispositivo que abre mais camadas e possibilita melhor controle. Ele consegue alcançar múltiplas redes, e segmentá-las.
- Estação de Trabalho: geralmente são computadores. É onde vc vai trabalhar.
- Servidor: é quem hospeda serviços de rede. Eles têm uma configuração de hardware bem mais robusta. Há vários tipos: de arquivo, de e-mail, de impressão, web, de aplicação, de acesso remoto, e de proxy.
- WPA2 Enterprise: é um protocolo diferente para logar na rede (Eduroam, p. ex.). É diferente do que a gente usa em casa, pq em casa é uma senha compartilhada, aqui na UFMS é diferente.
- Rede Blackbone:
- o SEI e o SisCad são os serviços mais indispensáveis da UFMS.
- Há dois tipos de redes: **peer-to-peer (P2P)** e **cliente-servidor**.
- **Hub**: cada pacote enviado para uma porta é copiado para todas as outras. Ele é dispositivo mais estúpido da Rede de Computadores.
- Não pode misturar cabos elétricos com cabos de rede comuns por causa do campo elétromagnético.
- **Backbone**: é uma conexão física entre todos os hosts (segmentos e servidores) na rede.
- ESR: é uma escola de redes de computadores. Eles têm um modelo de prática de rede.
- **Encapsulamento:** é a comunicação entre as camadas adjacentes do protocolo OSI.
- **Repetidores** são uma porcaria.

- Topologias:
    - **Barramento**: é a topologia mais básica. Ninguém usa mais.
    - **Estrela**: é usada até hoje. Coloca um switch e liga todo mundo nele.
    - **Anel**: tem o formato de um ciclo. Esse aqui ninguém usa mais. 
    - **Malha**: cada host fica ligado em todas as máquinas. `[n*(n-1)]/2` para saber o número de cabos pra cada máquina.
    - **Ponto-a-ponto/Ponto-a-Multiponto**: a conexão é direta, um dispositivo ligado diretamente a outro 

## Proxy
![O que é um proxy](https://testrigor.com/wp-content/uploads/2023/11/How-to-Find-Proxy-Settings.jpeg)
- Usado para averiguar e controlar as coisas que as pessoas podem acessar na rede.

# Protocolo HTTP 📄🛜
- A porta dele é a 80.
- O protocolo que ele usa é a HTTPS.

**API**: Application Programming Interface. Têm fácil integração com os sistemas; seguem padrões de desenvolvimento; elas se comunicam com xml, ou json, ou html, devido à simplicidade desses tipos de dados; requests e responses são feitas em HTTP 📄 tipos de requisições HTTP: get, post, delete, put, patch; uma API RESTful é algo ideal;

**ENDPOINT**:  é uma URL da API, que acessamos para obter uma resposta; ponto final, é o que fica na ponta da rede (roteadores, switch, celulares, tablets etc); Endpoint é um termo que se refere a cada rota de uma API. Através dele é possível solicitar criação, exclusão, atualização e recuperação de qualquer dado.

**BODY**: é o corpo da requisição que é enviado para o endpoint. Ele armazena os dados compilados  para criação ou atualização de algum serviço, usualmente no formato JSON ou XML.

**PARAMS**: são utilizados nas consultas ou atualizações de serviços. Eles podem ser parâmetros enviados na própria URL, após o sinal `?` (query params), posicionados na rota como em `/projects/:project_id` (route params), ou enviados no body da requisição. Existe uma tecnologia experimental com desejo de padronizar os parâmetros, veja [ URL Pattern API](https://developer.mozilla.org/en-US/docs/Web/API/URL_Pattern_API).

**REST**: é um conceito de arquitetura ligado à API e ao protocolo HTTP. Esse padrão tem 6 partes que precisam ser implementadas para tornar a API em RESTful uniformidade, desacoplação, stateless, cache, arquitetura de camadas, code on demand.

O Postman, o Bruno e o [Ensomnia](https://insomnia.rest/) são programas que utilizamos para testar APIs suas ou de terceiros. Você insere um endpoint, para testar o backend e depois integra com o frontend. Ele serve para você não precisar do frontend para testar o backend.

**LOCALHOST**: é um nome que identifica um dispositivo numa rede (hostname), e refere-se ao endereço IP padrão da rede do computador local (`127.0.0.1`), isto é, o próprio computador em que um programa é executado. Dessa maneira, o computador funciona como um servidor virtual. Cada endereço de IP está conectado a uma placa de rede, mas o localhost é como se fosse uma placa de rede virtual. O `0.0.0.0` significa `qualquer placa de rede`.

**PROMISE**: trata-se de um proxy para um valor não necessariamente conhecido quando uma promise é criada. Permite que métodos assíncronos retornem resultado constantemente.

### Como funciona:
- **Sockets**: soquetes são como tomadas. Diferentes portas são diferentes padrões de tomadas. Soquetes é uma forma de comunicação entre processos.
- **Bind**: é uma ligação -- a ligação de um endereço IP com outro número de 16 bits, que é a porta.
- **Porta**: é um número que identifica um processo que identifica um processo que o sistema operacional mantém na tabela dele. É um identificador do programa rodando ligado ao endereço IP do computador. É só um número
- **Listen**: é um estado em que o programa fica bloqueado esperando o sistema enviar algo.
 
O browser é um exemplo de programa que pede uma conexão. Ele não precisa fazer bind porque ele não precisa que ninguém se conecte nele.
Um servidor faz bind e listen numa porta e fica esperando (escutando). Um cliente (navegador) enviar pacotes para o IP do servidor e pede para se conectar com um programa que está escutando.

Para programas web, geralmente utilizamos porta que vão de 1024 até 49152. As portas de número até 1023 são reservadas e precisam de permissão de administrador `sudo` para serem utilizadas.

# Protocolos de Rede 📄
- `~$ telnet smtp.google.com 25`
- Função de hash. Dependendo da entrada, a resposta é sempre de um tamanho específico. Exemplo `X % 10` é um exemplo de função de hash.
- Você precisa conhecer pelo menos um algoritmo de busca em rede. 
- Estude o algoritmo do **Dijkstra**.
- A gente envia número com little-engine para a rede, mas antes disso o sistema precisa converter para big-engine.
- Three-Way Handshake: SYN > SYN/ACK > ACK

## OSI - Open System Interconnection 🪄🛜
- Cada camada não tem conhecimento da camada anterior.
- Foi criado em 1970

Camada:
- **Física**: representado por algo que possa expressar 0s e 1s.

- **Enlace**: de dados se refere às tecnologias usadas para conectar duas máquinas em uma rede onde a camada física já existe. Ela gerencia quadros de dados, que são sinais digitais encapsulados em pacotes de dados. O controle de fluxo e o controle de erros de dados geralmente são os principais focos da camada de enlace de dados. Faz a transmissão dos quadros de dados; converte bytes em quadros; usa endereço **MAC**.

- **Rede**: parte mais difícil. A camada de rede se preocupa com conceitos como roteamento, encaminhamento e endereçamento em uma rede dispersa ou em várias redes conectadas de nós ou de máquinas. A camada de rede também pode gerenciar o controle de fluxo. Faz o roteamento dos dados na rede; é tipo um GPS. Determina o endereço lógico (IP) de cada equipamento e o melhor caminho para chegar ao destinho. Usa algoritmos de roteamento.

- **Transporte**: tem os protocolos TCP (garante a eficácia da comunicação) e UDP (é menos confiável). Entrega de informações de forma confiável ou não. O foco principal da camada de transporte é garantir que os pacotes de dados cheguem na ordem correta, sem perdas nem erros, ou que possam ser recuperados sem complicações, se necessário. O controle de fluxo, em conjunto com o controle de erros, é frequentemente um foco na camada de transporte. Nessa camada, os protocolos comumente usados ​​incluem o Transmission Control Protocol (TCP), um protocolo baseado em conexão quase sem perdas, e o User Datagram Protocol (UDP), um protocolo sem conexão com perdas. Percorre o caminho determinado pela camada de rede.

- **Sessão**: A camada de sessão é responsável pela coordenação de rede entre duas aplicações separadas em uma sessão. Uma sessão gerencia o início e o término de uma conexão individual de aplicações e conflitos de sincronização. Estabele, gerencia e encerra sessões de interação. Garante o controle de diálogo e comunicação.

- **Apresentação**: é onde acontece a codificação. Se preocupa principalmente com a sintaxe dos próprios dados para as aplicações enviarem e consumirem. Lida com a representações dos dados, sendo responsável por sintaxe e semântica das informações. Isso pode incluir a compressão ou a criptografia de dados.

- **Aplicação**: acesso de fato aos dados pelo usuário. Interface, browser. É onde ficam os programas tradicionais, FTP (usado apenas para transferência de dados), TFTP (maneira Trivial de TFTP). A camada de aplicação se preocupa com o tipo específico da aplicação em si e seus métodos de comunicação padronizados. Por exemplo, navegadores podem se comunicar usando HyperText Transfer Protocol Secure (HTTPS), e clientes de e-mail e HTTP podem se comunicar usando POP3 (Post Office Protocol versão 3) e SMTP (Simple Mail Transfer Protocol).

## TCP/IP 📡
- **Aplicação:**
- **Transporte:**
- **Rede:**
- **Interface de rede/Enlace:**
- **Física:**


## Padrões 568A e 568B CAI NA PROVA!!!!!!!!!!!!1
## MONOMODO E MULTIMODO SÃO OS MAIS USADOS!!!!!!!!1111


## Cabos - Comunicação Física
- Cabo coaxial: é o mais antigão. Um usa PVC, outro usa cerâmica, ou pode ser de teflon também. Ele tem uma blindagem que evita interferência eletromagnética.
- Par trançado: muito utilizado em empresa. É o mais barato.
- Fibra ótica: aquele que usa uma fibra transparente que se aproveita do fenômeno da refração da luz. Não sofre de interferência.
- half-duplex: cada um fala de uma vez;
- full-duplex: podem falar ao mesmo tempo.
- Cabo Ethernet: são 4 pares com as cores: verde, verde-branco, azul, azul-branco, laranja, laranja-branco. e marrom, marrom-branco.

- Conversor de mídia: é um dispositivo que converte um tipo de sinal em outro. P. ex.: o access point, que converte as ondas eletromagnéticas em sinais elétricos. 
- Tem um negócio chamado **Powerline**, que se conecta na tomada. É uma boa alternativa para repetidores, já que repetidores são uma bosta.


# Firewall
- Mecanismo da rede
- Firewall stateless: tem que existem uma regra do firewall falando 
- Firewall statefull: é mais esperto, porque ele faz uso da comunicação TCP. 
- DHCP: 

<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=ff4000&height=120&section=footer"/>
