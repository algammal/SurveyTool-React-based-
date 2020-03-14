import React, { Component } from 'react';

class Card extends Component {
    render(){
    return(
        <div className='newline'>
             <div className="example-1 content-added container" id="content">
                <div className="example-2">
                    <div className="question-item col-xs-12">
                         <button  className="remove-question glyphicon glyphicon-minus-sign" type="button"></button>
                         <button type="button" className="btn btn-info btn-lg edit-btn glyphicon glyphicon-edit" data-toggle="modal" data-target="#myModal"><span className="add-txt">Edit Question</span></button>
                         <div  className="col-xs-12 question admin">
                            
                        </div>
                        <div className="col-xs-12 mcq-answer">
                        <form>
                        <div className="check-answer">
                            <input type="checkbox" id="ans1" name="subscribe" value="newsletter"/>
                            <label className="chk-ans">red</label>
                            <input className="chk-ans" type="checkbox" id="ans2" name="subscribe" value="newsletter"/>
                            <label className="chk-ans" >blue</label>
                            <input type="checkbox" id="ans3" name="subscribe" value="newsletter"/>
                            <label className="chk-ans" >green</label>
                            <input type="checkbox" id="ans4" name="subscribe" value="newsletter"/>
                            <label className="chk-ans" >black</label>
                        </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
   
        </div>
    )
    }
}
export default Card