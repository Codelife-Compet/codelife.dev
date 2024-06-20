## /trail/island/level/slide/list

**Descrição:** retorna todas os slides cadastrados

**Usuario Logado:** Sim

**Administrador:** Não

**Method:** `GET`

**Body**: nao ha

**Success Response**: [Slide](../../../../src/domain/trilhas/@entities/slide.ts) [] 
- retorna todas os slides cadastrados
- Status: `201`

**Error Response**: [ResourceNotFoundError](../../../../src/core/errors/resource-not-found-error.ts)
- nenhum slide cadastrado no DB
- Status: `400`
