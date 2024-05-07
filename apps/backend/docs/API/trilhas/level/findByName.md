## /trail/island/level/name

**Descrição:** retorna a ilha com o nome especificado

**Method:** `GET`

**Body**:

```typescript
{
    levelName: string,   // nome da ilha
    islandId: string,    // id da trilha
}
```

**Success Response**: [Level](../../../../src/domain/trilhas/@entities/level.ts)
- retorna a ilha com o nome especificado
- Status: `201`

**Error Response**: [ResourceNotFoundError](../../../../src/core/errors/resource-not-found-error.ts)
- nenhuma ilha com o nome especificado existe no DB
- Status: `400`

