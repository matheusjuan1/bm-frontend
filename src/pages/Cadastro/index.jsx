import React from "react";
import * as S from "../Login/style";
import Logo from "../../assets/logopp.png";
import Input from "../../components/Form/Input/Input";
import { Button } from "../../components/Form/Button/style";
import { UserContext } from "../../UserContext";
import api from "../../services/api";
import { Redirect } from "react-router-dom";
import Head from '../../components/Helper/Head'

const Cadastro = () => {
  const [form, setForm] = React.useState({
    email: "",
    senha: "",
    nome: "",
    empresa: ""
  });

  const { userLogin,erro, loading, login } = React.useContext(UserContext);

  if (login) {
    return <Redirect to={{ pathname: "/" }} />;
  }

  async function handleSubmit(event) {
      event.preventDefault();
      await api.post('/usuario/cadastrar', {
          nome: form.nome,
          email: form.email,
          senha: form.senha,
          empresa: form.empresa
      }).then(function () {
        userLogin(form.email,form.senha);
      })
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
      <Head title="Cadastro" />
      <S.LogoDiv>
        <img src={Logo} alt="Logo da BM" />
      </S.LogoDiv>
      <S.ContainerMain>
        <S.ImageLogin></S.ImageLogin>
        <S.GridLogin>
          <S.ContainerForm className="animeLeft">
            <form onSubmit={handleSubmit}>
                <Input 
                 value={form.nome}
                 onChange={handleChange}
                 required
                 id="nome"
                 label="Nome"
                />
              <Input
                value={form.email}
                onChange={handleChange}
                required
                type="email"
                id="email"
                label="Email"
              />
              <Input
                value={form.empresa}
                onChange={handleChange}
                required
                id="empresa"
                label="Nome da Empresa"
              />
              <Input
                value={form.senha}
                onChange={handleChange}
                required
                id="senha"
                label="Senha"
                type="password"
              />
              <Input
                value={form.senha}
                onChange={handleChange}
                required
                id="confsenha"
                label="Confirmar Senha"
                type="password"
              />
              <a href="/login">Já possui conta ?</a>
              {loading ? (
                <Button disabled>Carregando</Button>
              ) : (
                <Button>Cadastrar</Button>
              )}
            </form>
            {erro && <p>{erro}</p>}
          </S.ContainerForm>
        </S.GridLogin>
      </S.ContainerMain>
    </S.SectionLogin>
  );
};

export default Cadastro;
