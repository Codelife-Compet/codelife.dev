## /team/name/:name

**Descrição:** retorna o time com o nome especificado

**Usuario Logado:** Sim

**Administrador:** Não

**Method:** `GET`

**Body**:

```typescript
{
    teamName: string, // nome do time
}
```

**Success Response**: [Team](../../../src/domain/ranking/@entities/team.ts)
- retorna o time com o nome especificado
- Status: `201`

**Error Response**: [ResourceNotFoundError](../../../../src/core/errors/resource-not-found-error.ts)
- nenhum time com o nome especificado existe no DB
- Status: `400`

