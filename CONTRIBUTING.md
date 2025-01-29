# 📌 Guia de Padronização e Regras do Projeto Gato Freela

## 🔹 Introdução

Este documento tem como objetivo definir a padronização e as regras para o desenvolvimento do projeto **Gato Freela**.

---

## 🌱 **Fluxo de Trabalho**

### **🔹 Master (`main` ou `master`)**

- Essa é a **branch principal do projeto**, onde a versão **em produção** do código está sempre disponível.
- Nenhuma feature ou correção de bug deve ser desenvolvida diretamente nesta branch.
- Apenas commits de **Hotfix** e **Releases estáveis** podem ser mesclados aqui.

---

### **🔹 Hotfix (`hotfix/nome-do-hotfix`)**

> 🔧 Correção imediata de bugs encontrados em produção.

- Criada apenas quando um bug **crítico** é encontrado na `master`.
- Deve ser criada diretamente a partir da `master`.
- Após corrigido o bug, o código deve ser **mesclado** tanto na `master` quanto na `develop`.
- Seguir a nomenclatura: `hotfix/nome-do-hotfix`.

```bash
# Criando um hotfix
git checkout master
git pull origin master
git checkout -b hotfix/corrigir-erro-login

# Após correção
git commit -m "Corrigido bug na autenticação de login"
git checkout master
git merge hotfix/corrigir-erro-login
git checkout develop
git merge hotfix/corrigir-erro-login
```

---

### **🔹 Release (`release/nome-da-release`)**

> 📦 Preparação para o lançamento de uma nova versão.

- Criada a partir da `develop` quando um conjunto de funcionalidades está pronto para ser testado antes de ir para produção.
- Permite que o time QA e revisores testem e validem as novas funcionalidades.
- Após a fase de testes, a `release` é mesclada na `master` e na `develop`.
- Seguir a nomenclatura: `release/vX.Y.Z` (exemplo: `release/v1.2.0`).

```bash
# Criando uma branch de release
git checkout develop
git pull origin develop
git checkout -b release/v1.2.0
```

---

### **🔹 Develop (`develop`)**

> 🚀 Branch principal de desenvolvimento.

- Todas as novas **features** e **correções** devem ser mescladas nesta branch antes de serem consideradas para produção.
- Nenhuma alteração deve ser feita diretamente nesta branch; todo código deve vir de **features** ou **hotfixes**.
- Sempre manter esta branch atualizada antes de criar novas branches.

```bash
# Atualizando develop
git checkout develop
git pull origin develop
```

---

### **🔹 Feature (`feature/nome-da-feature`)**

> 🔨 Desenvolvimento de novas funcionalidades.

- Criada a partir da `develop`.
- Deve conter apenas **uma funcionalidade específica**.
- Após finalizada, deve ser mesclada de volta para `develop`.
- Seguir a nomenclatura: `feature/nome-da-feature`.

```bash
# Criando uma branch de feature
git checkout develop
git pull origin develop
git checkout -b feature/autenticacao-google
```

---

## 🏷️ **Organização de Tags**

As tags são utilizadas para marcar versões específicas do código. As versões devem seguir o padrão **Semantic Versioning** (`vX.Y.Z`):

- **X (Major)**: Mudanças que quebram compatibilidade.
- **Y (Minor)**: Novas funcionalidades que não quebram compatibilidade.
- **Z (Patch)**: Correções de bugs ou melhorias pequenas.

```bash
# Criar uma tag para versão 1.2.0
git tag -a v1.2.0 -m "Release da versão 1.2.0"
git push origin v1.2.0
```

---

## 🔑 **GPG e Assinaturas de Commits**

Para garantir **autenticidade e segurança**, os commits devem ser **assinados com GPG**. Isso evita que commits sejam feitos por usuários não autorizados.

### **1️⃣ Gerar uma chave GPG**

```bash
gpg --full-generate-key
```

- Escolha: **RSA e RSA (default)**.
- Tamanho: **4096 bits**.
- Validade: **Sem expiração (0)**.
- Informe seu nome e email.

### **2️⃣ Obter a chave gerada**

```bash
gpg --list-secret-keys --keyid-format=long
```

Copie o `KEY_ID` listado e use-o para exportar sua chave pública:

```bash
gpg --armor --export KEY_ID
```

### **3️⃣ Adicionar ao Git**

```bash
git config --global user.signingkey KEY_ID
git config --global commit.gpgsign true
```

Agora, todos os commits serão assinados automaticamente.

Para verificar um commit assinado:

```bash
git log --show-signature
```
