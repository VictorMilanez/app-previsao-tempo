# 🔗 App de Previsão do Tempo

Um aplicativo simples que permite ao usuário buscar por informações meteorológicas de qualquer cidade do mundo. Ele consome dados da **WeatherAPI** e exibe informações como temperatura, condições climáticas, umidade, velocidade do vento e qualidade do ar.

---

## 🚀 Funcionalidades

- **Busca de cidades:** O usuário pode digitar o nome de uma cidade e buscar suas informações climáticas.
- **Atalhos:** Permite o uso da tecla **Enter** para realizar a busca.
- **Informações detalhadas:** Exibe dados como:
  - Temperatura atual.
  - Condições do tempo (e ícone ilustrativo).
  - Umidade.
  - Velocidade do vento.
  - Índice de qualidade do ar (com mensagem interpretativa).
- **Interatividade:** Alertas para entradas vazias ou cidades não encontradas.

---

## 🛠️ Tecnologias Utilizadas

- **HTML**
- **CSS**
- **JavaScript**
- **API:** [WeatherAPI](https://www.weatherapi.com/)

---

## 📋 Estrutura de Código

### Arquitetura

- **HTML:** Contém a estrutura da página.
- **CSS:** Define o layout e estilos do projeto.
- **JavaScript:** Responsável por consumir a API e manipular o DOM.
  - **Módulos:**
    - `services/city.js`: Realiza a busca de dados na API.
    - `services/data-screen.js`: Manipula o DOM para exibir os dados na interface.

### Fluxo Principal

1. O usuário insere o nome da cidade e clica no botão de busca ou pressiona **Enter**.
2. O código realiza a validação da entrada.
3. A função `searchForCityData` consome a WeatherAPI para buscar os dados climáticos.
4. Os dados recebidos são exibidos na interface pela função `displayDataOnScreen`.

## 💻 Demonstração

![Demonstração do App de Previsão do Tempo](./src/images/animation.gif)