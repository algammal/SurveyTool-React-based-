import React, { Component } from 'react';
import Modal from "react-bootstrap/Modal";

class  DataEdit extends Component {
  render(){
    return (
      <>
       <Modal show={this.props.showModal} onHide = {this.props.hideModal}>
          <Modal.Header>
            <Modal.Title>
            <button type="button" className="close" onClick = {this.props.hideModal}>&times;</button>
              <h4 className="modal-title">Type Question</h4>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
                <div className="col-xs-12 input-answer">     
                  <input id="user_input" className="text-answer" type="text" name="answer" placeholder="Type your question"/>  
                </div>
                <div className="col-xs-12 question-type">
        
                  <div className="check-answer">
                    <input type="checkbox" id="mcq" name="subscribe" value="newsletter"/>
                    <label className="chk-ans" htmlFor="mcq">MCQ</label>
                    <input className="chk-ans" type="checkbox" id="commentry" name="subscribe" value="newsletter"/>
                    <label className="chk-ans" for='commentry'>Commentry</label>
                  
                  </div>
    
                 <div id="btnCheckin" className="hider">
                    
                    <button className="btnCheckinBtn glyphicon glyphicon-plus-sign" id="btnCheckinBtn"><span className="add-txt">Add Choice</span></button>
                    <button className="btnCheckinBtn-remove glyphicon glyphicon-minus-sign" type="button"  id="removeButton"><span className="add-txt">Remove Choice</span></button>
                  
                    <div id="TextBoxesGroup">
                        <div id="TextBoxDiv1"></div>
                    </div>
  
                </div>
        </div>
          </Modal.Body>
          <Modal.Footer>
            <button className="btn modal-submit-btn" type="submit" value="Submit">Submit</button>
                <button type="button" className="btn btn-default" onClick={this.props.hideModal}>Close</button>
          </Modal.Footer>
        </Modal>
      </>
    );
    }
  };
  export default DataEdit