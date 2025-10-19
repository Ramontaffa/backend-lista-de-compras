# API CRUD de Items - Documentação

## 📋 Endpoints Disponíveis

### Base URL: `http://localhost:3000/items`

---

## 1️⃣ **Criar Item (POST)**

**URL:** `http://localhost:3000/items`  
**Método:** `POST`  
**Body (JSON):**
```json
{
  "name": "Coca-Cola 2L",
  "quantity": 2,
  "unit": "l",
  "category": "Bebida",
  "checked": false
}
```

**Categorias válidas:**
- `Bebida`
- `Carne`
- `Padaria`
- `Legume`
- `Fruta`

**Resposta (201):**
```json
{
  "id": 1,
  "name": "Coca-Cola 2L",
  "quantity": 2,
  "unit": "l",
  "category": "Bebida",
  "checked": false
}
```

---

## 2️⃣ **Listar Todos os Items (GET)**

**URL:** `http://localhost:3000/items`  
**Método:** `GET`

**Query Params (opcionais):**
- `?category=Bebida` - Filtrar por categoria
- `?checked=true` - Filtrar por items marcados
- `?checked=false` - Filtrar por items não marcados

**Exemplos:**
```
GET /items
GET /items?category=Fruta
GET /items?checked=true
```

**Resposta (200):**
```json
[
  {
    "id": 1,
    "name": "Coca-Cola 2L",
    "quantity": 2,
    "unit": "l",
    "category": "Bebida",
    "checked": false
  },
  {
    "id": 2,
    "name": "Pão Francês",
    "quantity": 10,
    "unit": "un",
    "category": "Padaria",
    "checked": true
  }
]
```

---

## 3️⃣ **Buscar Item por ID (GET)**

**URL:** `http://localhost:3000/items/:id`  
**Método:** `GET`

**Exemplo:** `GET /items/1`

**Resposta (200):**
```json
{
  "id": 1,
  "name": "Coca-Cola 2L",
  "quantity": 2,
  "unit": "l",
  "category": "Bebida",
  "checked": false
}
```

---

## 4️⃣ **Atualizar Item (PUT)**

**URL:** `http://localhost:3000/items/:id`  
**Método:** `PUT`  
**Body (JSON) - Todos os campos são opcionais:**
```json
{
  "name": "Coca-Cola Zero 2L",
  "quantity": 3,
  "unit": "l",
  "category": "Bebida",
  "checked": true
}
```

**Resposta (200):**
```json
{
  "id": 1,
  "name": "Coca-Cola Zero 2L",
  "quantity": 3,
  "unit": "l",
  "category": "Bebida",
  "checked": true
}
```

---

## 5️⃣ **Alternar Status (Marcar/Desmarcar) (PATCH)**

**URL:** `http://localhost:3000/items/:id/toggle`  
**Método:** `PATCH`

Alterna o status `checked` do item (true ↔ false)

**Exemplo:** `PATCH /items/1/toggle`

**Resposta (200):**
```json
{
  "id": 1,
  "name": "Coca-Cola 2L",
  "quantity": 2,
  "unit": "l",
  "category": "Bebida",
  "checked": true
}
```

---

## 6️⃣ **Deletar Item (DELETE)**

**URL:** `http://localhost:3000/items/:id`  
**Método:** `DELETE`

**Exemplo:** `DELETE /items/1`

**Resposta:** `204 No Content`

---

## 7️⃣ **Deletar Todos os Items (DELETE)**

**URL:** `http://localhost:3000/items`  
**Método:** `DELETE`

⚠️ **CUIDADO:** Esta ação deleta TODOS os items do banco!

**Resposta (200):**
```json
{
  "message": "5 items deleted successfully"
}
```

---

## 🧪 Exemplos de Teste com PowerShell

### Criar um item:
```powershell
$body = @{
  name = "Banana"
  quantity = 6
  unit = "un"
  category = "Fruta"
  checked = $false
} | ConvertTo-Json

Invoke-RestMethod -Uri http://localhost:3000/items -Method POST -Body $body -ContentType "application/json"
```

### Listar todos:
```powershell
Invoke-RestMethod -Uri http://localhost:3000/items -Method GET
```

### Listar por categoria:
```powershell
Invoke-RestMethod -Uri "http://localhost:3000/items?category=Fruta" -Method GET
```

### Buscar por ID:
```powershell
Invoke-RestMethod -Uri http://localhost:3000/items/1 -Method GET
```

### Atualizar:
```powershell
$body = @{ quantity = 10 } | ConvertTo-Json
Invoke-RestMethod -Uri http://localhost:3000/items/1 -Method PUT -Body $body -ContentType "application/json"
```

### Alternar checked:
```powershell
Invoke-RestMethod -Uri http://localhost:3000/items/1/toggle -Method PATCH
```

### Deletar:
```powershell
Invoke-RestMethod -Uri http://localhost:3000/items/1 -Method DELETE
```

---

## 📝 Validações Implementadas

- ✅ Nome não pode ser vazio
- ✅ Quantidade deve ser um número inteiro positivo
- ✅ Categoria deve ser uma das opções válidas
- ✅ Checked é opcional (padrão: false)
- ✅ Item não encontrado retorna erro 404
- ✅ Erros de validação Zod retornam 400 com detalhes

---

## 🎯 Funcionalidades Extras

- 🔍 Filtrar por categoria
- ✔️ Filtrar por status (checked/unchecked)
- 🔄 Toggle rápido do status checked
- 🗑️ Deletar todos os items de uma vez
- 📊 Ordenação automática (mais recentes primeiro na listagem geral)
