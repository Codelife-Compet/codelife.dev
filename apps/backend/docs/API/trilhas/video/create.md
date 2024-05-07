## /trail/island/level/slide/video

**Descrição:** cria um novo video de uma ilha

**Method:** `POST`

**Body**

```typescript
{
    youtubeId: string
    youtubePlaylistId: string
    slideId: string
}
```

**Success Response**: [Video](../../../../src/domain/trilhas/@entities/video.ts)
- retorna o video criado
- Status: `201`

**Error Response**: [ResourceAlreadyExistsError](../../../../src/core/errors/resource-already-exists-error.ts)
- video já existe
- Status: `400`