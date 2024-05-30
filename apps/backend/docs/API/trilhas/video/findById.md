## /trail/island/level/slide/video/id/:id

**Descrição:** retorna o video com o id especificado

**Usuario Logado:** Sim

**Administrador:** Não

**Method:** `GET`

**Body**: nao ha

**Params**: em `:id` deve ser passado o id do video

**Success Response**: [Video](../../../../src/domain/trilhas/@entities/video.ts)
- retorna o video com o id especificado
- Status: `201`

**Error Response**: [ResourceNotFoundError](../../../../src/core/errors/resource-not-found-error.ts)
- nenhum video com o id especificado existe no DB
- Status: `400`

