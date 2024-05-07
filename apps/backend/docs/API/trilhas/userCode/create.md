## /trail/island/level/slide/usercode

**Descrição:** cria um novo userCode de um slide

**Method:** `POST`

**Body**

```typescript
{
    userName: string // nome do usuário
    slideId: string  // id do slide que contem o código
    code?: string    // código do usuário (opcion al pois inicialmente é vazio)
}
```

**Success Response**: [UserCode](../../../../src/domain/trilhas/@entities/userCode.ts)
- retorna o userCode criado
- Status: `201`

**Error Response**: [ResourceAlreadyExistsError](../../../../src/core/errors/resource-already-exists-error.ts)
- userCode já existe
- Status: `400`