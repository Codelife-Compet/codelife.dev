## /ranking/teams/:levelId

**Descrição:** retorna o rankeamento dos times de um determinado nivel

**Usuario Logado:** Sim

**Administrador:** Não

**Method:** `GET`

**Body**: nao ha

**Success Response**: 

```typescript
{
    teamsName: string;
    score: number;
}[]
```
- retorna o nome do time e a pontuacao do time
- Status: `201`

**Error Response**: [ResourceNotFoundError](../../../../src/core/errors/resource-not-found-error.ts)
- nenhumo time cadastrada no DB
- Status: `400`
