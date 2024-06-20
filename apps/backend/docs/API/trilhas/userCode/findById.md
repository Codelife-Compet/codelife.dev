## /trail/island/level/slide/usercode/id/:id

**Descrição:** retorna o userCode com o id especificado

**Usuario Logado:** Sim

**Administrador:** Não

**Method:** `GET`

**Body**: nao ha

**Params**: em `:id` deve ser passado o id do userCode

**Success Response**: [UserCode](../../../../src/domain/trilhas/@entities/userCode.ts)
- retorna o userCode com o id especificado
- Status: `201`

**Error Response**: [ResourceNotFoundError](../../../../src/core/errors/resource-not-found-error.ts)
- nenhum userCode com o id especificado existe no DB
- Status: `400`

