/* Código comentado com useState */

import React, { useState, useEffect } from "react";
import { TextField, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";

function DadosUsuario({ aoEnviar, dados }) {
  //const [email, setEmail] = useState("");
  //const [senha, setSenha] = useState("");
  //const [errors, setErros] = useState({ senha: { valido: true, texto: "" } });

  const { register, handleSubmit, errors, setValue } = useForm({ mode: "onChange" });

  const onSubmit = (data) => aoEnviar(data);

   useEffect(() => {
      setValue('email', dados.email);
      setValue('senha', dados.senha);   
  }, [dados])

  function isValid(field) {
    if (field) {
      return true;
    } else {
      return false;
    }
  }

  // const handleChange = (event) => {
  //   console.log(event.target.name, event.target.value)
  //   setDados({ ...dados, [event.target.name]: event.target.value });
  // };

  return (
    <form
      /*onSubmit={(event) => {
        event.preventDefault();
          
      }}*/
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        /*value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}*/
        inputRef={register({
          required: {
            value: true,
            message: "Campo obrigatório",

          },
          maxLength: {
            value: 60,
            message: "O tamanho máximo é de 60 caracteres",
          },
        })}
        error={isValid(errors.email)}
        helperText={errors.email && <span>{errors.email.message}</span>}
        name="email"
        id="emai"
        type="email"
        label="E-mail"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        /*value={senha}
        onChange={(event) => {
          setSenha(event.target.value);
        }}*/
        inputRef={register({
          required: { value: true, message: "Campo obrigatório" },
        })}
        error={isValid(errors.senha)}
        helperText={errors.senha && <span>{errors.senha.message}</span>}
        id="senha"
        name="senha"
        type="password"
        label="Senha"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}

export default DadosUsuario;
