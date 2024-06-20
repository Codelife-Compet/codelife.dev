## /trail/island/level/ponctuation/name

**Descrição:** retorna a pontuação com o nome especificado

**Usuario Logado:** Sim

**Administrador:** Não

**Method:** `GET`

**Body**:

```typescript
{
    levelName: string,   // nome da ilha
    islandId: string,    // id da trilha
}
```

**Success Response**: [Ponctuation](../../../../src/domain/trilhas/@entities/ponctuation.ts)
- retorna a pontuação com o nome especificado
- Status: `201`

**Error Response**: [ResourceNotFoundError](../../../../src/core/errors/resource-not-found-error.ts)
- nenhuma pontuação com o nome especificado existe no DB
- Status: `400`

