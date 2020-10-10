import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header judul="Halo" isi="tahu" />
        <Counter />
        <Header judul="Hai" isi="tahu2" />
        <Counter />
        <Header judul="Hola" isi="tahu3" />
        <Counter />
      </div>
    );
  }
}

export default App;

class Header extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.judul}</h1>
        <p>{this.props.isi}</p>
      </div>
    );
  }
}

class Counter extends Component {
  state = {
    number: 0
  };

  increment = () => {
    this.setState({
      number: this.state.number + 1
    });
  };

  decrement = () => {
    if (this.state.number == 0) {
      return alert('Jangan Minus woy!');
    }
    this.setState({
      number: this.state.angka - 1
    });
  };
  render() {
    return (
      <div>
        <h2 style={{}}>{this.state.number}</h2>
        <button onClick={this.increment}>Incremen</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}
