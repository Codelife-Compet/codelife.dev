## /trail/create

**Descrição:** cria uma nova trilha

**Usuario Logado:** Sim

**Administrador:** Sim

**Method:** `POST`

**Body**

```typescript
{
    "name": string,
    "description": string,
    "theme": string,
}
```

**Success Response**: [Trail](../../../../src/domain/trilhas/@entities/trail.ts)
- retorna a trilha criada
- Status: `201`

**Error Response**: [ResourceAlreadyExistsError](../../../../src/core/errors/resource-already-exists-error.ts)
- trilha já existe
- Status: `400`