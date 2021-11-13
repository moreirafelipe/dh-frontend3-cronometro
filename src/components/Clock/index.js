/* eslint-disable react/no-direct-mutation-state */
import { Component } from 'react';
import './styles.css';

//recupera o atributo second para renderização
function GetTimer(props) {
  return <h2>{props.second}</h2>;
}

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { second: 60, valorBtn: "Pausar" };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentDidUpdate(secondState) {
    if (secondState === 0) {
      clearInterval(this.timerID);
    }
  };

  componentWillUnmount() {
    clearInterval(this.timerID);
    this.setState({
      valorBtn: "Continuar"
    })
  }


  tick() {
    this.setState({
      second: this.state.second -= 1
    });
    this.componentDidUpdate(this.state.second);
  }

  //Controla estado dos botoes e impede que o contador fique pulando
  defineCronometer() {
    if (this.state.second === 0)
      return;
    else if (this.state.valorBtn === "Pausar") {
      this.componentWillUnmount();
    } else {
      this.componentDidMount();
      this.setState({
        valorBtn: "Pausar"
      })
    }
  }

  restartCounter() {
    if (this.state.valorBtn === "Continuar" || this.state.second === 0) this.componentDidMount();
    this.setState({
      second: this.state.second = 60,
      valorBtn: "Pausar"
    });
  }

  render() {
    return (
      <div>
        <h1>Cronometro</h1>
        <h2><GetTimer second={this.state.second} /></h2>
        <button className="btn btn-danger m-3" onClick={this.defineCronometer.bind(this)}>{this.state.valorBtn}</button>
        <button className="btn btn-info" onClick={this.restartCounter.bind(this)}>Reiniciar</button>
      </div>
    );
  }
}