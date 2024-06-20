## /team/list

**Descrição:** retorna todas os times cadastradas

**Usuario Logado:** Sim

**Administrador:** Não

**Method:** `GET`

**Body**: nao ha

**Success Response**: [Team](../../../src/domain/ranking/@entities/team.ts) []
- retorna todas os times cadastrados
- Status: `201`

**Error Response**: [ResourceNotFoundError](../../../../src/core/errors/resource-not-found-error.ts)
- nenhumo time cadastrada no DB
- Status: `400`
