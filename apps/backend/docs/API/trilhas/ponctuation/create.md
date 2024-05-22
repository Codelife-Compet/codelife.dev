## /trail/island/level/ponctuation

**Descrição:** cria uma nova pontuação para um usuário em um nível

**Method:** `POST`

**Body**

```typescript
{
    userName: string // nome do usuário
    score: number    // pontuação do usuário
    levelId: string  // id do nível
}
```

**Success Response**: [Ponctuation](../../../../src/domain/trilhas/@entities/ponctuation.ts)
- retorna a pontuação criada
- Status: `201`

**Error Response**: [ResourceAlreadyExistsError](../../../../src/core/errors/resource-already-exists-error.ts)
- ilpontuaçãoha já existe
- Status: `400`