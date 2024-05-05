## /

**Descrição:** deleta um usuario do sistema

**Method:** `DELETE`

**Body**

```json
{
    "id": string
}
```

**Success Response**: [User](../../../src/domain/users/entities/user.ts)
- retorna o usuario deletado
- Status: `201`

**Error Response**: [ResourceNotFoundError](../../../src/core/errors/resource-not-found-error.ts)
- usuario passado não foi encontrado
- Status: `400`