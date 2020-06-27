import React from 'react';
import './App.css';
import SplitPane from 'react-split-pane';

import Modal from 'react-modal';
// npm install react-modal

import Icon1 from './photo/1000.jpg'
import Icon2 from './photo/1001.jpg'
import Icon3 from './photo/1002.jpg'
import Icon4 from './photo/1003.jpg'
import Icon5 from './photo/1004.jpg'

import movie from './images/sample06.mp4'

const customStyles = {
  content : {
    top                   : '30%',
    left                  : '30%',
    right                 : '30%',
    bottom                : '30%',
    marginRight           : '-30%',
    transform             : 'translate(-30%, -30%)'
 }
};

const IconComponent = () =>{
  return (
    <div>
      <img src={Icon1} alt="" /><img src={Icon2} alt=""/><img src={Icon3} alt=""/><img src={Icon4} alt=""/>
      <img src={Icon2} alt=""/>
      <img src={Icon3} alt=""/>
      <img src={Icon4} alt=""/>
      <img src={Icon5} alt=""/>
    </div>
  )
}

export const Sample = () => {
  const style = {
      border: '3px solid black'
  };
  return (
      <div>
          <SplitPane split="vertical" minSize={10} defaultSize="40%">
          {/* <div style={style}>test1<br/>test1<br/></div>
          <div style={style}>test2<br/>test2<br/></div> */}
            {/* <img src={Icon1} style={style} alt="" /> */}
            {/* <IconComponent style={style} alt="" /> */}
          </SplitPane>
      </div>
  )
}

class Sample2 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      icon: Icon1,
      icon2: Icon2
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.setIcon = this.setIcon.bind(this);
    // this.icon = this.icon.bind();
  }
  openModal() {
    this.setState({modalIsOpen: true});
  }
  afterOpenModal() {
    this.subtitle.style.color = '#f00';
  }
  closeModal() {
    this.setState({modalIsOpen: false});
  }
  setIcon = (iconXX) => {
    if(iconXX == "Icon1"){
      this.setState({icon: Icon2});
      this.state.icon = Icon2;
    }    
    this.setState({icon: Icon2});
    this.state.icon = Icon2;
    this.icon = Icon2;
    //console.log(iconXX);
    //return this.icon = iconXX;
  }
  
  render() {
    return (
      <>
      <div>
        <div className="background">
          {/* <button onClick={() => this.setIcon.bind("Icon1"), this.openModal} className="styleSample1"><img src={Icon1} alt="" className="styleSample2"/></button> */}
          {/* <button onClick={() => this.setIcon(), this.openModal} className="styleSample1"><img src={Icon1} alt="" className="styleSample2"/></button> */}
          {/* <button onClick={() => this.setIcon(Icon3), this.openModal} className="styleSample1"><img src={Icon1} alt="" className="styleSample2"/></button> */}
          <button onClick={() => this.setState({ icon2: Icon4 }), this.openModal} className="styleSample1">
            <img src={this.state.icon} alt="" className="styleSample2"/>
          </button>
          <button onClick={this.openModal} className="styleSample1"><img src={Icon2} alt="" className="styleSample2"/></button>
          <button onClick={this.openModal} className="styleSample1"><img src={Icon3} alt="" className="styleSample2"/></button>
          <button onClick={this.openModal} className="styleSample1"><img src={Icon4} alt="" className="styleSample2"/></button>
          <button onClick={this.openModal} className="styleSample1"><img src={Icon5} alt="" className="styleSample2"/></button>
          <button onClick={this.openModal} className="styleSample1"><img src={Icon1} alt="" className="styleSample2"/></button>
          <img src={this.state.icon} alt=""/>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
          <h2 ref={subtitle => this.subtitle = subtitle}>ModalWindow</h2>
          <img src={this.state.icon} alt=""/>
          {/* <button onClick={this.closeModal}>close</button> */}
          </Modal>
        </div>
      </div>
        {/* <p>Brilliant Blue</p>
        <div class="video-wrap">
          <p>Brilliant Blue</p>
          <video id="bg-video" src={movie} autoplay loop muted>
            <img src={Icon1} alt="Placeholder"></img>
          </video>
        </div> */}
      {/* <div>
        <div className="wrap">
          <video id="bg-video" src={movie} autoPlay loop></video>
          <div className="header-title">
            <p>
              コンテンツが入ります
            </p>
          </div>
        </div>
      </div> */}
      </>
    )
  }
}

function popup(){

  return 0;
}


function App() {

  const style = {
    width: "50%",
    margin: "0 auto",
    marginTop: 150
  };

  return (
    <>
      {/* <div className="App">
        <header className="App-header">
          <IconComponent />
        </header>
      </div> */}
      {/* <div style={style} >
        <Sample />
      </div> */}
      <Sample2 />
    </>
  );
}

export default App;
