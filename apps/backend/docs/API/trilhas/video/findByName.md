## /trail/island/level/slide/video/name

**Descrição:** retorna o video com o nome especificado

**Method:** `GET`

**Body**:

```typescript
{
    slideId: string   // id do slide
    youtubeId: string // id do video do youtube
}
```

**Success Response**: [Video](../../../../src/domain/trilhas/@entities/video.ts)
- retorna o video com o nome especificado
- Status: `201`

**Error Response**: [ResourceNotFoundError](../../../../src/core/errors/resource-not-found-error.ts)
- nenhumo video com o nome especificado existe no DB
- Status: `400`

