/* eslint-disable react/no-direct-mutation-state */
import { Component } from 'react';
import './styles.css';

export default class Clock extends Component {
 
  constructor(props) {
    super(props);
    this.state = { second: 60, situation: true };
  }

  render() {
    return (
      <div>
        <h1>Cronometro</h1>
        <h2><GetTimer second={this.state.second} /></h2>
        <button className="btn btn-pause btn-danger" onClick={this.defineCronometer(this.state.situation)}>Pausar</button>
        <button className="btn btn-success m-2" onClick={this.componentDidMount.bind(this)}>Continuar</button>
        <button className="btn btn-info" onClick={this.restartCounter.bind(this)}>Reiniciar</button>
      </div>
    );
  }
}