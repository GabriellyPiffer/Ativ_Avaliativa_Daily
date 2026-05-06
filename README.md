## 📋 Daily de Tarefas

O **Daily de Tarefas** é um site criado para ajudar na organização do dia a dia, permitindo visualizar tarefas e consultar a temperatura de uma cidade.

---

## 🚀 Funcionalidades
O Daily Check funciona em uma única interface principal, deixando tudo mais prático para o usuário.

📋 Daily (Home):
Mostra os cards das tarefas já cadastradas, com imagem e informações básicas.
Na mesma tela também é possível cadastrar uma nova tarefa, sem precisar mudar de página.
➕ Cadastro de Tarefas:
Permite adicionar tarefas com:
Nome
Data de início(Automática com a data do dia de criação)
Data de fim
Descrição (em modal)
imagem
As informações são salvas em um banco de dados usando Prisma.<br>
🌡️ Temperatura:
Tela onde o usuário pode pesquisar uma cidade e visualizar a temperatura em tempo real.

---

## 🛠️ Tecnologias

* HTML
* CSS
* JavaScript
* Node.js
* Prisma
* MySQL / MariaDB

---

## ⚙️ Como rodar

1. Clone o repositório:

```bash
git clone https://github.com/GabriellyPiffer/Ativ_Avaliativa_Daily.git
```

2. Instale as dependências:

```bash
npm install
```

3. Configure o banco no `.env`:

```env
PORT=3000
DATABASE_URL="mysql://root@localhost:3306/daily_check"
```

4. Rode o Prisma:

```bash
npx prisma migrate dev
npx prisma generate
```

5. Inicie o servidor:

```bash
npm run dev
```

6. Abra o `index.html` no navegador

---

## 🔗 API de Temperatura e de Guardar as Tarefas

Foi utilizada uma API de clima para obter a temperatura das cidades. <br>
Também foi desenvolvida uma API própria para armazenar e gerenciar as informações das tarefas.

---

## 📎 Link do Repositório

```bash
https://github.com/GabriellyPiffer/Ativ_Avaliativa_Daily.git
```

---

## 👩‍💻 Autora

Projeto desenvolvido por **Gabrielly** 💜
