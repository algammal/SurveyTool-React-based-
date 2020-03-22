import React, { Component } from 'react';
import Modal from "react-bootstrap/Modal";
import McqBox from './CheckMethod';
//import serializeForm from 'form-serialize';

class  DataEdit extends Component {
  constructor() {
  	super();
    
    this.state = { 
      mcqCheckBox: false ,
      commentryCheckBox:false,
       questionText:"",
       choices:[]
      };
    this.handleChange = this.handleChange.bind(this);
    this.handleCommentryChange = this.handleCommentryChange.bind(this);
  }
  addChoice = (choice) =>{
    let tempState = JSON.parse(JSON.stringify(this.state))
    tempState.choices[choice.id] = choice.choiceText
    this.setState(tempState);
  }
  
  handleChange() {
  	this.setState({
    	mcqCheckBox: !this.state.mcqCheckBox
    })
  }

  handleCommentryChange() {
  	this.setState({
    	commentryCheckBox: !this.state.commentryCheckBox
    })
  }

  handleQuestionText = (e) =>{
    let tempState = JSON.parse(JSON.stringify(this.state))
    tempState.questionText = e.target.value;
    this.setState(tempState)
  }
  
  handleSubmit = (e) =>{
    e.preventDefault();
   // const values=serializeForm(e.target ,{ hash:true})
    //console.log('values',values)
    //if(this.props.onCreateDataEdit){
     // this.props.onCreateDataEdit(values)
   // }
}

  saveModalData=()=>{
    console.log(this.state)
  }
  render(){
    const content = this.state.mcqCheckBox 
    	? <div> <McqBox  choiceFunction = {this.addChoice} /> </div>
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
                  <input id="user_input" className="text-answer" type="text" name="answer" onChange ={this.handleQuestionText} placeholder="Type your question"/>  
                </div>
                <div className="col-xs-12 question-type">
        
                  <div className="check-answer">
                    <input type="checkbox" id="mcq" checked={ this.state.mcqCheckBox } onChange={ this.handleChange } name="subscribe" value="newsletter"/>
                    <label className="chk-ans" htmlFor="mcq">MCQ</label>
                    <input className="chk-ans-input" type="checkbox" id="commentry" name="subscribe" onChange={ this.handleCommentryChange } value="newsletter"/>
                    <label className="chk-ans" htmlFor='commentry'>Commentry</label>
                  </div>
                  {content}
        </div>
          </Modal.Body>
          <Modal.Footer>
            <button  className="btn modal-submit-btn" type="submit" value="Submit" onClick={this.saveModalData}  >Submit</button>
                <button type="button" className="btn btn-default" onClick={this.props.hideModal}>Close</button>
          </Modal.Footer>
          </form>
        </Modal>
      </div>
    );
    }
  };
  export default DataEdit