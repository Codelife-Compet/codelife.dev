## /team/

**Descrição:** deleta o time com o id especificado

**Usuario Logado:** Sim

**Administrador:** Sim

**Method:** `DELETE`

**Body**: nao ha

**Params**: em `:id` deve ser passado o id do time

**Success Response**: [Team](../../../src/domain/ranking/@entities/team.ts)
- retorna o time removido com o id especificado
- Status: `201`

**Error Response**: [ResourceNotFoundError](../../../../src/core/errors/resource-not-found-error.ts)
- nenhum time com o id especificado existe no DB
- Status: `400`

