## /trail/island/level/slide:id

**Descrição:** atualiza umo nível existente

**Method:** `PUT`

**Body**

```typescript
{
    "name"?: string,
    "description"?: string,
    "theme"?: string
}
```

**Params**: em `:id` deve ser passado o id do nível

**Success Response**: [Slide](../../../../src/domain/trilhas/@entities/slide.ts)
- retorna o nível atualizado
- Status: `201`

**Error Response**: [ResourceNotFoundError](../../../../src/core/errors/resource-not-found-error.ts)
- ilha com o id especificado nao existe
- Status: `400`