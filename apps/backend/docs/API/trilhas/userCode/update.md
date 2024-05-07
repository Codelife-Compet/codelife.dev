## /trail/island/level/slide/usercode/id:id

**Descrição:** atualiza um userCode existente

**Method:** `PUT`

**Body**

```typescript
{
    "name"?: string,
    "description"?: string,
    "theme"?: string
}
```

**Params**: em `:id` deve ser passado o id do userCode

**Success Response**: [UserCode](../../../../src/domain/trilhas/@entities/userCode.ts)
- retorna o userCode atualizado
- Status: `201`

**Error Response**: [ResourceNotFoundError](../../../../src/core/errors/resource-not-found-error.ts)
- userCode com o id especificado nao existe
- Status: `400`