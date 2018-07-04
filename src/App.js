import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ModalDialog from './ModalDialog';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleModal : false,
      content: '',
    };
  }

  render() {
    const contents = {
      modal1 : {philosophy: 'But a desperate heart will seduce the mind.', author: 'Mitch Albom, The Time Keeper'},
      modal2 : {philosophy: 'Life has no remote....get up and change it yourself!', author: ' Mark A. Cooper, Operation Einstein'},
      modal3 : {philosophy: 'You were born to stand out, stop trying to fit in.', author: ' Roy T. Bennett, The Light in the Heart'},
    };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Modal with Bootstrap</h1>
        </header>
        <br/>
        <div className="container">
          <div className="row">
          {this.modalElement('Philosophy 1', contents.modal1)} <br/>
          {this.modalElement('Philosophy 2', contents.modal2)} <br/>
          {this.modalElement('Philosophy 3', contents.modal3)} <br/>
          </div>
        </div>

        <ModalDialog toggle={this.state.toggleModal} content={this.state.content} closeDialog={() => this.onClose()}></ModalDialog>
      </div>
    );
  }

  modalElement(name, content) {
    return (
      <div className="col-sm">
        <div className="card" style={{width: '18rem'}}>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{content.philosophy}</p>
            <input type="button" onClick={ () => this.onOpen(content) } value="Modal" className="btn btn-sm btn-dark"/>
          </div>
        </div>
      </div>
    );
  }

  onOpen(content) {
    document.body.classList.add('modal-open');
    document.getElementById('backDropDiv').classList.add('modal-backdrop', 'fade', 'show');
    this.setState({
      toggleModal:true,
      content
    });
  }

  onClose() {
    document.body.classList.remove('modal-open');
    document.getElementById('backDropDiv').classList.remove('modal-backdrop', 'fade', 'show');
    this.setState({
      toggleModal:false,
      content : ''
    });
  }
}

export default App;
