## /team/

**Descrição:** cria um novo time

**Usuario Logado:** Sim

**Administrador:** Sim

**Method:** `POST`

**Body**

```typescript
{
    name: string              // nome do time
    institutionName: string   // nome da instituição
    institutinPicture: string // url da imagem da instituição
}
```

**Success Response**: [Team](../../../src/domain/ranking/@entities/team.ts)
- retorna a ilha criada
- Status: `201`

**Error Response**: [ResourceAlreadyExistsError](../../../../src/core/errors/resource-already-exists-error.ts)
- ilha já existe
- Status: `400`