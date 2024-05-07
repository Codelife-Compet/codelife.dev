## /trail/island/level/id/:id

**Descrição:** retorna o nível com o id especificado

**Method:** `GET`

**Body**: nao ha
**Params**: em `:id` deve ser passado o id do nível

**Success Response**: [Level](../../../../src/domain/trilhas/@entities/level.ts)
- retorna o nível com o id especificado
- Status: `201`

**Error Response**: [ResourceNotFoundError](../../../../src/core/errors/resource-not-found-error.ts)
- nenhum nível com o id especificado existe no DB
- Status: `400`

