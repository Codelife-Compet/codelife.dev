## /ranking/teams/:levelId/:teamId

**Descrição:** retorna o rankemento interno dentro do time por nível

**Usuario Logado:** Sim

**Administrador:** Não

**Method:** `GET`

**Body**: nao ha

**Success Response**: [PonctuationProps](../../../src/domain/trilhas/@entities/ponctuation.ts) []
- retorna a pontuação e o nome do usuario
- Status: `201`
- retorna o nome do time e a pontuacao do time
- Status: `201`

**Error Response**: [ResourceNotFoundError](../../../../src/core/errors/resource-not-found-error.ts)
- nenhumo time cadastrada no DB
- Status: `400`
