import React, { Component } from "react";

class ListaDeCategorias extends Component {
  constructor () {
    super();
    this.state = {categorias:[]}

    this._novasCategorias = this._novasCategorias.bind(this);
  }

  componentDidMount () {
    this.props.categorias.inscrever(this._novasCategorias);
  }

  componentWillUnmount (){
    this.props.categorias.inscrever(this._novasCategorias);
  }

  _novasCategorias(categorias) {
    this.setState({...this.state, categorias})
  }

  _handleEventoInput(e) {
    if (e.key === "Enter") {
      let valorCategoria = e.target.value
      this.props.adicionarCategoria(valorCategoria)
    }
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.categorias.map((categoria, index) => {
            return <li key={index}>{categoria}</li>;
          })}
        </ul>
        <input type="text" onKeyUp={this._handleEventoInput.bind(this)} />
      </div>
    );
  }
}

export default ListaDeCategorias;
