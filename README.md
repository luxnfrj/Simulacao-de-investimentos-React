# Simulação de Investimentos

Este projeto simula o crescimento de um investimento ao longo do tempo, levando em consideração um investimento inicial, aportes anuais e uma taxa de retorno anual. Ele calcula o valor acumulado de um investimento, os juros gerados e os aportes feitos ao longo dos anos.

## Funcionalidade

A aplicação permite calcular os seguintes dados de um investimento:
- **Valor de investimento acumulado** ao longo dos anos.
- **Juros ganhos** a cada ano e **juros totais** acumulados.
- **Capital investido** no decorrer do período.

A simulação é feita com base nos seguintes parâmetros fornecidos pelo usuário:
- **Investimento inicial**: O valor inicial do investimento.
- **Investimento anual**: O valor que será investido a cada ano.
- **Taxa de retorno anual**: A taxa de retorno do investimento (em porcentagem).
- **Duração do investimento**: O número de anos que o investimento será realizado.

## Ferramentas Utilizadas

- **JavaScript**: Linguagem de programação principal utilizada para implementar a lógica de cálculo e manipulação de dados.
- **React**: Biblioteca JavaScript para construção da interface de usuário. Utilizada para renderizar os resultados de forma dinâmica e interativa.
- **Intl.NumberFormat**: API nativa do JavaScript para formatar valores numéricos como moeda.
- **Node.js**: Ambiente de execução do JavaScript utilizado para rodar a aplicação localmente durante o desenvolvimento.

## Estrutura do Projeto

O projeto consiste em dois arquivos principais:

1. **`investment.js`**: Contém as funções responsáveis pelos cálculos do investimento e formatação de números.
2. **`Results.jsx`**: Componente React responsável por exibir os resultados da simulação em uma tabela.

### Funções principais

#### `calculateInvestmentResults`

Esta função realiza os cálculos de investimento ano a ano e retorna um array com os seguintes dados de cada ano:

- **year**: O número do ano (iniciado em 1).
- **interest**: O valor dos juros ganhos naquele ano.
- **valueEndOfYear**: O valor total do investimento no final daquele ano (capital investido + juros).
- **annualInvestment**: O valor do investimento realizado naquele ano (sempre o mesmo para cada ano).

**Exemplo de uso**:
```javascript
const results = calculateInvestmentResults({
  initialInvestment: 1000,
  annualInvestment: 500,
  expectedReturn: 5, // 5% ao ano
  duration: 5,       // 5 anos de investimento
});
```

#### `formatter`

Um objeto criado utilizando a API `Intl.NumberFormat` para formatar números como moeda, no estilo dos EUA (USD). Ele pode ser usado para exibir valores de forma amigável, como por exemplo:

```javascript
formatter.format(1000); // "$1,000"
```

## Como Usar

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em seu ambiente de desenvolvimento.

### Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/simulador-investimentos.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd simulador-investimentos
   ```

3. Instale as dependências do projeto:
   ```bash
   npm install
   ```

4. Inicie a aplicação:
   ```bash
   npm start
   ```

Isso irá iniciar o servidor de desenvolvimento e você poderá acessar a aplicação em `http://localhost:3000`.

### Exemplo de entrada e saída

#### Entrada:
- **Investimento inicial**: 1000
- **Investimento anual**: 500
- **Taxa de retorno anual**: 5%
- **Duração**: 5 anos

#### Saída (Tabela):

| Ano | Valor Investido | Juros (Ano) | Juros Totais | Capital Investido |
|-----|-----------------|-------------|--------------|-------------------|
| 1   | $1,550          | $50         | $50          | $1,500            |
| 2   | $2,127.50       | $77.50      | $127.50      | $2,000            |
| 3   | $2,733.88       | $106.38     | $233.88      | $2,500            |
| 4   | $3,369.57       | $136.69     | $370.57      | $3,000            |
| 5   | $4,047.05       | $168.48     | $539.05      | $3,500            |

## Contribuição

Se você deseja contribuir para o projeto, sinta-se à vontade para abrir uma **issue** ou enviar um **pull request** com suas melhorias ou correções.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
```

