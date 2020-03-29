import React from 'react';
import Quiz from './components/quiz'
import Modal from 'react-modal';

Modal.setAppElement('#root')
class App extends React.Component {
  constructor(props) {
  super(props)
    this.state = {
      modalIsOpen: false
    };
  }
  
  openModal =() => {
    this.setState({modalIsOpen: true});
  }
  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  render(){
    return(
      <React.Fragment>
        <header></header>
        <main>
          <div className="wrap">
            <button onClick={this.openModal}>初級</button>
            <Modal isOpen={this.state.modalIsOpen} contentLabel="Example Modal"> <Quiz/> <button onClick={this.closeModal}>close</button> </Modal>
          </div>
        </main>
        <footer></footer>
      </React.Fragment>
    )
  }
}
export default App;
