## /me

**Descrição:** retorna o usuario logado

**Method:** `GET`

**Body**: não há

**Auth required:** Sim

**Success Response**: [User](../../../src/domain/users/entities/user.ts) 
- retorna o usuario logado
- Status: `200`

**Error Response**: [ResourceNotFoundError](../../../src/core/errors/resource-not-found-error.ts)
- usuario não encontrado
- Status: `401`

