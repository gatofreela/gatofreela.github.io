# 📌 Guia do Front-End do Projeto Gato Freela

## 🔹 Visão Geral

Atualmente, o desenvolvimento do front-end está em andamento e a base inicial do projeto pode ser acessada no seguinte link:

🔗 **[Demo do Front-End](https://gatofreela.github.io)**

O objetivo é criar uma experiência fluida e intuitiva para clientes e desenvolvedores que utilizam a plataforma. Este documento visa orientar novos colaboradores sobre a estrutura, funcionamento e boas práticas do front-end.

---

## 🚀 **Funcionalidades Atuais**

Atualmente, o projeto contém funcionalidades voltadas para **Clientes (Client)**, com as seguintes rotas implementadas:

- **Página Inicial:** Ao acessar a página principal, selecione a opção **"Eu quero contratar"**.
- **Página de Cadastro para Cliente:** Disponível através do link:
  👉 [https://gatofreela.github.io/client/client-teste/](https://gatofreela.github.io/client/client-teste/)

Novas funcionalidades estão em desenvolvimento e qualquer contribuição é bem-vinda!

---

## 🛠 **Contribuindo para o Front-End**

### 📂 **Organização do Projeto**

O projeto utiliza **Astro** como framework principal. A estrutura do código é modular, organizada da seguinte forma:

- **Componentes reutilizáveis:** `src/components/`
- **Layouts globais:** `src/layouts/`
- **Estilos globais:** `src/styles/`
- **Mocks para dados de teste:** `src/mock/user.js`

📌 **Se você não conhece Astro**, recomenda-se a leitura da [documentação oficial](https://docs.astro.build/).

---

## 📊 **Sobre Dados Dinâmicos**

Caso seja necessário **adicionar ou modificar informações de clientes ou desenvolvedores**, siga estas diretrizes:

- **Dados dinâmicos** (personalizáveis pelo usuário) devem ser armazenados em `src/mock/user.js`.
- **Exemplo de Mock Atual:**

```javascript
export const mockUserDev = {
  id: uuid(),
  name: "Developer Teste",
  username: "developer-teste",
  email: "developer@teste.com",
  role: "developer",
  isLoggedIn: true,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  profile: {
    bio: "Desenvolvedor Full Stack apaixonado por código aberto.",
    skills: ["JavaScript", "Node.js", "Astro", "SQL"],
    avatar: "/avatars/developer.png",
  },
};
```

📌 **Mantenha o mesmo formato e nomenclatura para novos usuários.** Esse mock pode ser removido futuramente quando o back-end estiver implementado.

---

## 🎨 **Diretrizes para CSS**

- O **CSS global** está localizado em `src/styles/`.
- Cada **página e componente** tem seu próprio estilo seguindo o padrão do **Astro** (não altere essa estrutura sem aprovação).
- Utilize a **paleta de cores do Figma** como referência para novas implementações.
- **Estilo consistente:** Adote os componentes visuais do Figma, mantendo fontes, espaçamentos e botões alinhados com o design do projeto.

⚠️ **Nota:** O CSS atual ainda não está otimizado para telas menores. Melhorias são bem-vindas!

---

## 🖌 **Contribuindo para o Design**

Se você deseja ajudar na parte visual do projeto, solicite acesso ao **Figma**. O Figma contém:

- 🎨 A **paleta de cores oficial** do Gato Freela.
- 📦 **Componentes e estilos visuais** predefinidos.

Entre em contato para obter acesso e contribuir com melhorias no design! 🚀
