## /trail/island/list

**Descrição:** retorna todas as ilhas cadastradas

**Usuario Logado:** Sim

**Administrador:** Não

**Method:** `GET`

**Body**: nao ha

**Success Response**: [Team](../../../src/domain/ranking/@entities/team.ts) []
- retorna todas as ilhas cadastradas
- Status: `201`

**Error Response**: [ResourceNotFoundError](../../../../src/core/errors/resource-not-found-error.ts)
- nenhuma trilha cadastrada no DB
- Status: `400`
