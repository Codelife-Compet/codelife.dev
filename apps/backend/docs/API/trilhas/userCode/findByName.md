## /trail/island/level/slide/usercode/userName/:userName

**Descrição:** retorna o slide com o nome especificado

**Method:** `GET`

**Body**:

```typescript
{
    userName: string,   // nome do usuario
    slideId: string,    // id do slide
}
```

**Success Response**: [UserCode](../../../../src/domain/trilhas/@entities/userCode.ts)
- retorna o slide com o nome especificado
- Status: `201`

**Error Response**: [ResourceNotFoundError](../../../../src/core/errors/resource-not-found-error.ts)
- nenhumo slide com o nome especificado existe no DB
- Status: `400`

