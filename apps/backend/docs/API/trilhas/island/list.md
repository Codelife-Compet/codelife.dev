## /trail/island/list

**Descrição:** retorna todas as ilhas cadastradas

**Method:** `GET`

**Body**: nao ha

**Success Response**: [Island](../../../../src/domain/trilhas/@entities/island.ts) []
- retorna todas as ilhas cadastradas
- Status: `201`

**Error Response**: [ResourceNotFoundError](../../../../src/core/errors/resource-not-found-error.ts)
- nenhuma trilha cadastrada no DB
- Status: `400`
