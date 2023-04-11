import { v4 as uuid } from "uuid"
import { User, UserPermissions } from "@/@types/user"
interface SignInRequestData {
  email: string,
  password: string
}
interface SignInResponse {
  token: string,
  user: User
}
interface RecoverRequestData {
  token: string
}interface RecoverResponseData {
  user: User
}
const delay = (amount = 750) => new Promise(resolve => setTimeout(resolve, amount))
/* Mock the SignIn route from the backend */
export async function signInRequest(data: SignInRequestData): Promise<SignInResponse> {
  await delay()
  // signIn logic (using fetch or axios...)
  return {
    token: uuid(),
    user: {
      name: "henrique",
      email: "tec.henriquedepaula@gmail.com",
      permission: UserPermissions.regular,
      avatar_url: "https://github.com/bidwolf.png"

    }
  }
}
/* Mock the route that return the info of a token creation like the user,
 the timestamp or whatever you want*/
export async function recoverUserInformation(data: RecoverRequestData): Promise<RecoverResponseData> {
  await delay()
  // Recover logic (using fetch or axios...)
  const user = {
    name: "henrique",
    email: "tec.henriquedepaula@gmail.com",
    permission: UserPermissions.regular,
    avatar_url: "https://github.com/bidwolf.png"
  }
  return { user }
}