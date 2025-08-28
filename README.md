# 📚 Biblioteca Virtual

Este é um projeto de **Biblioteca Virtual** desenvolvido em **HTML, CSS e JavaScript (ES Modules)**.  
Permite cadastrar livros, listar todos os livros, calcular o total de exemplares, gerar relatórios e excluir livros por título.  

O projeto foi desenvolvido para prática de **manipulação de DOM**, **módulos JavaScript** e **interatividade com o usuário**.

---

## 🗂 Estrutura do Projeto

```
biblioteca-virtual/
├─ index.html          # Página principal
├─ style.css           # Estilos da aplicação
├─ armazenamento.js    # Módulo para manipulação dos livros (CRUD)
├─ cadastrarLivros.js  # Função de cadastro de livros
├─ listarLivros.js     # Função para listar livros
├─ calcularTotal.js    # Função para calcular total de exemplares
├─ gerarRelatorio.js   # Função para gerar relatório completo
├─ excluirLivros.js    # Função para excluir livro por título
└─ main.js             # Gerenciador de ações e integração com o HTML
```

---

## ⚡ Funcionalidades

- **Cadastrar livros:** permite inserir título, autor, ano e quantidade de exemplares.
- **Listar todos os livros:** exibe todos os livros cadastrados.
- **Calcular total de exemplares:** soma a quantidade de exemplares de todos os livros.
- **Gerar relatório:** lista todos os livros e exibe o total de exemplares.
- **Excluir livros:** remove um livro pelo título informado.

---

## 📸 Capturas de Tela

### 📌 Página Principal
![Página Principal](Captura%20de%20tela%202025-08-28%20172131.png)

### 📋 Listar Livros
![Listar Livros](Captura%20de%20tela%202025-08-28%20172152.png)

### 🔢 Total de Livros
![Total de Livros](Captura%20de%20tela%202025-08-28%20172204.png)

### 📑 Gerar Relatório
![Gerar Relatório](Captura%20de%20tela%202025-08-28%20172218.png)

### ❌ Excluir Livros
![Excluir Livros](Captura%20de%20tela%202025-08-28%20172240.png)

---

## 💻 Como Executar

1. Baixe o projeto ou clone o repositório:

```bash
git clone https://github.com/SEU_USUARIO/biblioteca-virtual.git
```

2. Abra o arquivo `index.html` no seu navegador (Chrome, Firefox, Edge, etc).

3. Use os formulários e botões para interagir com a biblioteca.

> Observação: É necessário um navegador moderno que suporte **ES Modules** (`<script type="module">`).

---

## 📌 Observações Técnicas

- Todos os módulos JS estão separados para manter o código organizado.
- O `main.js` expõe a função `executarAcao` para que o HTML consiga chamar as ações através dos botões.
- Os livros são armazenados em memória (array `livros` no `armazenamento.js`), portanto, os dados **não são persistidos** ao atualizar a página.

---

## 🎨 Estilo

- Layout simples e responsivo.
- Botões com hover.
- Resultado exibido em `<pre>` para manter formatação.

---

## 📝 Licença

Este projeto está licenciado sob a MIT License.
