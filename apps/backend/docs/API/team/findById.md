## /team/id/:id

**Descrição:** retorna o time com o id especificado

**Method:** `GET`

**Usuario Logado:** Sim

**Administrador:** Não

**Body**: nao ha

**Params**: em `:id` deve ser passado o id do time

**Success Response**: [Team](../../../src/domain/ranking/@entities/team.ts)
- retorna o time com o id especificado
- Status: `201`

**Error Response**: [ResourceNotFoundError](../../../../src/core/errors/resource-not-found-error.ts)
- nenhumo time com o id especificado existe no DB
- Status: `400`

