## /trail/island/level

**Descrição:** cria um novo nível de uma ilha

**Method:** `POST`

**Body**

```typescript
{
    name: string,        // nome do nível
    description: string, // descrição do nível
    theme: string,       // tema do nível (HTML, CSS, JS, etc)
    islandId: string     // id da ilha a qual o nível pertence
}
```

**Success Response**: [Level](../../../../src/domain/trilhas/@entities/level.ts)
- retorna a ilha criada
- Status: `201`

**Error Response**: [ResourceAlreadyExistsError](../../../../src/core/errors/resource-already-exists-error.ts)
- ilha já existe
- Status: `400`