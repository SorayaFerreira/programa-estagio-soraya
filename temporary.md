# Tópicos a Adicionar ⏰
 > Utilize este espaço para guardar tópicos e links de referência para serem incluídos no repositório de conhecimento futuramente.

 > Use `----` para separar os tópicos entre si. A seguir, mensagem de commit padrão. 

```bash
git commit -m "(update): adiciona sementes ao temporary.md"
```

----
Tópico exemplo

[link1](link)

[link2](link)

----
[Ethereum](https://ethereum.org/en/developers/docs/)

Ler paper do Bitcoin

----
Funções assíncronas | Estudo e aplicação das estruturas async e await.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#description

----
BFF: Backend For Frontends -> https://samnewman.io/patterns/architectural/bff/

----
https://kysely.dev/  KYSELY: um query builder com type-safe SQL para TypeScript.
https://orm.drizzle.team/ DRIZZLE: um ORM muito utilizado para dev web.

----
Types
API or UI relevant changes
feat Commits, that add or remove a new feature to the API or UI
fix Commits, that fix a API or UI bug of a preceded feat commit
refactor Commits, that rewrite/restructure your code, however do not change any API or UI behaviour
perf Commits are special refactor commits, that improve performance
style Commits, that do not affect the meaning (white-space, formatting, missing semi-colons, etc)
test Commits, that add missing tests or correcting existing tests
docs Commits, that affect documentation only
build Commits, that affect build components like build tool, ci pipeline, dependencies, project version, ...
ops Commits, that affect operational components like infrastructure, deployment, backup, recovery, ...
chore Miscellaneous commits e.g. modifying .gitignore

---
https://www.atlassian.com/git/tutorials/cherry-pick git cherry-pick

-------
### Astro Actions
Mais simples do que endpoints normais: https://docs.astro.build/en/guides/actions/

As actions vêm com validação e chamadas type-safe com forms.

---
#### CI/CD
CD, ou continuous deploy, são as atividades que realizamos pra garantir a disponibilização continua do que a gente desenvolve (e testa/aprova)
Tem várias formas de fazer isso
Ansible e GitHub Actions são alguns dos nomes que são legais de você pesquisar sobre algum dia
Mas pra cá continuei na filosofia de seguir a linha mais simples
Tem um recurso do próprio Git, e que é implementado (e melhorado) pelas plataformas que utilizam ele, chamado Webhooks
Basicamente, você pode chamar um endpoint sempre que determinada operação acontece
Esse “chamado” vem com uma assinatura pra garantir que não é ninguém aleatório tentando utilizar
O GitHub suporta enviar praticamente tudo que acontece no repo. Desde os mais importantes, como push/merge em determinada branch, como até operações nas issues
Eu configurei um webhook no servidor onde está o deploy do compras pra escutar por essa chamada, fazer o git pull das alterações mais recentes e reiniciar o docker
Ele tá olhando pra branch dev por ora, mas depois que tivermos uma branch main mais consolidada, podemos trocar pra ela
É importante que quando chegarmos nesse ponto, a gente tenha mais mecanismos pra previnir deploys errados
Que é onde entramos no tal do CI, ou continuous integration. Que é garantir que nossas alterações se “integram” adequadamente ao restante do código
Lint, testes, verificação do padrão de commits 

----
9. Rastreabilidade
Definição: Os requisitos devem ser identificáveis e rastreáveis para garantir consistência e manutenção futura.
Perguntas de apoio: Se um requisito for alterado, é possível saber o impacto nas demais partes do sistema? Existe uma numeração ou código único para cada requisito?

---
- Como garantir que todos os usuários de um sistema web estão vendo o mesmo timer em seus browsers?
Pros clientes a ideia é a mesma. Você envia o fim do timer pra eles, e com javascript você cria algo como:

```
setInterval(() => {
  console.log(timerFim - Date.now())
}, 1000) // Atualiza a cada segundo
```

Pra sincronizar é simples. O tempo passa igual pra todos os clientes, então desde que o cliente tenha o final do timer, todo mundo vai ter um timer funcional e certo
Mesmo que a internet do indivíduo caia, desde que o tempo final do timer não tenha sido alterado e ele não ficou sabendo, o timer dele vai estar certo.
É importante que você exiba que ele está desconectado, e que o timer possa estar dessincronizado, para o caso da equipe ter alterado o final do timer ou pausado (entramos nessa parte depois).
Então resumindo:
- no servidor, assim que um timer for definido, você precisa armazenar a data e hora do fim do timer e passar isso para os usuários
- assim que o usuário recebe o tempo final do timer, ele pode fazer o cálculo da diferença desse tempo com o tempo atual, pra pegar quanto tempo falta pra ele acabar
- no servidor, se o timer for alterado, você precisa propagar a nova data fim do timer para os usuários.

Assim você já consegue um timer simples, com começo e fim. A partir desse cenário, você pode começar a pensar em outras funcionalidades e como aumentar a garantia de que todo mundo tá sincronizado
A primeira coisa que a gente precisaria seria implementar a funcionalidade de pause
Pra isso, basta você armazenar um novo valor, a data do pause. Enquanto ela estiver definida, todos os timers devem exibir a diferença entre tempoFim - tempoPause ao invés do tempoFim - tempoAtual.
Pra dar play de novo, você precisa setar tempoFim = tempoFim + (tempoFim - tempoPause) e tempoPause = null
Sobre a parte do usuário cair, isso é um problema que não envolve apenas o timer, envolve todo o restante da comunicação com o usuário. 
Nós podemos ter um endpoint WebSockets ou SSE que, enquanto o usuário autenticado como o Participante X esteja conectado a esse endpoint, ele é dado como vivo
Pra esse tipo de coisa é melhor usar WebSockets, porque o usuário pode retornar periodicamente uma mensagem de "tô vivo", pra que você garanta que a conexão tá de pé e a aplicação dele tá funcional




https://youtu.be/0t4_MfHgb_A?si=6G9HRXyqJyNvxYj7 