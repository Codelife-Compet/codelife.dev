export default function Entrar() {
  return (
    <>
      <div className="overlay"></div>
      <div className="entre-container">
        <h1 className="btn-exit">×</h1>
        <div className="first-container">
          <h1>Entre</h1>
        </div>
        <div className="second-container">
          <div className="left-box">
            <h3 className="label-text">Endereço de e-mail</h3>
            <form action="#" className="form">
              <input className="input-box" type="text"></input>
            </form>
            <div className="label-2">
              <h3 className="label-text">Senha</h3>
              <a>Esqueci minha senha</a>
            </div>
            <form action="#" className="form">
              <input className="input-box" type="text"></input>
            </form>
            <button className="btn-entrar">Entrar</button>
          </div>
          <div className="middle-box">
            <h1>Ou</h1>
          </div>
          <div className="right-box">
            <button className="btn-twitter">Entrar com Twitter</button>
            <button className="btn-facebook">Entrar com Facebook</button>
            <button className="btn-instagram">Entrar com Instagram</button>
          </div>
        </div>
        <div className="third-container">
          <h3>Ainda não tem uma conta?</h3>
          <a href="#">Crie uma conta</a>
        </div>
      </div>
    </>
  )
}
