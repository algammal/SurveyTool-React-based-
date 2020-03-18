import React, { Component , useState } from 'react';
import Card from './Card'
import DataEdit from './DataEdit'



class Home extends Component {
    constructor(){
        super();
    }

    isOpen = useState(false);
    setIsOpen = useState(false);
     showModal = () => {
        
    };
  
    
  
    render(){ 
    return(
    <div className='newline'>
             <button onClick={showModal} className="quest-itemplus btn btn-lg  glyphicon glyphicon-plus-sign">
                <span className="add-txt">Add Question</span>
            </button>
            <button className="save-survey btn btn-lg  glyphicon glyphicon-floppy-disk">
                <span className="add-txt">Save Survey</span>
            </button> 
            <Card editBtn={this.showModal}/>
            <DataEdit/>
        }
        </div>
    )
    }
}
export default Home