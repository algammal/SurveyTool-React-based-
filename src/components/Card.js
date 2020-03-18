import React, { Component } from 'react';

class Card extends Component {
  
    showModal = () =>{
        this.props.showModalFunc();
        console.log("this is props",this.props)
    }
    render(){
    return(
        //if(this.props.type === "mcq"){ 
        <div key='card' className='newline'>
             <div className="content-added container">
                    <div className="question-item col-xs-12">
                         <button  className="remove-question glyphicon glyphicon-minus-sign" type="button"></button>
                         <button type="button" onClick={this.showModal} className="btn btn-info btn-lg edit-btn glyphicon glyphicon-edit"><span className="add-txt">Edit Question</span></button>
                         <div  className="col-xs-12 question admin">
                            {this.props.questionText}
                        </div>
                        
                        <div className="col-xs-12 mcq-answer">
                        <form>
                        <div className="check-answer">
                            <input type="checkbox" id="1" name="subscribe" value="newsletter"/>
                            <label className="chk-ans">red</label>
                        </div>
                        <div className='textField'>
                        <textarea className="textArea"></textarea>
                        </div>
                        </form>
                        </div>
                    </div>
            </div>
   
        </div>
    )
    }
}
export default Card