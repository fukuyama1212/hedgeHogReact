import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let title = "HedgeHog React 勉強会"

  let items = [
    { "name": "BTC/JPY", "price": "20.000" },
    { "name": "ETH/JPY", "price": "30.000" },
    { "name": "ETC/JPY", "price": "40.000" }
  ]

  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p style={{ coler: "white" }}>
            {title}
          </p>
        </header>
      </div>
      <div className="App container">
        <table className="table table-striped">
          <tbody>
            {items.map((value) => (
              <tr>
                <th scope="row">{value.name}</th>
                <td>{value.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h1 className="container text-center bg-dark text-white">
        <Clock />
      </h1>
    </>
  );
}

class Clock extends React.Component {


  constructor(props) {
    super(props);

    this.now = new Date();
    this.state = {
      time:  `${this.now.getHours()}:${this.now.getMinutes()}:${this.now.getSeconds()}`

    }

    this.refresh = this.refresh.bind(this);
  }

  refresh() {
    //window.alert("押しました。");

    this.now = new Date();

    this.setState((state) => ({
      time:  `${this.now.getHours()}:${this.now.getMinutes()}:${this.now.getSeconds()}`    
    }))
  }

  render() {
    return <p onClick={this.refresh}>{this.state.time}</p>
  }

}

export default App;
