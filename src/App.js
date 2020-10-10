import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <CounterCard>
          <Header judul="Counter One" isi="This is the first counter!" />
          <Counter />        
        </CounterCard>
      
        <CounterCard>
          <Header judul="Counter Two" isi="This is the second counter!" />
          <Counter />        
        </CounterCard>
      
        <CounterCard>
          <Header judul="Counter Three" isi="This is the third counter!" />
          <Counter />        
        </CounterCard>
      </div>
    );
  }
}

export default App;

class Header extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.judul}</h3>
        <p>{this.props.isi}</p>
      </div>
    );
  }
}

class CounterCard extends Component {
  render() {
    return (
      <div style={{padding:"20px", background:"white", boxShadow:"0px 0px 15px rgba(0, 125, 197, 0.06)", borderRadius:"10px" }}>
      {this.props.children}
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
