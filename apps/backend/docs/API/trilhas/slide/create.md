## /trail/island/level/slide

**Descrição:** cria um novo slide de uma ilha

**Method:** `POST`

**Body**

```typescript
{
    name: string,        // nome do slide
    description: string, // descrição do slide
    theme: string,       // tema do slide (HTML)
    baseCode: string,    // código base do slide (editor de texto)
    levelId: string      // id do nível da ilha
}
```

**Success Response**: [Slide](../../../../src/domain/trilhas/@entities/slide.ts)
- retorna o slide criado
- Status: `201`

**Error Response**: [ResourceAlreadyExistsError](../../../../src/core/errors/resource-already-exists-error.ts)
- slide já existe
- Status: `400`