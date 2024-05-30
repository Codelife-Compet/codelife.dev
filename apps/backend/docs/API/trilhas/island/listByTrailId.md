## /trail/island/list/id:

**Descrição:** retorna todas as ilhas cadastradas

**Usuario Logado:** Sim

**Administrador:** Não

**Method:** `GET`

**Body**: nao ha

**Params**: em `:id` deve ser passado o id da trilha mãe

**Success Response**: [Island](../../../../src/domain/trilhas/@entities/island.ts) []
- retorna todas as ilhas cadastradas na trilha
- Status: `201`

**Error Response**: [ResourceNotFoundError](../../../../src/core/errors/resource-not-found-error.ts)
- nenhuma trilha cadastrada no DB
- Status: `400`
