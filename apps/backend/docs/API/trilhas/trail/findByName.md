## /trail/name/:name

**Descrição:** retorna a trilha com o nome especificado

**Method:** `GET`

**Body**: nao ha
**Params**: em `:name` deve ser passado o nome da trilha

**Success Response**: [Trail](../../../../src/domain/trilhas/@entities/trail.ts)
- retorna a trilha com o nome especificado
- Status: `201`

**Error Response**: [ResourceNotFoundError](../../../../src/core/errors/resource-not-found-error.ts)
- nenhuma trilha com o nome especificado existe no DB
- Status: `400`

