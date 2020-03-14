import React, { Component } from 'react';

class BtnsComp extends Component {
    render(){
    return(
        <div className='newline'>
            <button class="quest-itemplus btn btn-lg  glyphicon glyphicon-plus-sign">
                <span class="add-txt">Add Question</span>
            </button>
            <button class="save-survey btn btn-lg  glyphicon glyphicon-floppy-disk">
                <span class="add-txt">Save Survey</span>
            </button>   
        </div>
    )
    }
}
export default BtnsComp