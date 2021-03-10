import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas/ListaDeNotas";
import ListadeCategorias from "./components/ListaDeCategorias/ListaDeCategorias"
import Categorias from "./dados/Categorias"
import ArrayDeNotas from "./dados/Notas";

class App extends Component {
  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  }

  render() {
    return (
      <div>
        <FormularioCadastro 
        criarNota={this.notas.adicionarNota.bind(this.notas)} 
        categorias={this.categorias}
        />

        <main>
          <ListadeCategorias 
          categorias={this.categorias}
          adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
          />
        </main>
        <ListaDeNotas
          notas={this.notas}
          apagarNota={this.notas.deletarNota.bind(this.notas)}
        />
      </div>
    );
  }
}

export default App;
