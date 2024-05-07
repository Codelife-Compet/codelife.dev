## /trail/island/level/slide/:id

**Descrição:** deleta o slide com o id especificado

**Method:** `DELETE`

**Body**: nao ha
**Params**: em `:id` deve ser passado o id do slide

**Success Response**: [Slide](../../../../src/domain/trilhas/@entities/slide.ts)
- retorna o slide removido com o id especificado
- Status: `201`

**Error Response**: [ResourceNotFoundError](../../../../src/core/errors/resource-not-found-error.ts)
- nenhum slide com o id especificado existe no DB
- Status: `400`

