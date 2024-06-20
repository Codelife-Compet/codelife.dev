## /user/

**Descrição:** cria um novo usuário no banco de dados, caso já não exista

**Usuario Logado:** Sim

**Administrador:** Sim

**Method:** `POST`

**Body**

```json
{
    "user": {
        "name": string,
        "email?": string,
        "image?": string
    },
    
    "account": {
        "provider": string,
        "type": "oauth" | "email" | "credentials",
        "providerAccountId": string
    }
}
```

**Success Response**

Status: `201`

```json
{
    "role": "USER",
    "score": number,
    "name?": string | null,
    "email?": string | null,
    "emailVerified?": Date | null,
    "image?": string | null,
    "password?": string | null,
    "teamId?": string | null,
    "accounts?": Account[], // empty
}
```

**Error Response**

Status: `400`

```json
ResourceAlreadyExistsError
```

OBS: `ResourceAlreadyExistsError` é um erro que ocorre quando o usuário já existe no banco de dados