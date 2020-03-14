import React, { Component } from 'react';

class Card extends Component {
    state={
        items:[
            { id:1 , name:'ahmed' , age:28 },
            { id:2 , name:'ibrahim' , age:30 },
            { id:3 , name:'mohamed' , age:40 }
        ] 
    }
    handelClick = (e) => {
        let items=this.state.items
        items.push({id:4 ,name:'hussien',age:14} )
        this.setState({
            items :items
        })
    }
    render(){
    return(
        <div className='newline'>
                <button onClick={this.handelClick} className="quest-itemplus btn btn-lg  glyphicon glyphicon-plus-sign">
                <span className="add-txt">Add Question</span>
            </button>
            <button className="save-survey btn btn-lg  glyphicon glyphicon-floppy-disk">
                <span className="add-txt">Save Survey</span>
            </button> 
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
                            <input type="checkbox" id="1" name="subscribe" value="newsletter"/>
                            <label className="chk-ans">red</label>
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