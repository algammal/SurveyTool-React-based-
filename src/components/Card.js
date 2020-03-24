import React, { Component } from 'react';
import { renderIntoDocument } from 'react-dom/test-utils';

class Card extends Component {
  
    showModal = () =>{
        this.props.showModalFunc();
    }
    removeCard = (e) =>{
        
        e.preventDefault();
        this.props.cardRemovFunc(this.props.cardData.id);
    }
    render(){
    return(
        //if(this.props.type === "mcq"){ 
        <div key='card' className='newCard'>
             <div className="content-added container">
                    <div className="question-item col-xs-12">
                         <button onClick={this.removeCard} id={this.props.key} className="remove-question glyphicon glyphicon-minus-sign" type="button"></button>
                         <button type="button" onClick={this.showModal} className="btn btn-info btn-lg edit-btn glyphicon glyphicon-edit"><span className="add-txt">Edit Question</span></button>
                         <div  className="col-xs-12 question admin">
                            {this.props.cardData.questionText}
                        </div>
                        <form>
                        <div className="col-xs-12 mcq-answer">
                        {this.props.cardData.mcqCheckBox?
                        <div className='choiceRape'>
                        {this.props.cardData.choices.map((choice)=>{
                             return (
                             <div className="check-answer">
                                <input type="checkbox" id="1" name="subscribe" value="newsletter"/>
                                <label className="chk-ans">{choice}</label>
                            </div>
                        )
                        })}
                       </div>:''}
                        {this.props.cardData.commentryCheckBox?
                        <div className='textField'>
                            <textarea className='textArea'></textarea>
                        </div>
                         : ''}
                        
                        </div>
                        </form>
                    </div>
            </div>
   
        </div>
    )
    }
}
export default Card