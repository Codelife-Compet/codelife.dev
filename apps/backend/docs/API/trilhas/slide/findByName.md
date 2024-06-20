## /trail/island/level/slide/name

**Descrição:** retorna o slide com o nome especificado

**Usuario Logado:** Sim

**Administrador:** Não

**Method:** `GET`

**Body**:

```typescript
{
    slideName: string, // nome do slide
    levelId: string,    // id da trilha
}
```

**Success Response**: [Slide](../../../../src/domain/trilhas/@entities/slide.ts)
- retorna o slide com o nome especificado
- Status: `201`

**Error Response**: [ResourceNotFoundError](../../../../src/core/errors/resource-not-found-error.ts)
- nenhumo slide com o nome especificado existe no DB
- Status: `400`

