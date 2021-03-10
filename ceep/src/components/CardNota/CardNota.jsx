import React, { Component } from "react";

class CardNota extends Component {
  apagar() {
    const indice = this.props.indice;
    this.props.apagarNota(indice);
  }

  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
          <div onClick={this.apagar.bind(this)}>Deletar</div>
        </header>
        <p>{this.props.categoria}</p>
        <p className="card-nota_texto">{this.props.texto}</p>
      </section>
    );
  }
}

export default CardNota;
