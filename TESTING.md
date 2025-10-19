# Guia de Testes - API CRUD de Usuários

## ✅ Conexão com Banco de Dados - OK!

A conexão com o PostgreSQL está funcionando perfeitamente.

## 🚀 Como Testar os Endpoints

### 1. Iniciar o Servidor

```bash
pnpm run dev
```

O servidor iniciará em `http://localhost:3000`

---

## 📋 Endpoints Disponíveis

### 1️⃣ **Criar Usuário (POST)**

**URL:** `http://localhost:3000/users`  
**Método:** `POST`  
**Body (JSON):**
```json
{
  "email": "joao@exemplo.com",
  "name": "João Silva"
}
```

**Resposta Esperada (201):**
```json
{
  "id": 1,
  "email": "joao@exemplo.com",
  "name": "João Silva"
}
```

---

### 2️⃣ **Listar Todos os Usuários (GET)**

**URL:** `http://localhost:3000/users`  
**Método:** `GET`

**Resposta Esperada (200):**
```json
[
  {
    "id": 1,
    "email": "joao@exemplo.com",
    "name": "João Silva"
  }
]
```

---

### 3️⃣ **Buscar Usuário por ID (GET)**

**URL:** `http://localhost:3000/users/1`  
**Método:** `GET`

**Resposta Esperada (200):**
```json
{
  "id": 1,
  "email": "joao@exemplo.com",
  "name": "João Silva"
}
```

---

### 4️⃣ **Atualizar Usuário (PUT)**

**URL:** `http://localhost:3000/users/1`  
**Método:** `PUT`  
**Body (JSON):**
```json
{
  "name": "João Silva Atualizado",
  "email": "joao.novo@exemplo.com"
}
```

**Resposta Esperada (200):**
```json
{
  "id": 1,
  "email": "joao.novo@exemplo.com",
  "name": "João Silva Atualizado"
}
```

---

### 5️⃣ **Deletar Usuário (DELETE)**

**URL:** `http://localhost:3000/users/1`  
**Método:** `DELETE`

**Resposta Esperada:** `204 No Content`

---

## 🧪 Testando com Thunder Client

1. **Instale a extensão Thunder Client** no VS Code (se ainda não tiver)
2. Clique no ícone do raio ⚡ na barra lateral
3. Clique em "New Request"
4. Configure cada endpoint conforme os exemplos acima
5. Clique em "Send" para testar

---

## 🧪 Testando com PowerShell (curl)

### Criar Usuário:
```powershell
$body = @{ email = "maria@exemplo.com"; name = "Maria Santos" } | ConvertTo-Json
Invoke-RestMethod -Uri http://localhost:3000/users -Method POST -Body $body -ContentType "application/json"
```

### Listar Usuários:
```powershell
Invoke-RestMethod -Uri http://localhost:3000/users -Method GET
```

### Buscar por ID:
```powershell
Invoke-RestMethod -Uri http://localhost:3000/users/1 -Method GET
```

### Atualizar:
```powershell
$body = @{ name = "Maria Atualizada" } | ConvertTo-Json
Invoke-RestMethod -Uri http://localhost:3000/users/1 -Method PUT -Body $body -ContentType "application/json"
```

### Deletar:
```powershell
Invoke-RestMethod -Uri http://localhost:3000/users/1 -Method DELETE
```

---

## 📝 Validações Implementadas

- ✅ Email deve ser válido (formato email)
- ✅ Nome não pode ser vazio
- ✅ Email duplicado retorna erro 409
- ✅ Usuário não encontrado retorna erro 404
- ✅ Erros de validação Zod retornam 400 com detalhes

---

## 🎯 Próximos Passos

Para testar, execute:

```bash
pnpm run dev
```

Depois use Thunder Client ou os comandos PowerShell acima!
