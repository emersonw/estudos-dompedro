import React, { useState, Fragment, useEffect } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";
import { Typography, Stepper, Step, StepLabel } from "@material-ui/core";
import { useForm } from "react-hook-form";

function FormularioCadastro({ aoEnviar }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDados] = useState({});
  // const usuarioForm = useForm({ mode: "onChange" });

  useEffect(() => {
    if (etapaAtual === formularios.length - 1) {
      aoEnviar(dadosColetados);
    }
  });

  console.log('Yay')

  const formularios = [
    <DadosUsuario aoEnviar={coletarDados} dados={dadosColetados}
    />,
    <DadosPessoais aoEnviar={coletarDados} aoVoltar={anterior}/>,
    <DadosEntrega aoEnviar={coletarDados} />,
    <Typography variant="h5" align="center">
      Obrigado pelo cadastro!
    </Typography>,
  ];

  function coletarDados(dados) {
    setDados({ ...dadosColetados, ...dados });
    proximo();
  }

  function proximo() {
    setEtapaAtual(etapaAtual + 1);
  }

  function anterior(dados) {
    console.log(dadosColetados)
    setEtapaAtual(etapaAtual - 1);
  }

  return (
    <Fragment>
      <Stepper activeStep={etapaAtual}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Pessoal</StepLabel>
        </Step>
        <Step>
          <StepLabel>Entrega</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalização</StepLabel>
        </Step>
      </Stepper>
      {formularios[etapaAtual]}
    </Fragment>
  );
}

export default FormularioCadastro;
