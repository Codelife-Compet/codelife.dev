## /trail/island/level/slide/usercode/list

**Descrição:** retorna todas os userCodes cadastrados

**Method:** `GET`

**Body**: nao ha

**Success Response**: [UserCode](../../../../src/domain/trilhas/@entities/userCode.ts) [] 
- retorna todas os userCodes cadastrados
- Status: `201`

**Error Response**: [ResourceNotFoundError](../../../../src/core/errors/resource-not-found-error.ts)
- nenhum userCode cadastrado no DB
- Status: `400`
