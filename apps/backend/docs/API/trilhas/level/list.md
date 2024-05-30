## /trail/island/level/list

**Descrição:** retorna todas os níveis cadastrados

**Usuario Logado:** Sim

**Administrador:** Não

**Method:** `GET`

**Body**: nao ha

**Success Response**: [Level](../../../../src/domain/trilhas/@entities/level.ts) []
- retorna todas os níveis cadastrados
- Status: `201`

**Error Response**: [ResourceNotFoundError](../../../../src/core/errors/resource-not-found-error.ts)
- nenhum nivel cadastrado no DB
- Status: `400`
