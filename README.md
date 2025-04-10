## 🚀 DNC React Project
Este é um projeto desenvolvido em React que implementa funcionalidades como troca de idioma, formulário de contato, listagem de projetos com favoritos, e muito mais. O objetivo é criar uma aplicação interativa e responsiva com foco em boas práticas e organização de código.

## 🌍 Acesso ao Projeto

🔗 [Clique aqui para acessar](https://dnc-react-project.vercel.app/)

## Descrição do Projeto
- Este projeto é um site interativo que permite aos usuários:
- Navegar entre páginas.
- Trocar o idioma entre português e inglês.
- Visualizar uma lista de projetos e marcar favoritos.
- Preencher e enviar um formulário de contato.
- Experienciar uma interface responsiva e amigável.

## 📌 Funcionalidades
1. Troca de Idioma:<br/>
  Os usuários podem alternar entre os idiomas português e inglês.
  O idioma selecionado é salvo no `localStorage`.

2. Formulário de Contato:
Validação de campos (nome, e-mail e mensagem).
Simulação de envio com feedback visual.

3. Listagem de Projetos:
Exibição de projetos com título, subtítulo e imagem.
Possibilidade de marcar/desmarcar projetos como favoritos (salvo no `sessionStorage`).

4. Carregamento Dinâmico:
Dados de texto e projetos são carregados de uma API externa.

5. Responsividade:
Layout adaptado para dispositivos móveis e desktops.

## 🛠️ Tecnologias Utilizadas

* React: Biblioteca principal para construção da interface.
* React Router: Gerenciamento de rotas.
* CSS: Estilização dos componentes.
* Fetch API: Consumo de dados da API.
* LocalStorage e SessionStorage: Persistência de dados no navegador.

## 📂 Estrutura do Projeto

```plaintext
src/
├── assets/               # Imagens e ícones
├── components/           # Componentes reutilizáveis
│   ├── Button/           # Botão estilizado
│   ├── ContactForm/      # Formulário de contato
│   ├── Footer/           # Rodapé
│   ├── Header/           # Cabeçalho
│   ├── Hero/             # Seção principal
│   ├── LoadingSpinner/   # Indicador de carregamento
│   ├── ProjectsList/     # Listagem de projetos
├── contexts/             # Contexto global (AppContext)
├── services/             # Serviços para consumo de API
├── styles/               # Estilos globais
├── utils/                # Utilitários
├── App.jsx               # Componente principal
├── index.jsx             # Ponto de entrada

```

## 🌐 Detalhes dos Componentes
1. Header
* Exibe o logotipo, menu de navegação e botões para troca de idioma.
* Fecha o menu ao selecionar um idioma.
2. Footer
* Contém links para redes sociais, informações de contato e botões para troca de idioma.
3. Hero
* Seção principal com título, subtítulo e botão de chamada para ação.
4. ContactForm
* Formulário com validação de campos.
* Simulação de envio com feedback visual.
5. ProjectsList
* Lista de projetos carregados da API.
* Permite marcar/desmarcar projetos como favoritos.
6. LoadingSpinner
* Exibe um indicador de carregamento enquanto os dados são carregados.

## 🧩 API
Os dados do projeto são consumidos de uma API externa hospedada no Vercel.

**Endpoints**
* `GET /files/webtext`: Retorna os textos localizados para o site.
* `GET /files/projects`: Retorna a lista de projetos.

🔹 Projeto criado para aprendizado e prática! 🚀 Sinta-se à vontade para contribuir ou sugerir melhorias. 😊

## 📸 Screenshots

<p align="center">
  <img src="https://github.com/user-attachments/assets/5c0deaf7-26e6-4262-882e-93f50dae9791" alt="Screenshot do projeto">
</p>