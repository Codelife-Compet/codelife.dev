import { PropsWithChildren, createContext, useContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from "nookies";
import { User } from "@/@types/user";
import { recoverUserInformation, signInRequest } from "@/services/auth";
interface SignInData {
  email: string,
  password: string
}
import { useRouter } from "next/router";
import { api } from "@/services/api";
interface AuthContextType {
  user: User
  signIn: (data: SignInData) => Promise<void>,
  isAuthenticated: boolean
}
export const AuthContext = createContext<AuthContextType>({} as AuthContextType)
export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User>()
  const router = useRouter()
  const { locale } = router
  async function signIn({ email, password }: SignInData) {
    if (user) {
      router.push(`${locale}/dashboard`)
      return
    };
    const { token, user: userAuthenticated } = await signInRequest({
      email,
      password
    })
    const cookieName = "codelifeAuth-token" // the client-server Cookie name 
    const maxAge = 60 * 60 * 1  // 1 hour
    setCookie(undefined, cookieName, token, {
      maxAge,
    })
    setUser(userAuthenticated)

    // This will update the Authorization Header from the api axios client
    api.defaults.headers["Authorization"] = `Bearer ${token}`
    router.push(`${locale}/dashboard`)
  }
  useEffect(() => {
    const { "codelifeAuth-token": token } = parseCookies()
    if (token) {
      recoverUserInformation({ token }).then(response => {
        console.log(response.user);

        setUser(response.user)
      })
      router.push(`${locale}/dashboard`)
    }
  }, [])
  return (
    <AuthContext.Provider value={{ user: user as User, isAuthenticated: !!user, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}
export const useAuth = ()=>useContext(AuthContext)
