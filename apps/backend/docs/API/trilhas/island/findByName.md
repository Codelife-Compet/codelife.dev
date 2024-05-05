## /trail/island/name/:name

**Descrição:** retorna a ilha com o nome especificado

**Method:** `GET`

**Body**: nao ha
**Params**: em `:name` deve ser passado o nome da ilha

**Success Response**: [Island](../../../../src/domain/trilhas/@entities/island.ts)
- retorna a ilha com o nome especificado
- Status: `201`

**Error Response**: [ResourceNotFoundError](../../../../src/core/errors/resource-not-found-error.ts)
- nenhuma ilha com o nome especificado existe no DB
- Status: `400`

