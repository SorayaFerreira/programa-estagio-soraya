# Sistemas de Autenticação
Autorização, às vezes identificada como `authz`, tem alta relação com a [Autorização](#sistemas-de-autorização), podendo ser confundida com ela. Entretanto, elas têm conceitos diferentes. Sumariamente, authz é responsável por _permissões_, enquanto que authn é responsável por _identidades_.

Autenticação, também chamada de `authn`, significa confirmar a identidade do cliente (pessoa ou do sistema externo) que está fazendo a requisição, com o intuito de não expor dados a alguém não autorizado. Tal confirmação pode ser feita com um ou mais parâmetros dentro de três opções diferentes: 
- algo que o cliente é, p. ex., a íris, a biometria, a voz;
- algo que o cliente possui, p. ex., um dispositivo que recebe um token; ou
- algo que o cliente sabe, p. ex., username e senha.

O Oauth 2.0 é um protocolo de autenticação amplamente utilizado. Basicamente, o usuário é direcionado para um serviço terceirizado para ser autenticado, e depois ele é redirecionado novamente para a aplicação. Então é disponibilizado um token para o usuário, o que permite a requisição de recursos em nome do usuário.

# Sistemas de Autorização

A Autorização determina o que um cliente autenticado pode acessar e executar. Um usuário de um banco online, por exemplo, após confirmar sua identidade, pode visualizar seu extrato, seu saldo entre outros dados, porém ele não tem permissão para visualizar os dados de outros usuários.

Os padrões de autorização mais conhecidos são RBAC, ReBAC e ABAC, a seguir, uma breve explicação de cada:
- RBAC (Role Based Access Control): a permissão está atrelada à função do cliente. A cada usuário é atribuída uma função que possui um conjunto de permissões. Desvantagens: pouco flexível, não comporta um número de funções muito grande. É muito utulizado por ser simples de entender e implementar.
- ReBAC (Relationship Based Access Control): é uma solução um pouco mais complexa. As permissões são atribuídas de acordo com as relações entre o usuário e `objeto`, ou entre `objeto` e `objeto`; desse modo, é melhor para lidar com estruturas hierárquicas. Para implementar, é preciso criar papéis para recursos específicos, dessa forma, o papel e sua função são relevantes apenas no contexto daquele recurso específico.

<div align="center"><img alt="Imagem de vasos de planta organizados" src="https://media.graphassets.com/2Rg1tPAQQMucRgp17e9W"></div>

- ABAC (Attribute Based Access Control): distribui permissões de acordo com avaliação de _atributos_ dos usuários, do ambiente e dos recursos. Isso possibilita maior dinâmica e flexibilidade. Desvantagens: difícil de implementar e manter, impacto no desempenho do sistema por conta da avaliação de políticas de atributos.




