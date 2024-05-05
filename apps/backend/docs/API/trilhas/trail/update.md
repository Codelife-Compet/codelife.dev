## /trail/:id

**Descrição:** atualiza uma trilha existente

**Method:** `PUT`

**Body**

```typescript
{
    "name"?: string,
    "description"?: string,
    "theme"?: string
}
```

**Params**: em `:id` deve ser passado o id da trilha

**Success Response**: [Trail](../../../../src/domain/trilhas/@entities/trail.ts)
- retorna a trilha atualizada
- Status: `201`

**Error Response**: [ResourceNotFoundError](../../../../src/core/errors/resource-not-found-error.ts)
- trilha com o id especificado nao existe
- Status: `400`