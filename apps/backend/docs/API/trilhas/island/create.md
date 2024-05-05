## /trail/island/

**Descrição:** cria uma nova ilha para trilha

**Method:** `POST`

**Body**

```typescript
{
    name: string,        // nome da ilha
    description: string, // descrição da ilha
    theme: string,       // tema da ilha (HTML)
    trailId: string      // id da trilha a qual a ilha pertence
}
```

**Success Response**: [Island](../../../../src/domain/trilhas/@entities/island.ts)
- retorna a ilha criada
- Status: `201`

**Error Response**: [ResourceAlreadyExistsError](../../../../src/core/errors/resource-already-exists-error.ts)
- ilha já existe
- Status: `400`