import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

function DadosEntrega({ aoEnviar }) {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ cep, endereco, numero, cidade, estado });
      }}
    >
      <TextField
        value={cep}
        onChange={(event) => {
          setCep(event.target.value);
        }}
        id="cep"
        type="number"
        label="CEP"
        margin="normal"
        variant="outlined"
      />
      <TextField
        value={endereco}
        onChange={(event) => {
          setEndereco(event.target.value);
        }}
        id="endereco"
        type="text"
        label="Endereço"
        margin="normal"
        variant="outlined"
        fullWidth
      />
      <TextField
        value={numero}
        onChange={(event) => {
          setNumero(event.target.value);
        }}
        id="numero"
        type="number"
        label="Número"
        margin="normal"
        variant="outlined"
      />
      <TextField
        value={estado}
        onChange={(event) => {
          setEstado(event.target.value);
        }}
        id="estado"
        label="Estado"
        type="text"
        variant="outlined"
        margin="normal"
      />
      <TextField
        value={cidade}
        onChange={(event) => {
          setCidade(event.target.value);
        }}
        id="cidade"
        label="Cidade"
        type="text"
        margin="normal"
        variant="outlined"
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Finalizar cadastro
      </Button>
    </form>
  );
}

export default DadosEntrega;
