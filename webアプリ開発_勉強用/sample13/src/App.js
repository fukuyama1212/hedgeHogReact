import React from 'react';
import './App.css';
// npm install react-modal
import Modal from 'react-modal';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal = () => {
    this.setState({modalIsOpen: true});
  };
  
  afterOpenModal() {
    this.subtitle.style.color = '#fff';
  }
  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <>
        {/* <div>
          <div className="background">
            <button onClick={() => this.openModal()}>
              <section>
                <div class="btn-trigger" id="btn01">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </section>
            </button>
            <div>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
            <div>aaaaaaaaaaaaaaaaaaaaa</div>
            <div>aaaaaaaaaaaaaaaaaaaaa</div>
            <div>aaaaaaaaaaaaa</div>
            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              className="test"
              contentLabel="Example Modal"
            >
              <div className="customStyles">
                <h2 ref={subtitle => this.subtitle = subtitle}>ModalWindow</h2>
              </div>
            </Modal>
          </div>
        </div> */}
          <div className="total">
          <input id="hamburger_menu" type="checkbox" />
          <label for="hamburger_menu" className="open">=</label>
          <label for="hamburger_menu" className="back"></label>
          <aside className="aside-menu">
            <label for="hamburger_menu" className="close">×</label>
            <nav>
              <ul className="list-menu">
                <li>list1</li>
                <li>list2</li>
                <li>list3</li>
                <li>list4</li>
              </ul>
            </nav>
          </aside>
          <div className="main">
              Main
          </div>
        </div>
      </>
    );
  }
}

export default App;
