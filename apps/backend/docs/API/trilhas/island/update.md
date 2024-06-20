## /trail/island/:id

**Descrição:** atualiza uma ilha existente

**Usuario Logado:** Sim

**Administrador:** Sim

**Method:** `PUT`

**Body**

```typescript
{
    "name"?: string,
    "description"?: string,
    "theme"?: string
}
```

**Params**: em `:id` deve ser passado o id da ilha

**Success Response**: [Island](../../../../src/domain/trilhas/@entities/island.ts)
- retorna a ilha atualizada
- Status: `201`

**Error Response**: [ResourceNotFoundError](../../../../src/core/errors/resource-not-found-error.ts)
- ilha com o id especificado nao existe
- Status: `400`