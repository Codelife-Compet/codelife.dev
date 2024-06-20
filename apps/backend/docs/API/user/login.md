## /user/login

**Descrição:** realiza login de um usuário já existente no sistema

**Usuario Logado:** Não

**Administrador:** Não

**Method:** `POST`

**Body**

```json
{
    "type": "email" | "github" | "google" | "facebook",
    "token?": string,
    "email?": string,
    "password?": string
}
```

**Success Response**

Status: `201`

```json
{
    "tokenJwt": string
}
```

- Armazena um refresh token no cookie do cliente
