## /trail/island/level/slide/video/:id

**Descrição:** atualiza um video existente

**Method:** `PUT`

**Body**

```typescript
{
    name?: string,
    description?: string,
    theme?: string
}
```

**Params**: em `:id` deve ser passado o id do video

**Success Response**: [Video](../../../../src/domain/trilhas/@entities/video.ts)
- retorna o video atualizado
- Status: `201`

**Error Response**: [ResourceNotFoundError](../../../../src/core/errors/resource-not-found-error.ts)
- video com o id especificado nao existe
- Status: `400`