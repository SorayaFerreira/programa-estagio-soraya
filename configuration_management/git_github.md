# Anotações sobre Git e GitHub 😼🐙

Git é uma técnica de versionamento de código criada por Linus torvalds. Ela permite que os desenvolvedores acompanhem as mudanças no código fonte ao longo do tempo, mantendo um histórico de todas as mudanças, versões criadas, ramificações, entre outros dados. É necessário, para utilizar localmente, instalar e configurar o Git Bach na máquina.
Já o Github é uma plataforma hospedada em nuvem que permite a manipulação com Git de maneira remota e compartilhada.

Para criar uma conta no github é necessário clicar em “Sign up”, inserir e-mail, criar nome de usuário e senha. Então, após validação do e-mail é preciso realizar o login e preencher os formulários que surgem informando seus interesses com a plataforma. Em seguida, a fim de garantir uma boa experiência no sistema, é importante personalizar a interface e as preferências nas configurações.

Durante a utilização, é possível deparar-se com o Markdown, que é uma linguagem simples de marcação capaz de converter um texto em HTML válido. É uma forma mais simples de se escrever um HTML, e um arquivo com tal linguagem tem extensão `.md`.

> Consulte a página disponível na [âncora](https://docs.github.com/pt/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) para saber mais sobre Markdown.

GIST: são repositórios Git. São muito parecidos com o Github, porém ele permitem o compartilhamento de arquivos e trechos de código com outros desenvolvedores, mesmo que o usuário não seja o autor original do código. É possível criar um GIST por meio do próprio Github.

![Git e GitHub](https://arquivo.devmedia.com.br/marketing/img/guia-git-e-github-37585.png)

## Principais Comandos
A seguir, anotações sobre certos comandos iniciais para utilizar no terminal do Git Bash.
- `git commit -am ""` para fazer add e commit em apenas uma linha de comando. O “add” coloca a alteração dentro do contêiner antes de adicionar à master. 
- `git log` mostra todos os commits realizados, detalhadamente.
- `git log --oneline` mostra todos os commits com apenas os nós e a mensagem.
- `git diff` serve para visualizar todas as mudanças, o que foi removido e o que foi acrescentado.
- `git reset --hard endereçoDeMemória` serve para remover o último commit e voltar à versão anterior, indicando o hash dela.
- `git status`  mostra o que tem no contêiner ou indica o comando para descartar mudanças e voltar à versão anterior.
- `git log --graph` mostra os nós.
- `git checkout master` retorna à última versão do projeto.
- `git log - -oneline  --graph` mostra tudo organizado e resumido.
- `git log --oneline  --graph  --all` mostra informações de todos os ramos.
- `q` para quando o terminal trava o cursor.
- `git merge nomeDoRamo` serve para fundir um ramo em outro.
- `git --abort` serve para abortar processo de fusão dos ramos.
- `git remote` verifica a existência de um repositório remoto.
- `git remote -v` para detalhes sobre o repositório remoto.
- `git clone linkDoRepositório` quando é criado um repositório, marcando a opção de adicionar README, e deseja-se clonar no windows, após selecionar git Bash here em alguma pasta.
- `ls -a` serve para visualizar pastas ocultas.
- `touch pastaCaminho/nomeArquivo.extensao` cria um arquivo dentro de uma pasta.
- `git push` para enviar alterações (commit) feitas no repositório de forma local para o repositório remoto, no GitHub.
- Para criar uma nova pasta no git hub, é preciso digitar o nome da pasta e uma barra “/”, então eve-se escrever o nome do arquivo que queira colocar.
- `git pull` serve para atualizar as mudanças feitas dentro do Git Hub no repositório local (a pasta no computador). Mostra possíveis conflitos entre branchs para consertar depois. Basta clicar na âncora do menu para escolher a versão, isso ocorre no vscode.
- `git fetch` serve para fazer download das alterações feitas no repositório remoto (alterações já feitas em outro repositório local, mas que não foram atualizadas neste outro repositório local aberto).
- `git config --global core.editor code` para configurar o VSCode como IDE padrão.
- `Fork`: é quando um projeto é clonado para o github, para fazer qualquer tipo de alteração no projeto clonado, sem alterar o projeto original.
- `Pull Request`: é uma forma de contribuir com os projetos da comunidade. Nele, é possível sugerir alguma alteração no projeto original, para o dono do projeto aprovar ou não.
- `git checkout hashDoCommit` retorna o código para a versão escolhida.
- `git branch` mostra o hash anterior da master e para onde foi apontado. Mostra qual o ramo atual.
- `git checkout -b nomeDoRamo` serve para criar uma nova ramificação do projeto (branch), a partir da branch atual, e já mudar para ela. A master é o ramo criado automaticamente pelo GIT. O novo ramo herda todos os commits de master.
- Para commitar na minha branch: faz o git add ` normal, depois o commit normal também, em seguida roda o git push origin soraya. 
- `git pull origin nomeDaBranch` para atualizar as alterações feitas na minha própria branch para o repositório local.
- `git branch nomeDaBranch`: apenas cria uma nova branch. É aconselhável criar sempre a partir da main/master.
- `git branch -d nomeDaBranch`: serve para deletar uma determinada branch.
- `git checkout nomeDaBranch`: serve para mudar de branch. Obs.: leva junto os arquivos em commit para o novo branch.
- O `git stash` salvará suas mudanças locais em uma pilha de alterações temporárias. Após o pull, pode-se trazer essas mudanças de volta com git stash pop. Commit: Se as mudanças estão prontas para serem salvas permanentemente, é possívle comitar as alterações e, em seguida, puxar as mudanças remotas:
```bash
git add .
git commit -m "Salvando mudanças locais"
git pull
```
- Forçar o pull (sobrescrever mudanças locais): Se não precisa das alterações locais e deseja sobrescrevê-las com as mudanças remotas, pode-se forçar o pull com a flag --hard:  O comando git reset --hard HEAD irá descartar todas as alterações locais não comitadas.
```bash
git reset --hard HEAD
git pull
```
- `rm arquivo.txt` remove um arquivo apenas no meu sistema de arquivos
- `git rm --cached arquivo.txt` remove um arquivo apenas na representação do sistema de arquivos do git
- `git rm arquivo.txt` remove um arquivo tanto no meu sistema de arquivos quanto na representação do sistema de arquivos do git
- `git rebase origin/feat/authn` serve para reaplicar commits, isto é, pegar commits de um branch e aplicá-los em outro branch como se fossem novos commits, evitando commits de merge. Além disso, ele serve para sincronizar um brach de trabalho seu com a base atual de um branch alvo.
- **Resolvendo conflitos**: 
> Eu gravei um vídeozinho resolvendo um conflito no git manualmente.

> ![vídeo](./Solve_Conlict_GIT.mp4)

> Mas o processo é basicamente rodar `git pull origin [branch de origem da PR]` na branch que você tá tentando realizar a PR com conflito.
> Nesse caso eu estava na `feat/centobank-transacao`, então foi `git pull origin dev`. Por que a dev é a "branch de origem" da minha branch. 1. Daí quando você faz isso o git exibe no terminal o processo de tentar realizar o merge automático das alterações. Mas em alguns casos ele não vai conseguir, e vai reclamar com "CONFLICT". Então você vai passando por cada um desses arquivos, onde você vai encontrar trechos de código marcados com [1] a versão que você estava trabalhando (current) e [2] a versão que está vindo da atualização que você está tentando fazer (incoming). O seu papel é decidir qual das duas vai manter. No VSCode tem uma extensão muito boa pra dar uma força nessas coisas, que é o [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) mas é legal que você saiba fazer manualmente também. Finalizado tudo, é só dar o `git add` de sempre e um `git commit` sem `-m` mesmo, que o próprio git já vai preencher a mensagem com a mensagem padrão de merge ("Merge branch 'dev' github.com:cento-software/bufunfa into ..."). Daí quando você faz isso o git exibe no terminal o processo de tentar realizar o merge automático das alterações. Mas em alguns casos ele não vai conseguir, e vai reclamar com "CONFLICT". A chave é acompanhar cada um dos CONFLICTs direitinho pra não deixar nada passar. O ideal é sempre testar depois de um merge desse pra garantir que você não deixou nenhum conflito pra resolver. Quando você já sabe o que precisa manter e o que não, fica bem mais fácil. Nesse caso aí, eu sabia que a maioria das novidades era por causa do merge da parte de authn na dev. Então foi só aceitar as alterações nos repositories e nas páginas/endpoints de autenticação e reorganizar os scripts do banco.