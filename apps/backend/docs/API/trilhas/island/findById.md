## /trail/island/id/:id

**Descrição:** retorna a ilha com o id especificado

**Method:** `GET`

**Body**: nao ha
**Params**: em `:id` deve ser passado o id da ilha

**Success Response**: [Island](../../../../src/domain/trilhas/@entities/island.ts)
- retorna a ilha com o id especificado
- Status: `201`

**Error Response**: [ResourceNotFoundError](../../../../src/core/errors/resource-not-found-error.ts)
- nenhuma ilha com o id especificado existe no DB
- Status: `400`

