import React, { Component } from 'react';


class Home extends Component {
    render(){
    return(
        <div className='newline'>
             <div className='newline'>
            <button class="quest-itemplus btn btn-lg  glyphicon glyphicon-plus-sign">
                <span class="add-txt">Add Question</span>
            </button>
            <button class="save-survey btn btn-lg  glyphicon glyphicon-floppy-disk">
                <span class="add-txt">Save Survey</span>
            </button>   
        </div>
            <h2>Home</h2>
            
        </div>
    )
    }
}
export default Home