## /trail/island/level/slide/usercode/:id

**Descrição:** deleta o userCode com o id especificado

**Method:** `DELETE`

**Body**: nao ha
**Params**: em `:id` deve ser passado o id do userCode

**Success Response**: [UserCode](../../../../src/domain/trilhas/@entities/userCode.ts)
- retorna o userCode removido com o id especificado
- Status: `201`

**Error Response**: [ResourceNotFoundError](../../../../src/core/errors/resource-not-found-error.ts)
- nenhum userCode com o id especificado existe no DB
- Status: `400`

