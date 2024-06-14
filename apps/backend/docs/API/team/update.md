## /team/:id

**Descrição:** atualiza umo time existente

**Usuario Logado:** Sim

**Administrador:** Sim

**Method:** `PUT`

**Body**

```typescript
{
    name?: string,
    description?: string,
    theme?: string
}
```

**Params**: em `:id` deve ser passado o id do time

**Success Response**: [Island](../../../../src/domain/trilhas/@entities/island.ts)
- retorna o time atualizada
- Status: `201`

**Error Response**: [ResourceNotFoundError](../../../../src/core/errors/resource-not-found-error.ts)
- ilha com o id especificado nao existe
- Status: `400`