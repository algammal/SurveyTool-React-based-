import React, { Component } from 'react';
import Modal from "react-bootstrap/Modal";
import McqBox from './CheckMethod';
import serializeForm from 'form-serialize';

class  DataEdit extends Component {
  constructor() {
  	super();
    
    this.state = { checked: false , name:'' };
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange() {
  	this.setState({
    	checked: !this.state.checked
    })
  }
  
  handleSubmit = (e) =>{
    e.preventDefault();
    const values=serializeForm(e.target ,{ hash:true})
    console.log('values',values)
    if(this.props.onCreateDataEdit){
      this.props.onCreateDataEdit(values)
    }
}
  render(){
    const content = this.state.checked 
    	? <div> <McqBox/> </div>
      : null;
    return (
      <div key='modal'>
       <Modal show={this.props.showModal} onHide = {this.props.hideModal}>
          <Modal.Header>
            <Modal.Title>
            <button type="button" className="close" onClick = {this.props.hideModal}>&times;</button>
              <h4 className="modal-title">Type Question</h4>
            </Modal.Title>
          </Modal.Header>
          <form onSubmit={this.handleSubmit} >
          <Modal.Body>
                <div className="col-xs-12 input-answer">     
                  <input id="user_input" className="text-answer" type="text" name="answer" placeholder="Type your question"/>  
                </div>
                <div className="col-xs-12 question-type">
        
                  <div className="check-answer">
                    <input type="checkbox" id="mcq" checked={ this.state.checked } onChange={ this.handleChange } name="subscribe" value="newsletter"/>
                    <label className="chk-ans" htmlFor="mcq">MCQ</label>
                    <input className="chk-ans-input" type="checkbox" id="commentry" name="subscribe" value="newsletter"/>
                    <label className="chk-ans" for='commentry'>Commentry</label>
                  </div>
                  {content}
        </div>
          </Modal.Body>
          <Modal.Footer>
            <button  className="btn modal-submit-btn" type="submit" value="Submit">Submit</button>
                <button type="button" className="btn btn-default" onClick={this.props.hideModal}>Close</button>
          </Modal.Footer>
          </form>
        </Modal>
      </div>
    );
    }
  };
  export default DataEdit