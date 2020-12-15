import React from "react";
import { Redirect } from "react-router-dom";
import Logo from "../../assets/logopp.png";
import Button from "../../components/Form/Button/Button";
import Input from "../../components/Form/Input/Input";
import { UserContext } from "../../UserContext";
import Head from '../../components/Helper/Head'

import * as S from "./style";

const Login = () => {
  const [form, setForm] = React.useState({
    email: "",
    senha: "",
  });
  const { userLogin, erro, loading, login } = React.useContext(UserContext);

  if (login) {
    return <Redirect to={{ pathname: "/bm" }} />;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (form.email !== "" && form.senha !== "") {
      userLogin(form.email, form.senha);
    }
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({
      ...form,
      [id]: value,
    });
  }

  return (
    <S.SectionLogin>
      <Head title="Login" />
      <S.LogoDiv>
        <img src={Logo} alt="Logo da BM" />
      </S.LogoDiv>
      <S.ContainerMain>
        <S.ImageLogin></S.ImageLogin>
        <S.GridLogin>
          <S.ContainerForm className="animeLeft">
            <i className="far fa-4x fa-user-circle"></i>
            <form onSubmit={handleSubmit}>
              <Input
                value={form.email}
                onChange={handleChange}
                required
                type="email"
                id="email"
                label="Email"
              />
              <Input
                value={form.senha}
                onChange={handleChange}
                required
                id="senha"
                label="Senha"
                type="password"
              />
              <a href="/login">Esqueceu a senha ?</a>

              <a href="/cadastro">Não possui conta ?</a>
              {loading ? <Button disabled>Carregando</Button> : 
                <Button>Entrar</Button>
              }
            </form>
            {erro && <p>{erro}</p>}
          </S.ContainerForm>
        </S.GridLogin>
      </S.ContainerMain>
    </S.SectionLogin>
  );
};

export default Login;
