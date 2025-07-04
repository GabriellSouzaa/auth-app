
# ⚛️ Auth Frontend – Aplicação React de Autenticação

Frontend em React 18+ com gerenciamento de estado via React Context, rotas protegidas e comunicação com backend via API REST.

---

## 📦 Tecnologias

- React 18+
- TypeScript
- React Router DOM
- React Context API (para autenticação)
- Axios (consumo da API)
- Tailwind CSS (estilização)
- ESLint + Prettier

---

## 🚀 Como rodar o projeto

```bash
# 1. Clone o repositório
git clone https://github.com/GabriellSouzaa/auth-app.git
cd auth-frontend

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm start
```

---

## 📁 Estrutura de Pastas

```
src/
├── context/            # React Context para estado global de auth
├── routes/             # Configuração de rotas
├── components/         # Páginas: Login, Register, Dashboard
├── services/           # Serviços da aplicação
```

---

## 📌 Funcionalidades

| Tela      | Descrição                                      |
|-----------|------------------------------------------------|
| Register  | Cadastro de usuário com validação e feedback  |
| Login     | Autenticação com e-mail e senha, recebe JWT   |
| Dashboard | Página protegida que exibe perfil do usuário  |

---

## 🔐 Autenticação

- O token JWT é armazenado em `localStorage`
- Rotas protegidas usam `PrivateRoute` para garantir acesso autenticado
- Axios inclui token no header `Authorization` para chamadas à API

---

## ✅ Scripts úteis

```bash
npm start      # Inicia o frontend em modo desenvolvimento
npm run build  # Cria build otimizada para produção
npm test       # Executa testes (se implementados)
```

---

## 🧪 Testando a aplicação

1. Acesse `/register` para criar um usuário
2. Faça login em `/login` para obter o token
3. Navegue para `/dashboard` para ver informações do perfil (rota protegida)

---

## 📌 Observações

- O frontend está configurado para acessar backend na URL `http://localhost:3000`
- Use Tailwind CSS para estilização responsiva e moderna
- Utiliza React Context para gerenciamento simples e eficiente do estado de autenticação

---

## 🧾 Licença

MIT
