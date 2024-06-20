## /ranking/teams

**Descrição:** retorna o rankeamento entre times

**Usuario Logado:** Sim

**Administrador:** Não

**Method:** `GET`

**Body**: nao ha

**Success Response**: 

```typescript
{
    teamName: string;
    score: number;
} []
```
- retorna a pontuação e o nome do time
- Status: `201`

**Error Response**: [ResourceNotFoundError](../../../../src/core/errors/resource-not-found-error.ts)
- nenhumo time cadastrada no DB
- Status: `400`
