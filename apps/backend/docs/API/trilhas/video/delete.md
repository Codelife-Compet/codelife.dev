## /trail/island/level/slide/video/:id

**Descrição:** deleta o video com o id especificado

**Method:** `DELETE`

**Body**: nao ha
**Params**: em `:id` deve ser passado o id do slide

**Success Response**: [Video](../../../../src/domain/trilhas/@entities/video.ts)
- retorna o video removido com o id especificado
- Status: `201`

**Error Response**: [ResourceNotFoundError](../../../../src/core/errors/resource-not-found-error.ts)
- nenhum video com o id especificado existe no DB
- Status: `400`

