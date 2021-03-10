import { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";
import { useForm } from "react-hook-form";

function DadosPessoais({ aoEnviar, aoVoltar }) {

  const [state, setState] = useState({
    promocoes: true,
    novidades: true,
  });

 

  const { register, handleSubmit, errors } = useForm({ mode: "onChange" });
  
  const onSubmit = (data) => console.log(data);

  function isValid(field) {
    if (field) {
      return true;
    } else {
      return false;
    }
  }

  const voltar = () => aoVoltar();



  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        inputRef={register({
          required: { value: true, message: "Campo obrigatório" },
          maxLength: {
            value: 25,
            message: "O tamanho máximo é de 25 caracteres",
          },
        })}
        error={isValid(errors.nome)}
        helperText={errors.nome && <span>{errors.nome.message}</span>}
        id="nome"
        name="nome"
        label="Nome"
        variant="outlined"
        type="text"
        fullWidth
        margin="normal"
      />

      <TextField
        inputRef={register({
          required: { value: true, message: "Campo obrigatório" },
          maxLength: {
            value: 25,
            message: "O tamanho máximo é de 25 caracteres",
          },
        })}
        error={isValid(errors.sobrenome)}
        helperText={errors.sobrenome && <span>{errors.sobrenome.message}</span>}
        id="sobrenome"
        name="sobrenome"
        label="Sobrenome"
        variant="outlined"
        type="text"
        fullWidth
        margin="normal"
      />

      <TextField
        inputRef={register({
          required: { value: true, message: "Campo obrigatório" },
          maxLength: {
            value: 25,
            message: "O tamanho máximo é de 25 caracteres",
          },
        })}
        error={isValid(errors.cpf)}
        helperText={errors.cpf && <span>{errors.cpf.message}</span>}
        id="cpf"
        name="cpf"
        label="CPF"
        variant="outlined"
        type="text"
        fullWidth
        margin="normal"
      />
      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            checked={state.promocoes}
            onChange={handleChange}
            inputRef={register}
            name="promocoes"
            color="primary"
            type="checkbox"
          ></Switch>
        }
      ></FormControlLabel>

      <FormControlLabel
        label="Novidades"
        
        control={
          <Switch
            checked={state.novidades}
            onChange={handleChange}
            inputRef={register}
            name="novidades"
            color="primary"
            type="checkbox"
            
          ></Switch>
        }
      ></FormControlLabel>
      <Button variant="contained" onClick={voltar}>Voltar</Button>

      <Button  variant="contained" color="primary" type="submit">
        Próximo
      </Button>
    </form>
  );
}

export default DadosPessoais;
