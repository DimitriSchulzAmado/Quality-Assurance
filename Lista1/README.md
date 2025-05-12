# Lista 1

![Cypress](https://img.shields.io/badge/Cypress%20-14.3.2-blue)
![Cypress Mochawesome Reporter](https://img.shields.io/badge/Cypress_Mochawesome_Reporter%20-3.8.2-green)

Teste de UI com Cypress

## Como usar

Esta seção fornece instruções abrangentes para configurar e executar as suites de teste.

### Pré-requisitos

- Cypress

- Cypress Mochawesome Report

### Rodando a Aplicação

#### Suite de testes com Eletron

`npx cypress open`

#### Configuração Mochawesome:

1. Instalação do Mochawesome:

   ```bash
       npm i cypress-mochawesome-reporter
   ```

2. Uso:

   ```bash
   npx cypress run --reporter mochawesome
   ```
