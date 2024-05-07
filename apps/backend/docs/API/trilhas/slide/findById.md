## /trail/island/level/slide/id/:id

**Descrição:** retorna o slide com o id especificado

**Method:** `GET`

**Body**: nao ha
**Params**: em `:id` deve ser passado o id do slide

**Success Response**: [Slide](../../../../src/domain/trilhas/@entities/slide.ts)
- retorna o slide com o id especificado
- Status: `201`

**Error Response**: [ResourceNotFoundError](../../../../src/core/errors/resource-not-found-error.ts)
- nenhum slide com o id especificado existe no DB
- Status: `400`

