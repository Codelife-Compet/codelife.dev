## /trail/id/:id

**Descrição:** retorna a trilha com o id especificado

**Method:** `GET`

**Body**: nao ha
**Params**: em `:id` deve ser passado o id da trilha

**Success Response**: [Trail](../../../../src/domain/trilhas/@entities/trail.ts)
- retorna a trilha com o id especificado
- Status: `201`

**Error Response**: [ResourceNotFoundError](../../../../src/core/errors/resource-not-found-error.ts)
- nenhuma trilha com o id especificado existe no DB
- Status: `400`

