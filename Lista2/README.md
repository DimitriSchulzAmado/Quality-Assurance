# Lista 2
![Node.js](https://img.shields.io/badge/Node.js-20.x-brightgreen)
![Newman](https://img.shields.io/badge/Newman-6.x-blue)
![HTML Extra](https://img.shields.io/badge/html--extra-1.22.7-orange)

Teste de API com Postman

## Equipe / Responsabilidades:

Dimitri Schulz Amado / Suite Orientador

Felipe Gabriel Ribeiro / Suite Alunos

Antonio Alexandre Barbosa da Silva / Suite Projetos

Wellington Henrique Dias de Souza / Suite Projetos

## Pré-requisitos

- Postman
- Node.js (versão recomendada: 14.x ou superior)
- npm (gerenciador de pacotes do Node.js)

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/DimitriSchulzAmado/Quality-Assurance/
   cd Lista1
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```

## Gerar Relatórios

instale o `newman` e o `newman-reporter-htmlextra` globalmente (ou como dependências de desenvolvimento):

1. Newman:

   ```bash
   npm i newman
   ```

2. html-extra reporter:

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

Para dúvidas ou sugestões, entre em contato com os membros da equipe.
