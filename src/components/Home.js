import React, { Component } from 'react';
import Card from './Card'


class Home extends Component {
    render(){
        function repeat(e) {
            e.preventDefault();    
            return(
               <Card/>
            )
        }
        
    return(
    <div className='newline'>
             <div className='newline'>
                <button onClick={repeat} className="quest-itemplus btn btn-lg  glyphicon glyphicon-plus-sign">
                    <span className="add-txt">Add Question</span>
                </button>
                <button className="save-survey btn btn-lg  glyphicon glyphicon-floppy-disk">
                    <span className="add-txt">Save Survey</span>
                </button>   
            </div>
            <Card/>
            {this.repeat}
        }
        </div>
    )
    }
}
export default Home