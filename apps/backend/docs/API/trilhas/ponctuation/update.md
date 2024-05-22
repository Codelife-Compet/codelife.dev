## /trail/island/level/ponctuation/:id

**Descrição:** atualiza umo nível existente

**Method:** `PUT`

**Body**

```typescript
{
    userName?: string // nome do usuário
    score?: number    // pontuação do usuário
}
```

**Params**: em `:id` deve ser passado o id do nível

**Success Response**: [Ponctuation](../../../../src/domain/trilhas/@entities/ponctuation.ts)
- retorna o nível atualizado
- Status: `201`

**Error Response**: [ResourceNotFoundError](../../../../src/core/errors/resource-not-found-error.ts)
- ilha com o id especificado nao existe
- Status: `400`