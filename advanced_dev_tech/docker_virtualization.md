# Virtualização 🆚 Containers
Ambos são tecnologias que auxiliam a configuração de servidores.

![Imagem comparando virtualização e containers](https://miro.medium.com/v2/resize:fit:1400/1*LxvdF6TuBXec4AWhApdLBg.png)

## Virtualização 👩‍💻🖥

A virtualização é uma técnica que consiste num fracionamento abstrato, feito pelo Hypervisor, da camada de hardware da máquina host (servidor, computador pessoal etc) que possibilita a execução de sistemas operacionais, dependências e programas de modo individual e independente dentro do sistema operacional original, **_dividindo_** componentes físicos. Essa técnica é ótima para separar a execução de várias aplicações, que podem demandar sistemas operacionais diferentes, em um mesmo computador, sem que um sistema interfira no outro.

No entanto, tal tática pode requerer muito dos recursos da máquina e maior trabalho de manutenção, logo, em alguns casos, pode ocasionar desperdício. Foi em razão disso que surgiu a virtualização em containers, serviço oferecido por softwares como Docker, Podman e LXC.

## Containers

Na técnica de virtualização utilizando containers, há uma entidade, como o **_engine_** no caso do docker, que cria containers com base no sistema operacional host, e tais containers fazem uso dos mesmos componentes físicos, de modo "simultâneo". Isso é mais

Os **containers** empacotam software de forma que seja  possível executá-lo nas máquinas destino mesmo que elas tenhas sistemas operacionais diferentes. Eles são formados por imagens, e **_imagens_** são pacotes executáveis mais leves que oferecem as instruções para criar os containers. O [Docker Hub](https://hub.docker.com) é uma comunidade que disponibiliza várias imagens para criação de containers de alguns sistemas de código aberto.

## Docker 🐳🐋

O Docker é uma plataforma que viabiliza a virtualização em containers. Nele, os containers são ambientes de [runtime](../programming_languages/runtimes.md) com tudo que é preciso para rodar o código da aplicação de forma independente. Ele apresenta a **Engine**, entidade responsável por criar, executar e gerenciar os containers.

![Logo Docker Compose](https://miro.medium.com/v2/resize:fit:1400/0*yKUZfT6P10SAIWNy.jpg)

**Docker Compose** é uma ferramenta utilizada para configurar o gerenciamento de multiplos containers, cada um executando um serviço diferente e que "conversam" entre si. Tal configuração é feita em um arquivo **YAML**, com extensão `.yml`. Uma vez escrito o documento de configuração, basta executar apenas um comando para iniciar todos os serviços nos containers.

Já o **Dockerfile** é um arquivo de texto com instruções detalhadas para criação de uma imagem, que será utilizada pelo docker com o comando de build para criar o container.


