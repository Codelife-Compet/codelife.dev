## /trail/island/name

**Descrição:** retorna a ilha com o nome especificado

**Method:** `GET`

**Body**:

```typescript
{
    islandName: string, // nome da ilha
    trailId: string,    // id da trilha
}
```

**Success Response**: [Island](../../../../src/domain/trilhas/@entities/island.ts)
- retorna a ilha com o nome especificado
- Status: `201`

**Error Response**: [ResourceNotFoundError](../../../../src/core/errors/resource-not-found-error.ts)
- nenhuma ilha com o nome especificado existe no DB
- Status: `400`

