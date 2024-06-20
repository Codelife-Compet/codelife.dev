## /ranking/teams/:teamId

**Descrição:** retorna o rankeamento interno dentro do time, entre seus membros globalmente

**Usuario Logado:** Sim

**Administrador:** Não

**Method:** `GET`

**Body**: nao ha

**Params**: em `:teamId` deve ser passado o id do time

**Success Response**: [PonctuationProps](../../../src/domain/trilhas/@entities/ponctuation.ts) []
- retorna a pontuação e o nome do usuario
- Status: `201`

**Error Response**: [ResourceNotFoundError](../../../../src/core/errors/resource-not-found-error.ts)
- nenhumo time cadastrada no DB
- Status: `400`
