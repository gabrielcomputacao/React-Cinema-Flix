# Pensamentos

Dividi a aplicação em modulos que poderiam ser aproveitados, uando conceitos da arquitetura de components no front end, e para a criação usando conceitos de
componentes atomicos, tentei isolar todas as funções e componentes para ter apenas uma responsabilidade pensando no principio S do SOLID, criei hooks que sao abertos
para extensões e fechados para mudança usando o principio O do SOLID, com a context API tentei implementar a arquitetura flux para gerenciar estados com um fluxo uniderecional
e coloquei rotas para as páginas para ser mais escalável.

## Bibliotecas Instaladas

### Context API

Para implementar a arquitetura flux , foi escolhido a api nativa do react context Api, porque o sistema não precisava escalar tanto e com a api nativa foi de fácil implementação.

### React router Dom

Para fazer gerenciamento de rotas da aplicação

### Mudança page principal

No Header tem um botão que leva a página proposta para criação

## comandos

- Executar a API fake (`porta 3000`)

```bash
npm run fake:api
```

- Subir a aplicação web em `http://localhost:5173`

```bash
npm run dev
```

- Executar os testes sem `watch mode`

```bash
npm run test
```

- Executar os testes no `watch mode`

```bash
npm run test:dev
```

- Crie um [git bundle](https://git-scm.com/docs/git-bundle) com o seu trabalho

```bash
git bundle create nome-sobrenome.bundle HEAD main
```

- Relatório de cobertura de testes ([Istanbul](https://istanbul.js.org/))

```bash
  npm run coverage
```
