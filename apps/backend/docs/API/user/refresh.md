## /user/refresh

**Descrição:** Chamada quando o token do usuário expirar. Confere se este possui um refreshToken válido, gera um novo token e um refreshToken para o usuário

**Usuario Logado:** Sim

**Administrador:** Não

**Method:**: `PATCH`

**Body**: não há

**Success Response**

Status: `201`

```json
{
    "token": string
}
```
- Armazena um novo refresh token no cookie do cliente