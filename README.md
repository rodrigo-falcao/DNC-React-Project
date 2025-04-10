## 🚀 DNC React Project
Este é um projeto desenvolvido em React que implementa funcionalidades como troca de idioma, formulário de contato, listagem de projetos com favoritos, e muito mais. O objetivo é criar uma aplicação interativa e responsiva com foco em boas práticas e organização de código.

## 🌍 Acesso ao Projeto

🔗 [Clique aqui para acessar](https://dnc-react-project.vercel.app/)

## 📱 Descrição do Projeto
- Este projeto é um site interativo que permite aos usuários:
- Navegar entre páginas.
- Trocar o idioma entre português e inglês.
- Visualizar uma lista de projetos e marcar favoritos.
- Preencher e enviar um formulário de contato.
- Experienciar uma interface responsiva e amigável.

## 📌 Funcionalidades
1. Troca de Idioma:<br/>
  Os usuários podem alternar entre os idiomas português e inglês.<br/>
  O idioma selecionado é salvo no `localStorage`.<br/>

2. Formulário de Contato:<br/>
Validação de campos (nome, e-mail e mensagem).<br/>
Simulação de envio com feedback visual.<br/>

3. Listagem de Projetos:<br/>
Exibição de projetos com título, subtítulo e imagem.<br/>
Possibilidade de marcar/desmarcar projetos como favoritos (salvo no `sessionStorage`).

4. Carregamento Dinâmico:<br/>
Dados de texto e projetos são carregados de uma API externa.<br/>

5. Responsividade:<br/>
Layout adaptado para dispositivos móveis e desktops.<br/>

6. Estilo Variável com `buttonStyle` :<br/>
A prop buttonStyle permite que o botão aplique diferentes classes CSS, o que possibilita a personalização do estilo.<br/>

**Por exemplo:**<br/>
* `buttonStyle="secondary"` pode aplicar um estilo secundário.<br/>
* `buttonStyle="unstyled"` pode remover o estilo padrão.<br/>

## 🛠️ Tecnologias Utilizadas

* React: Biblioteca principal para construção da interface.
* React Router: Gerenciamento de rotas.
* CSS: Estilização dos componentes.
* Fetch API: Consumo de dados da API.
* LocalStorage e SessionStorage: Persistência de dados no navegador.

## 📂 Estrutura do Projeto

```
src/
├── assets/               # Imagens e ícones
├── components/           # Componentes reutilizáveis
│   ├── AboutText/        # Sobre a Empresa
│   ├── Banner/           # Baner sobre as páginas secundárias
│   ├── Button/           # Botão estilizado
│   ├── ContactForm/      # Formulário de contato
│   ├── Footer/           # Rodapé
│   ├── Header/           # Cabeçalho
│   ├── Hero/             # Seção principal
│   ├── LoadingSpinner/   # Indicador de carregamento
│   ├── ProjectsList/     # Listagem de projetos
├── contexts/             # Contexto global (AppContext)
├── services/             # Serviços para consumo de API
├── pages/                # Páginas da aplicação
├── utils/                # Utilitários
├── App.jsx               # Componente principal
├── main.css              # Estilização global
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