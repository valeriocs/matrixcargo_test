# Teste Matrix Cargo full-stack

Mvp básico com front e backend para consumo da API do Github para listagem de repositórios filtrados pela linguagem informada pelo usuário.

- [Teste Matrix Cargo full-stack](#teste-matrix-cargo-full-stack)
  - [Front-end](#front-end)
    - [O que foi desenvolvido](#o-que-foi-desenvolvido)
    - [Como usar](#como-usar)
  - [Back-end](#back-end)
    - [O que foi desenvolvido](#o-que-foi-desenvolvido-1)
    - [Como usar](#como-usar-1)
    - [Testes unitários](#testes-unitários)
  - [TODO:](#todo)

## Front-end

Aplicação criada com Vue CLI utilizando VueJs e Vuetify já no padrão de plugin, arquitetura de patas seguindo as boas práticas da comunidade.

### O que foi desenvolvido

- Integração com minha API em NodeJs feita através do Axios
- Listagem com paginação e padrão de 15 itens por página de repositórios do github filtrados de acordo com a linguagem selecionada no select acima da tabela
- Modelagem de dados padrão do JS onde ficou a cargo do NodeJs realizar a conversão para os padrões exigidos pela API do Github
- Estilização Material Design com Vuetify

### Como usar

1. `cd client`
2. `npm install`
3. `npm run serve`

> Recomendado utilizar Node na versão v10.15.3 para evitar algum conflito com as dependências do Vue CLI, também foi testado na 12.2.0

## Back-end

Api restful que consome a api do github através do pacote Octokit/rest para a integração, configurado OAUTH com github para aumentar o limite de tráfego com a API

### O que foi desenvolvido

- NodeJS rodando com express para definição das rotas em restful
- Cors para permitir acesso da aplicação web ao endpoint desenvolvido para busca de depositório
- Models para simplificar entradas e saidas nas chamadas da API
- Repository Pattern

ENDPOINT (/github-repositories) apenas com método GET para listagem dos repositórios filtrados pela linguagem informada

A query de entrada foi modelada através da classe [GitHubSearchQuery](./server/models/utils/github-repo-search-query.js), o retorno da api através da classe [GitHubResponseModel](./server/models/github-repositories-response-model.js) e o modelo de objeto do repositório do github através da classe [GitHubRepoModel](./server/models/github-repositores-model.js), todas elas foram desenvolvidas afim de tornar mais confiavel a troca de informações entre meu front e back end e trazer ao front-end apenas as informações relevantes para a listagem, sendo que o padrão da Api do github traz por padrão muitas informações que não seriam necessárias para apresentação da listagem.

### Como usar

1. `cd server`
2. `npm install`
3. `npm start`

Aplicação configurada para rodar na porta 3000.

### Testes unitários

1. `cd server`
2. `npm test`

## TODO:

- [x] Interface web
- [x] Api em NodeJs
- [x] Repository Pattern
- [x] Definição das models para consumo da API Github
- [x] Configuração de MongoDB
- [x] Coneção ao DB com Mongoose
- [ ] Persistencia de cache no MongoDB
- [x] Testes unitários
