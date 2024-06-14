## /team/user

**Descrição:** adiciona um usuário já existente ao time

**Usuario Logado:** Sim

**Administrador:** Não

**Method:** `POST`

**Body**

```typescript
{
    userId: string   // id do usuário a ser adicionado
    teamName: string // nome do time
}
```

**Success Response**: [Team](../../../src/domain/ranking/@entities/team.ts)
- retorna a ilha criada
- Status: `201`

**Error Response**: [ResourceAlreadyExistsError](../../../../src/core/errors/resource-already-exists-error.ts)
- ilha já existe
- Status: `400`

**Error Response**: [ResourceNotFoundError](../../../../src/core/errors/resource-not-found-error.ts)
- usuário ou time não encontrado
- Status: `400`
