## /trail/island/level/ponctuation/:id

**Descrição:** deleta a pontuação com o id especificado

**Usuario Logado:** Sim

**Administrador:** Sim

**Method:** `DELETE`

**Body**: nao ha

**Params**: em `:id` deve ser passado o id da pontuação

**Success Response**: [Ponctuation](../../../../src/domain/trilhas/@entities/ponctuation.ts)
- retorna a pontuação removida com o id especificado
- Status: `201`

**Error Response**: [ResourceNotFoundError](../../../../src/core/errors/resource-not-found-error.ts)
- nenhuma pontuação com o id especificado existe no DB
- Status: `400`

