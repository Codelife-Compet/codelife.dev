import Footer from "@/components/Footer";
import { AuthContext } from "@/context/auth/AuthContext";
import { api } from "@/services/api";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { useContext, useEffect } from "react";
/* This Page use the authorization context to show the user name in the header.
  For development only, you can see the request params in the client log or in the server log. 
*/
function Dashboard() {
  useEffect(() => {
    // Mock a possible implementation to test the Authorization header interceptor in the axios client in the client side
    // api.get("/users")
  }, [])
  const { user } = useContext(AuthContext)
  return (
    <>
      <nav>
        {user?.name}
      </nav>
      <main className="bg-codelife-green-500 w-full h-[100vh] flex flex-col dark:bg-codelife-black-600">
        Main content
      </main>
      <Footer />
    </>
  );
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ["codelifeAuth-token"]: token } = parseCookies(ctx)
  if (!token) {
    return {
      redirect: {
        destination: `/${ctx.locale}`,
        permanent: false
      }
    }
  }
  // Mock a possible implementation to test the Authorization header interceptor in the axios client in the server side
  // await api.get("/users")
  return {
    props: {}
  }
}

export default Dashboard;