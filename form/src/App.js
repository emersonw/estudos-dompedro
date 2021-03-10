import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";
import "fontsource-roboto";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { Fragment } from "react";
import styled from 'styled-components';

const Typography2 = styled(Typography)`
  color: red;
`
function App() {
  
  return (
    <Fragment>
      <BrowserRouter>
        <Link to="/">
          <p>Início</p>
        </Link>
        <Link to="/sobre">
          <p>Sobre</p>
        </Link>

        <Switch>
          <Route exact path="/">
            <Container component="article" maxWidth="sm">
              <Typography2>teste</Typography2>
              <Typography variant="h3" component="h1" align="center">
                Formulário de cadastro
              </Typography>
              
                <FormularioCadastro aoEnviar={aoEnviarForm} />
            </Container>
          </Route>
          <Route path="/sobre">
            <h1>Sobre</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

function aoEnviarForm(dados) {
  console.log(dados);
}

export default App;
