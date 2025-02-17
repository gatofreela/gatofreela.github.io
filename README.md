<div align="center">
  <h1>Gato Freela - Brasil</h1>
  <img alt="icon" src="https://raw.githubusercontent.com/gatofreela/gatofreela.github.io/refs/heads/main/public/gatofreela.png" width="40%" />
  <p>
    <b>🐾 Gato Freela</b> <i>é a plataforma ideal para conectar freelancers a clientes de forma simples e confiável!</i>
  </p>
  <hr>
</div>

<div align="center">
  <a href="https://github.com/gatofreela/gatofreela.github.io/blob/main/LICENSE">
    <img alt="GitHub License"
         src="https://img.shields.io/github/license/gatofreela/gatofreela.github.io?style=for-the-badge&logo=apache&logoColor=CE854E&color=CE854E" />
  </a>
  <a href="https://github.com/gatofreela/gatofreela.github.io/archive/refs/heads/main.zip">
    <img alt="GitHub Repo Size"
         src="https://img.shields.io/github/repo-size/gatofreela/gatofreela.github.io?style=for-the-badge&logo=databricks&logoColor=CE854E&color=CE854E" />
  </a>
</div>

---

# 🚀 **Fluxo de Fork e Contribuição no Front-End**

## 🔹 **Fazendo Fork do Projeto**
Quando for contribuir, o **fork do repositório oficial** deve ser feito a partir da branch `main`. Isso garante que você está sempre começando a partir da versão mais recente e estável do código.

---

## 🔹 **Estrutura de Branches na Sua Máquina**
A organização das branches no seu repositório local seguirá o fluxo abaixo:

### **🌍 Master (`main`)**
- Essa é a branch **final**, usada para produção.
- **Nunca desenvolva diretamente na `main`**, apenas faça merge nela quando estiver tudo testado e aprovado.
- Após validar que não há erros críticos, será feito merge com a `main` oficial do projeto.

### **🚑 Hotfix (`hotfix/nome-do-hotfix`)**
- Criada para **corrigir bugs críticos encontrados em produção**.
- Deve ser criada a partir da `master` e, após a correção, ser mesclada tanto na `master` quanto na `develop`.
  
```bash
git checkout master
git pull origin master
git checkout -b hotfix/ajuste-login
# Correção do problema...
git commit -m "fix: corrigido bug de login"
git checkout master
git merge hotfix/ajuste-login
git checkout develop
git merge hotfix/ajuste-login
```

### **📦 Release (`release/nome-da-release`)**
- Criada para **testes antes de ir para produção**.
- Serve para revisar se todas as features adicionadas na `develop` estão estáveis.
- Após os testes, é mesclada na `master` e na `develop`.

```bash
git checkout develop
git pull origin develop
git checkout -b release/v1.1.0
# Realiza os testes...
git commit -m "release: preparada versão 1.1.0"
git checkout master
git merge release/v1.1.0
git checkout develop
git merge release/v1.1.0
```

### **🚀 Develop (`develop`)**
- **Branch principal de desenvolvimento.**
- Todas as novas funcionalidades (`feature`) devem ser mescladas nela.
- Não faça commits diretos aqui; use branches de feature.

```bash
git checkout develop
git pull origin develop
```

### **🔨 Feature (`feature/nome-da-feature`)**
- Criada para o desenvolvimento de **novas funcionalidades**.
- Deve ser criada a partir da `develop`.
- Após finalizada, deve ser mesclada de volta para `develop`.

```bash
git checkout develop
git pull origin develop
git checkout -b feature/novo-sistema-de-login
# Desenvolvimento da funcionalidade...
git commit -m "feat: implementado sistema de login"
git checkout develop
git merge feature/novo-sistema-de-login
```
