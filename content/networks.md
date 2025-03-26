---
title: networks
description: Conteúdo sobre Redes de Computadores
pubDate: Mar 17 2025
tags:
  - Redes Computadores
---
<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=ff4000&height=120&section=header"/>

# Sumário
- [Redes de Computadores](#redes-de-computadores)
- [Proxy](#proxy)
- [Protocolo HTTP](#protocolo-http-)


# Estude o algoritmo do **Dijkstra** ❗️❗️❗️❗️❗️

# Redes de Computadores 🌐
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

# Protocolos de Rede
- `~$ telnet smtp.google.com 25`
- Função de hash. Dependendo da entrada, a resposta é sempre de um tamanho específico. Exemplo `X % 10` é um exemplo de função de hash.
- Você precisa conhecer pelo menos um algoritmo de busca em rede. 
- Estude o algoritmo do **Dijkstra**.
- A gente envia número com little-engine para a rede, mas antes disso o sistema precisa converter para big-engine.
- Three-Way Handshake: SYN > SYN/ACK > ACK

## OSI - Open System Interconnection
Foi criado em 1970
Camada:
- Física: representado por algo que possa expressar 0s e 1s.
- Enlace:
- Rede: parte mais difícil. Tem **roteamento e **
- Transporte: tem os protocolos TCP (garante a eficácia da comunicação) e UDP (é menos confiável). Entrega de informações de forma confiável ou não.
- Sessão:
- Apresentação: é onde acontece a codificação 
- Aplicação: acesso de fato aos dados pelo usuário. Interface, browser. É onde ficam os programas tradicionais, FTP (usado apenas para transferência de dados), TFTP (maneira Trivial de TFTP),


## TCP/IP



<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=ff4000&height=120&section=footer"/>
