# Lista 1

![Cypress](https://img.shields.io/badge/Cypress%20-14.3.2-blue)
![Cypress Mochawesome Reporter](https://img.shields.io/badge/Cypress_Mochawesome_Reporter%20-3.8.2-green)

Teste de UI com Cypress

## Equipe / Responsabilidades:

Dimitri Schulz Amado / Suite Orientador  
Felipe Gabriel Ribeiro / Suite Alunos
Antonio Alexandre Barbosa da Silva / Suite Projetos
Wellington Henrique Dias de Souza / Suite Projetos

## Como usar

Esta seção fornece instruções abrangentes para configurar e executar as suites de teste.

### Pré-requisitos

- Cypress
- Cypress Mochawesome Report
- Node.js (versão recomendada: 14.x ou superior)
- npm (gerenciador de pacotes do Node.js)

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/DimitriSchulzAmado/Quality-Assurance/
   cd Lista1
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```

### Rodando a Aplicação

#### Suite de testes com Electron

```bash
npx cypress open
```

#### Executando os testes em modo headless

```bash
npx cypress run
```

#### Configuração Mochawesome:

O Mochawesome está sendo utilizado para gerar relatórios detalhados e interativos dos testes automatizados. Ele permite visualizar facilmente os resultados dos testes em formato HTML, facilitando a análise e o compartilhamento dos resultados com a equipe.

1. Instalação do Mochawesome:

   ```bash
   npm i cypress-mochawesome-reporter
   ```

2. Uso:

   ```bash
   npx cypress run --reporter mochawesome
   ```

3. Após a execução, o relatório será gerado na pasta `cypress/reports/mochawesome-report`. Para visualizar o relatório, abra o arquivo `mochawesome.html` em seu navegador.

### Dicas

- Certifique-se de que todas as dependências estejam instaladas antes de rodar os testes.
- Para personalizar o relatório do Mochawesome, consulte a [documentação oficial](https://github.com/adamgruber/mochawesome).
- Os relatórios podem ser compartilhados com a equipe para acompanhamento do progresso dos testes.

### Contato

Para dúvidas ou sugestões, entre em contato com os membros da equipe.
