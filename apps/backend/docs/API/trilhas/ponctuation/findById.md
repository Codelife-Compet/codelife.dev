## /trail/island/level/ponctuation/id/:id

**Descrição:** retorna a pontuação com o id especificado

**Usuario Logado:** Sim

**Administrador:** Não

**Method:** `GET`

**Body**: nao ha

**Params**: em `:id` deve ser passado o id da pontuação

**Success Response**: [Ponctuation](../../../../src/domain/trilhas/@entities/ponctuation.ts)
- retorna a pontuação com o id especificado
- Status: `201`

**Error Response**: [ResourceNotFoundError](../../../../src/core/errors/resource-not-found-error.ts)
- nenhuma pontuação com o id especificado existe no DB
- Status: `400`

