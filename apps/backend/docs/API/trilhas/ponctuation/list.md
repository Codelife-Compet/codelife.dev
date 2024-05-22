## /trail/island/level/ponctuation/list

**Descrição:** retorna todas os níveis cadastrados

**Method:** `GET`

**Body**: nao ha

**Success Response**: [Ponctuation](../../../../src/domain/trilhas/@entities/ponctuation.ts) []
- retorna todas os níveis cadastrados
- Status: `201`

**Error Response**: [ResourceNotFoundError](../../../../src/core/errors/resource-not-found-error.ts)
- nenhum nivel cadastrado no DB
- Status: `400`
