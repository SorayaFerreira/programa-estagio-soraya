# Protocolo HTTP 📄

**API**: Application Programming Interface. Têm fácil integração com os sistemas; seguem padrões de desenvolvimento; elas se comunicam com xml ou json, devido à simplicidade desses tipos de dados; requests e responses são feitas em HTTP 📄 tipos de requisições HTTP: get, post, delete, put, patch; uma API RESTful é algo ideal;

**ENDPOINT**:  é uma URL da API, que acessamos para obter uma resposta; ponto final, é o que fica na ponta da rede (roteadores, switch, celulares, tablets etc); Endpoint é um termo que se refere a cada rota de uma API. Através dele é possível solicitar criação, exclusão, atualização e recuperação de qualquer dado.

**BODY**: é o corpo da requisição que é enviado para o endpoint. Ele armazena os dados compilados  para criação ou atualização de algum serviço, usualmente no formato JSON ou XML.

**PARAMS**: são utilizados nas consultas ou atualizações de serviços

**REST**: é um conceito de arquitetura ligado à API e ao protocolo HTTP. Esse padrão tem 6 partes que precisam ser implementadas para tornar a API em RESTful uniformidade, desacoplação, stateless, cache, arquitetura de camadas, code on demand.

O Postman, o Bruno e o Ensonmia são programas que utilizamos para testar APIs suas ou de terceiros. Você insere um endpoint, para testar o backend e depois integra com o frontend. Ele serve para você não precisar do frontend para testar o backend.

**LOCALHOST**: é o endereço IP padrão da rede do computador local, isto é, o próprio computador em que um programa é executado. Dessa maneira, o computador funciona como um servidor virtual.

#### fetch API  
- Oferece uma interface para busca de recursos em qualquer URL de API. 
- Usa os objetos `request` e `response`. 
- Recebe como argumento o caminho para o recurso que se deseja buscar (`resource`) e um argumento opcional com configurações da solicitação.
- É uma função assíncrona, ou seja, retorna uma `promisse` quando a `response` está pronta.
- Serve como alternativa ao `XMLHttpRequest`.

