# API Tests

![Node.js](https://img.shields.io/badge/Node.js-20.x-brightgreen)
![Newman](https://img.shields.io/badge/Newman-6.x-blue)
![HTML Extra](https://img.shields.io/badge/html--extra-1.22.7-orange)

Este projeto contém testes para a API `https://jsonplaceholder.typicode.com/posts/`
especificamente na parte de 'posts' para a disciplina de Qualidade de Software.

## Como Executar o Projeto

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/DimitriSchulzAmado/Quality-Assurance.git
   cd Prova2/API-Tests
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

   Em seguida, instale o `newman` e o `newman-reporter-htmlextra` globalmente (ou como dependências de desenvolvimento):

   Instalar newman:

   ```bash
   npm i newman
   ```

   Instalar html-extra reporter:

   ```bash
   npm i newman-reporter-htmlextra
   ```

3. **Execute os testes e gere o relatório:**
   ```bash
   newman run Prova.postman_collection.json -r htmlextra
   ```

## Como Obter Relatórios de Teste

- Após a execução dos testes, um relatório será gerado automaticamente na pasta `newman` (ou conforme configuração do framework de testes utilizado).
- Para visualizar o relatório em HTML:
  ```bash
  open newman/<nome_do_arquivo>.html
  ```
  ou abra o arquivo `<nome_do_arquivo>.html` no navegador.

## Tecnologias Utilizadas

- Node.js
- Newman
- newman-reporter-htmlextra

## Contato

Dúvidas ou sugestões? Entre em contato pelo e-mail: dimitri.schulz@ges.inatel.br
