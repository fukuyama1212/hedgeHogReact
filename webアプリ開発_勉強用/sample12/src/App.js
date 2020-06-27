import React from 'react';
import './App.css';

//npm install react-split-pane
import SplitPane from 'react-split-pane';
// npm install react-modal
import Modal from 'react-modal';


import Icon1 from './photo/1000.jpg'
import Icon2 from './photo/1001.jpg'
import Icon3 from './photo/1002.jpg'
import Icon4 from './photo/1003.jpg'
import Icon5 from './photo/1004.jpg'


class Sample2 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal = (iconX) => {
    this.setState({ icon: iconX });
    this.setState({modalIsOpen: true});
  };
  
  afterOpenModal() {
    this.subtitle.style.color = '#f00';
  }
  closeModal() {
    this.setState({modalIsOpen: false});
  }

  
  render() {
    return (
      <>
      <div>
        <div className="background">
          <button onClick={() => this.openModal(Icon1)} className="styleSample1"><img src={Icon1} alt="" className="styleSample2"/></button>
          <button onClick={() => this.openModal(Icon2)} className="styleSample1"><img src={Icon2} alt="" className="styleSample2"/></button>
          <button onClick={() => this.openModal(Icon3)} className="styleSample1"><img src={Icon3} alt="" className="styleSample2"/></button>
          <button onClick={() => this.openModal(Icon4)} className="styleSample1"><img src={Icon4} alt="" className="styleSample2"/></button>
          <button onClick={() => this.openModal(Icon5)} className="styleSample1"><img src={Icon5} alt="" className="styleSample2"/></button>
          <button onClick={() => this.openModal(Icon1)} className="styleSample1"><img src={Icon1} alt="" className="styleSample2"/></button>
          <button onClick={() => this.openModal(Icon2)} className="styleSample1"><img src={Icon2} alt="" className="styleSample2"/></button>
          <button onClick={() => this.openModal(Icon3)} className="styleSample1"><img src={Icon3} alt="" className="styleSample2"/></button>
          <button onClick={() => this.openModal(Icon4)} className="styleSample1"><img src={Icon4} alt="" className="styleSample2"/></button>
          <button onClick={() => this.openModal(Icon5)} className="styleSample1"><img src={Icon5} alt="" className="styleSample2"/></button>
          <button onClick={() => this.openModal(Icon1)} className="styleSample1"><img src={Icon1} alt="" className="styleSample2"/></button>
          <button onClick={() => this.openModal(Icon2)} className="styleSample1"><img src={Icon2} alt="" className="styleSample2"/></button>
          <button onClick={() => this.openModal(Icon3)} className="styleSample1"><img src={Icon3} alt="" className="styleSample2"/></button>
          <button onClick={() => this.openModal(Icon4)} className="styleSample1"><img src={Icon4} alt="" className="styleSample2"/></button>
          <button onClick={() => this.openModal(Icon5)} className="styleSample1"><img src={Icon5} alt="" className="styleSample2"/></button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            className="customStyles"
            contentLabel="Example Modal"
          >
          <h2 ref={subtitle => this.subtitle = subtitle}>ModalWindow</h2>
          <img src={this.state.icon} alt="" className="styleSample3" />
          </Modal>
        </div>
      </div>
      </>
    )
  }
}

function App() {

  return (
    <>
      <Sample2 />
    </>
  );
}

export default App;
