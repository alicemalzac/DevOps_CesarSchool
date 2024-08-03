# Cypress Testing with GitHub Actions

Este repositório é dedicado ao aprendizado sobre como configurar e utilizar o GitHub Actions para automatizar testes com Cypress. Cypress é uma ferramenta poderosa para testes end-to-end, e o GitHub Actions fornece uma maneira fácil de integrar esses testes em seu fluxo de trabalho de CI/CD.

## O que são GitHub Actions?

GitHub Actions é uma plataforma de integração contínua e entrega contínua (CI/CD) que permite automatizar processos de desenvolvimento, como a construção, teste e implantação de aplicativos, diretamente no GitHub.

## Objetivos do Repositório

- **Entender o básico de GitHub Actions**: O que são, como funcionam e como podem ser utilizados.
- **Criar Workflows**: Configurar e escrever arquivos YAML para definir os workflows.
- **Explorar Ações Personalizadas**: Criar e usar ações personalizadas.
- **Automatizar Tarefas Comuns**: Automatizar tarefas como testes automatizados, linting, e implantação contínua.
- Configurar GitHub Actions para executar testes Cypress automaticamente.
- Entender os benefícios da automação de testes em pipelines CI/CD.

## Requisitos

- Node.js (recomendado v16)
- npm ou yarn
- Uma conta no GitHub

## Configuração do Projeto

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/cypress-github-actions.git
    cd cypress-github-actions
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Adicione Cypress ao projeto:
    ```bash
    npm install cypress --save-dev
    ```

4. Configure Cypress (opcional):
    ```bash
    npx cypress open
    ```

## Passos do GitHub Actions

1. **Clone o repositório**:
    ```sh
    git clone https://github.com/usuario/github-actions-learning.git
    cd github-actions-learning
    ```

2. **Crie um novo workflow**:
    - Navegue até `.github/workflows/`.
    - Crie um novo arquivo YAML (ex: `ci.yml`).
    - Defina o workflow conforme necessário.

3. **Commite e push as mudanças**:
    ```sh
    git add .github/workflows/ci.yml
    git commit -m "Add CI workflow"
    git push origin main
    ```

4. **Verifique o workflow**:
    - Vá até a aba "Actions" no repositório GitHub.
    - Verifique se o workflow foi executado com sucesso.

## Estrutura do Projeto

```plaintext
cypress-github-actions/
├── .github/
│   └── workflows/
│       └── cypress-tests.yml
├── cypress/
│   ├── fixtures/
│   ├── integration/
│   ├── plugins/
│   └── support/
├── node_modules/
├── .gitignore
├── cypress.json
├── package.json
└── README.md


