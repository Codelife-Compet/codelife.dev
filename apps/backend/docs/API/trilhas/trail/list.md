
## /trail/list

**Descrição:** retorna todas as trilhas cadastradas

**Method:** `GET`

**Body**: nao ha

**Success Response**: [Trail](../../../../src/domain/trilhas/@entities/trail.ts) []
- retorna todas as trilhas cadastradas
- Status: `201`

**Error Response**: [ResourceNotFoundError](../../../../src/core/errors/resource-not-found-error.ts)
- nenhuma trilha cadastrada no DB
- Status: `400`

