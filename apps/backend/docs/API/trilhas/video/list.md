## /trail/island/level/slide/video/list

**Descrição:** retorna todas os videos cadastrados

**Method:** `GET`

**Body**: nao ha

**Success Response**: [Video](../../../../src/domain/trilhas/@entities/video.ts) [] 
- retorna todas os videos cadastrados
- Status: `201`

**Error Response**: [ResourceNotFoundError](../../../../src/core/errors/resource-not-found-error.ts)
- nenhum video cadastrado no DB
- Status: `400`
