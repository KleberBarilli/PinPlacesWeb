import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import StarfieldAnimation from 'react-starfield-animation'
import { FaGithub } from 'react-icons/fa';
import logo from "../../assets/logo2.png";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signUp, loadingAuth } = useContext(AuthContext);

  function handleSubmit(e) {
    e.preventDefault();

    if (name !== "" && email !== "" && password !== "") {
      signUp(name, email, password);
    }
  }

  return (
    <div className="container-center">
        <StarfieldAnimation
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          
        }}
      />
      <div className="login">
        <h3>OnPlaces App</h3>
        <div className="login-area">
          <img src={logo} alt="Logo" />
        </div>

        <a
          href="https://github.com/KleberBarilli/OnPlaces"
          target="_blank"
          rel="noreferrer"
          className="github"
        >
          Contribua com o projeto no GitHub{" "}
        </a>

        <a
          href="https://github.com/KleberBarilli/OnPlaces"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size={25} />
        </a>
        <form onSubmit={handleSubmit}>
          <div className="campos">
          <h1>Cadastrar</h1>
          <input
            type="text"
            placeholder="nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="email@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="*******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /></div>
          <button type="submit">
            {loadingAuth ? "Carregando..." : "Cadastrar"}
          </button>
        </form>
        <Link to="/">Já tem uma conta? Entre</Link>
      </div>
    </div>
  );
}

export default SignUp;
