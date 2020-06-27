import React from 'react'
import "./App.css"
import { BrowserRouter, Route, Link } from 'react-router-dom'

class Popup extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>{this.props.text}</h1>
        <button onClick={this.props.closePopup}>close me</button>
        </div>
      </div>
    );
  }
}

class popup1 extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  render() {
    return (
      <>
        <div>
          <p><Link to="/popup2">popup2</Link></p>
        </div>
        <div className='app'>
          <h1>HedgeHog React Servise</h1>
          <button onClick={this.togglePopup.bind(this)}>show popup</button>
          {/* {this.state.showPopup ? 
            <Popup
              text='Close Me'
              closePopup={this.togglePopup.bind(this)}
            />
            : null
          } */}
            <Popup
              text='Close Me'
              closePopup={this.togglePopup.bind(this)}
            />
        </div>
      </>
    );
  }
};


class popup2 extends React.Component {

  openWin() {
    var myWindow;
    myWindow = window.open("", "myWindow", "width=200,height=100");
    myWindow.document.write("<p>ポップアップ表示だよ</p>");
  }
  myFunction() {
    var popup2 = document.getElementById("myPopup");
    popup2.classList.toggle("show");
  }

  render() {
    
    return (
      <>
        <h2>CSSを使ったポップアップ</h2>
        <div>
          <button onClick={() => this.openWin()}>
            新しいウィンドウで<br></br>ポップアップを表示
          </button>
        </div> 
        <div className="popup2" onClick={() => this.myFunction()}>
          <br></br>
          ここをクリックしてみて下さい！
          <span className="popuptext" id="myPopup">
            PopUp!!!
          </span>
        </div>
      </>
    );
  }
};

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={popup1} />
      <Route path="/popup2" component={popup2} />
    </div>
  </BrowserRouter>

)

export default App;
