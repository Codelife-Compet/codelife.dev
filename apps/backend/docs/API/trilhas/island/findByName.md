## /trail/island/level/name

**Descrição:** retorna a ilha com o nome especificado

**Usuario Logado:** Sim

**Administrador:** Não

**Method:** `GET`

**Body**:

```typescript
{
    levelName: string, // nome do nível
    islandId: string,  // id da ilha
}
```

**Success Response**: [Island](../../../../src/domain/trilhas/@entities/island.ts)
- retorna a ilha com o nome especificado
- Status: `201`

**Error Response**: [ResourceNotFoundError](../../../../src/core/errors/resource-not-found-error.ts)
- nenhuma ilha com o nome especificado existe no DB
- Status: `400`

