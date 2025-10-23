---
title: operating_systems
description: Conteúdos sobre Sistemas Operacionais
pubDate: Feb 02 2025
tags:
  - Linux
  - Terminal
  - Instalar
  - Diretórios
---
<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=ffff00&height=120&section=header"/>

# Sumário
- [Sistemas Operacionais](#sistemas-operacionais)
- [Linux](#linux-)
- [Guia Rápido de Comandos no Terminal](#guia-rápido-de-comandos-no-terminal-ctrlaltt-️)

# Sistemas Operacionais
- [[Sistema Operacional]]: ativa todos os periféricos e cria o ambiente sobre o qual todos os outros  programas rodam.
- O MS-DOS foi o primeiro sistema operacional da Microsoft. 

# Princípios Filosóficos do Unix
- Do one thing and do it well;
- Everything is a file;
- Small is beautiful;
- Connect programs together;
- Build portable software;
- Choose portability over efficiency;
- Store data in text files;

# Linux 🐧💛
- Na década de 60, um sistema operacional precisava ser extremamente eficiente, enxuto e otimizado, buscando o máximo desempenho com o mínimo de recursos. Por isso o Unix se desenvolveu de forma tão elegante, robusta e estável.
- Linus Torvalds criou o Linux (além do GIT), sistema derivado do Unix, em 1991. Assim surgiu o Kernel Linux. A partir daí, começou a se formar a comunidade Linux, que tinha acesso ao sistema pela licença GPL.
- A GPL tem 4 direitos básicos:
   - Tudo pode ser usado por qualquer um e para qualquer fim;
   - É permitido tirar cópias, distribuir e até vender programas.
   - Ter acesso ao código fonte, modificá-lo e distribuí-los.
   - Direito e obrigação de redistribuir as modificações feitas;
- AGPL tem o objetivo de estimular a colaboração e o reaproveitamento de softwares e componentes, o que vem nos trazendo diversas mudanças positivas.
- Há três famílias de distribuições linux principais: derivados do Red Hat (Fedora, 
Mandriva), derivados do Debian (Ubuntu, Kubuntu, Linux Mint), e os derivados do Slack Ware (Slax).
- É mais natural e simples usar a palavra Linux para se referir à plataforma como um todo do que a um kernel apenas.
- Kernel: peça fundamental do sistema, responsável por prover a infraestrutura básica necessária para que os programas funcionem, além de ser o responsável por dar suporte aos mais diferentes periféricos: placas de rede, som e o que mais você tiver espetado no micro.

## **Como instalar programas no linux:**
1. Usar o `sudo apt-get install` ou outro gerenciador para instalar pacotes próprios da distribuição em uso. Esta é a forma mais simples e menos passível de erros.
2. Programas com instaladores próprios, destinados a funcionar em várias distribuições.
3. Instalar o programa a partir do código-fonte, o que pode ser necessário no caso de aplicativos pouco comuns, que não estejam disponíveis de outra forma, e também no caso de muitos drivers, onde é  necessário gerar um módulo personalizado para o kernel em uso.

- Os módulos nada mais são do que os arquivos, que são armazenados dentro da pasta `/lib/modules/versão_do_kernel`. 
- Três coisas para instalar: pacotes kernel-source e kernel-headers, e o compilador gcc.

- **Wayland**: é um Protocolo de Servidor de Exibição.

# Debian
├── 🎯 Objetivo
│   └── Ser o "Sistema Operacional Universal"
├── 📜 Princípios
│   ├── Debian Free Software Guidelines (DFSG)
│   └── Contrato Social do Debian
│       ├── 100% Software Livre (por padrão)
│       ├── Transparência total
│       ├── Colaboração com a comunidade livre
│       └── Separação clara entre software livre e não-livre
├── 👥 Comunidade
│   ├── Projeto voluntário e democrático
│   ├── Eleição anual de líder (DPL)
│   └── Decisões por consenso e votação
├── ⚙️ Desenvolvimento
│   ├── Aberto e transparente
│   ├── Código-fonte sempre disponível
│   └── Qualidade e estabilidade priorizadas
└── 💡 Filosofia Prática
    ├── Liberdade de escolha
    ├── Estabilidade acima da vanguarda
    ├── Extensa documentação
    └── Base para outras distros (Ubuntu, Kali, etc.)

  
## **Diretórios** 🗂️📂

O diretório raiz tem as pastas do sistema e espera-se que nossos arquivos pessoais sejam armazenados no diretório /home. 
Os discos e as partições não aparecem necessariamente como unidades diferentes. 
Tudo faz parte de um diretório raiz chamado “/”.

- Diretório `/bin`: armazena os executáveis de alguns comandos básicos do sistema,  como o su, tar, cat, rm, pwd etc… Eles ficam separados para estarem disponíveis desde o início do boot.
- Diretório `/sbin`: armazena aplicativos que podem ser usados apenas pelo root.
- Diretório `/usr` (Unix System Resources): armazena os executáveis e bibliotecas de todos os principais programas instalados.
- Diretório `/boot`: armazena o kernel, arquivos da fase inicial do boot e a configuração do gerenciador de boot. Podemos encontrar o executável do kernel no meio de um pequeno conjunto de arquivos. Ele é o primeiro componente carregado pelo gerenciador de boot durante a inicialização do sistema. O kernel linux é atualizado quase diariamente.
- Diretório `/dev`: armazena ponteiros para dispositivos de hardware.
- Diretório `/sys`: agrupa informações sobre os dispositivos instalados, permitindo que os serviços responsáveis pela detecção de hardware façam seu trabalho.
- Diretório `/etc`: concentra os arquivos de configuração do sistema, substituindo de certa forma o registro do Windows. Os arquivos são desenvolvidos justamente para facilitar a edição manual.
- Diretório `/mnt`:  é congruente ao “/media”.

- Geralmente os terminais Linux usam os mesmos comandos. O terminal é uma forma natural de conversar com o sistema. Ele simplifica operações para necessidades mais específicas. Muitas tarefas são mais práticas de serem executadas no terminal. 
- “shell script” serve para automatizar qualquer tarefa repetitiva.
- PowerShell é a interface de linha de comando do Windows.

- Outro nome para a barra vertical ( | ) é pipe (páipi).
- É possível copiar e colar com o scroll do mouse. É só selecionar o texto ou imagem e clicar com o scroll no lugar que desejar colar.
- O `ls` serve para listar os arquivos de uma pasta.

--------
## Guia Rápido de Comandos no Terminal **(`Ctrl+Alt+T`)** 🖥️🐚
- `cd`:  permite navegar entre os diretórios. Quando você abre o terminal, você está  no diretório /home/gdh, e pode acessar todos os outros com `cd /diretorio`. Para voltar ao home digite apenas cd. 
- `man ls` serve para saber sobre todas as possibilidades de um comando no terminal do linux.
- `pwd`:  serve para confirmar em qual diretório você está.
- `ls`: serve para listar os arquivos da pasta. “ls -lh” serve para ver detalhes do arquivo.
- `clear`: limpa o terminal, mas não apaga os comandos anteriores do histórico.
- `cp`: serve para copiar arquivos de uma pasta para outra. Especifique `cp nomeDoArquivo.extensao/pastaOrigem/novaOrigem`.
- `./` : representa o diretório atual.
* `*`: significa “todos”, use após o cd para copiar todos os arquivos.
- `cp -a` : para fazer o cp se comportar de maneira mais lógica.
- `mv`:  para remover ou renomear arquivos. Para mover é a mesma coisa que o `cp` e para renomear é só digitar o nome atual e depois o novo.
- `mkdir`:  é para criar diretórios.
- `—`: para digitar um travessão, aperte `Ctrl+Shift+U` seguido de `2014`.
- `rm`: serve para remover arquivos e diretórios.
- `rm -f * .extensao`: serve para remover todos os arquivos com aquela determinada extensão.
- `rmdir`:  só remove diretórios vazios. É semelhante ao “rm -rf”.
- `df`: serve para verificar o espaço disponível em disco ou partições etc.
- É possível executar vários comandos de uma vez, separando eles por “;”.
- `locate nomeDoArquivo`: serve para realizar buscas pelo nome do arquivo. Use o which para localizar programas.
- `find`: serve para buscas também. Dá pra encontrar arquivos com extensões específicas.
- `apropos`: ajuda a entrar outros comandos, digitando apenas algumas letras que façam parte do comando.
- ` lspci`: serve para fazer uma listagem resumida do hardware.
- `lsusb`: listagem de periféricos conectados em usb.
- `su`: para logar como root no terminal, basta digitar isso e a senha. Aí o símbolo muda disto: $, para isto: #. Tal acesso bloqueia o acesso ao ambiente gráfico.
- `sux`: para resolver o problema citado acima, basta usar esse comando.
- `read`: lê uma resposta e a armazena em uma variável.
- `-c`: opção para o wget, que faz com que ele continue o download caso interrompido. “Ctrl + c” para continuar o download de onde parou.
- `|` :  faz com que  a saída de um comando seja enviada para outro ao invés de ser mostrada na tela.
- `grep`: permite filtrar a saída de um determinado comando de modo que ao invés de um monte de linhas, você veja apenas a informação  que está procurando.
- `- help`: para solicitar informações sobre um determinado comando.
- `mount`: os sitema nunca acessa os dados dentro da partição diretamente. Ao invés disso, ele permite que você “monte” a partição em uma determinada pasta e acesse os arquivos dentro da partição através dela. # mount /dispositivo/blah /pastaAcessar/blah.
- `lsof`: lista os programas que estão acessando uma pasta e impedindo a desmontagem. Sabe quando vc quer ejetar o pendrive e o pc fala “device is busy”? Então.
- `kill -9`: para fechar um programa na marra. Ou o comando fuser -k, que tenta finalizar à força todos os programas que estiverem acessando a pasta.
- `man` comando: dá uma manual. Explica como usar um determinado comando.
- `reboot`: reinicia a máquina.
- `cat local/arquivo`: mostra o conteúdo de um arquivo.
- `sudo apt remove <nome do programa>` Para desinstalar programas.
- `chown -r application:application tmp bin` *NÃO SEI O QUE FAZ*

Daily Heroes:
- `ps aux | grep {process}` - Encontre aquele processo furtivo
- `lsof -i :{port}` - Quem está monopolizando aquela porta?
- `df -h` - O clássico verificador de "estamos sem espaço"
- `netstat -tulpn` - Detetive de conexão de rede
- `kubectl get pods | grep -i error` - Localizador de problemas do K8s

Log Warriors:
- `tail -f /var/log/*` - Observador de log em tempo real
- `journalctl -fu service-name` - Perseguidor de log do SystemD
- `grep -r "error" .` - O caçador de erros
- `zcat access.log.gz | grep "500"` - Ninja de log compactado
- `less +F` - O melhor comando tail

Container Whisperers:
- `docker ps --format '{{.Names}} {{.Status}}'` - Verificação de status limpa
- `docker stats --no-stream`  - Verificação rápida de recursos
- `crictl logs {container}` - Histórias brutas de contêineres
- `docker exec -it` - O backdoor do contêiner
- `podman top` - Espiada de processos dentro de contêineres

System Detectives:
- `htop` - Contador de histórias de recursos do sistema
- `iostat -xz 1` - Poeta de desempenho de disco
- `free -h` - Solucionador de mistérios de memória
- `vmstat 1` - Sinais vitais do sistema
- `dmesg -T | tail` - Fofocas recentes do Kernel

Network Ninjas:
- `curl -v` - Depurador de conversação HTTP
- `dig +short` - Pesquisa rápida de DNS
- `ss -tunlp` - Estatísticas de socket simplificadas
- `iptables -L` - Leitor de regras de firewall
- `traceroute` - Localizador de caminho

File Jugglers:
- `find . -name "*.yaml"` -type f - Caçador de YAML
- `rsync -avz` - Melhor copiador de arquivos
- `tar -xvf` - O descompactador (sim, todos nós pesquisamos isso no Google)
- `ln -s` - Assistente de Symlink
- `chmod +x` - Torna executável

Performance Profilers:
- `strace -p {pid}` - Espião de chamada de sistema
- `tcpdump -i any` - Farejador de pacotes de rede
- `sar -n DEV 1` - Monitoramento de estatísticas de rede
- `uptime` - Média de carga em resumo
- `top -c` - Visualizador de processos clássico

Git Essentials:
- `git log --oneline` - Histórico simplificado
- `git reset --hard HEAD^` - Apagador de "oops"
- `git stash` - O ocultador de trabalho
- `git diff --cached` - O que é preparado?
- `git blame` - O resolvedor "quem fez isso?"

Correções rápidas:
- `sudo !!` - Execute o último comando com sudo
- `ctrl+r` - Pesquisa de histórico de comandos
- `history | grep` - Máquina do tempo de comando
- `alias` - Criador de atalhos de comando
- `watch` - Repetidor de comandos
------

-  No linux, o root é o único que tem acesso a todos os arquivos e configurações do sistema.
-  Com o Shell-Script você pode explicar ao computador o que você quer que seja feito através de comandos de terminal.
- Pendrives conectados são reconhecidos como HDs a mais.
- O motivo para ser necessário ejetar um pendrive (por exemplo) antes de desconectá-lo é que as alterações não são necessariamente salvas imediatamente por causa do cache de disco. Se isso não for feito, pode ser que as últimas alterações sejam perdidas. Atente-se a isso principalmente quando vc grava arquivos nele.
- HAL (Hardware Abstraction Layer): serviço de sistema que monitora as informações disponibilizadas pelo kernel. É integrado a componentes do GNOME e KDE. Acessa dados em dispositivos removíveis; fornece as informações sobre o hardware da máquina.
- Gparted: espécie de particionador default do Linux, ou seja, vem pré-instalado. Pode ser usado para redimensionar a partição do Windows e liberar espaço para a criação das partições Linux.
- X: servidor gráfico que provê a infraestrutura, uma camada independente no sistema. Digite “X :2” no terminal e veja a base da interface gráfica. Depois digite “startx”.
-  KDE e GNOME: são gerenciadores de janelas da categoria desktop environment.
-  Se o sistema linux trava, aperte Ctrl+Alt+Esc, para ativar o xkill e encerrar o aplicativo defeituoso.

# Arch Linux 📘💠
> A seguir, conhecimentos básicos necessários para a primeira aventura com Arch Linux!!!!!

- O que é o **kernel** e como ele interage com o sistema.
- O papel do **init system** (Arch usa `systemd`).
- O que é um **bootloader** (ex: GRUB, systemd-boot).
- A diferença entre **/etc**, **/var**, **/usr**, etc.
- `pacman` (gerenciador de pacotes do Arch) – e entender o que são dependências, repositórios, etc.
- `systemctl` e `journalctl` (comandos do `systemd`).
- `ip`, `ping`, `dhcpcd`, `iwctl` ou `nmcli` para configurar rede (especialmente em modo texto).
- `mkfs`, `mount`, `chroot`, `lsblk`, `fdisk` ou `parted` – pra lidar com partições e montagem de discos.
- Leitura e edição de arquivos de configuração.
- Editores de texto no terminal (`nano`, `vim`, `nvim`, `micro`, etc.).
- Modificar arquivos como `/etc/fstab`, `/etc/locale.gen`, `/etc/hostname`, `/etc/hosts`, etc.
- Particionar e formatar o disco.
- Montar as partições na ordem correta.
- Instalar o sistema base (`pacstrap`).
- Configurar o `fstab`, `locale`, `timezone`, `hostname`, rede, bootloader.
- Criar usuário, senha e instalar os pacotes essenciais.
- Saber consultar e interpretar a documentação: Arch Wiki
- Pratique buscar e seguir os tutoriais da Arch Wiki.
- Entenda o que está fazendo antes de copiar comandos.
- Falhas de boot.
- Problemas de rede.
- Quebras de pacotes.
- Configurações manuais (X11, Wayland, drivers gráficos, etc).


<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=ffff00&height=120&section=footer"/>