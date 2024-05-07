## /trail/island/level/:id

**Descrição:** deleta o nível com o id especificado

**Method:** `DELETE`

**Body**: nao ha
**Params**: em `:id` deve ser passado o id do nível

**Success Response**: [Island](../../../../src/domain/trilhas/@entities/island.ts)
- retorna o nível removido com o id especificado
- Status: `201`

**Error Response**: [ResourceNotFoundError](../../../../src/core/errors/resource-not-found-error.ts)
- nenhum nível com o id especificado existe no DB
- Status: `400`

