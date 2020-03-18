import React, { Component } from 'react';
class  McqBox extends Component {
    constructor(){
        super();
        this.state = {
            inputs:[]   
        }
    }
    showInputs = () =>{
        let tempstate = JSON.parse(JSON.stringify(this.state));
        let inputs = {id:"0",type:"input"};
        tempstate.inputs.push(inputs);
        this.setState(tempstate)
        console.log(tempstate)
    }
    removeInputs =() =>{
        this.props.onDelete(this.props.searchItem)
    }
    inputsRender = () =>{
        let tempstate = JSON.parse(JSON.stringify(this.state));
        let inputs = tempstate.inputs;
        let ArrayOfInputs = [];
        let key = 1 ;
        inputs.map((input)=>{
            let tempCard  = <input id={input.id} type={inputs.type} value='Add Choice' placeholder='Add Choice'/>;
            ArrayOfInputs.push(tempCard);
            key++;
        })
        return ArrayOfInputs;
    }
    render(){
        return(
            <div className="textBoxComp">
                    
                    <button onClick={this.showInputs} className="btnCheckinBtn glyphicon glyphicon-plus-sign" id="btnCheckinBtn"><span className="add-txt">Add Choice</span></button>
                    <button onClick={this.removeInputs} className="btnCheckinBtn-remove glyphicon glyphicon-minus-sign" type="button"  id="removeButton"><span className="add-txt">Remove Choice</span></button>
                  
                    <div id="TextBoxesGroup">
                        <this.inputsRender/>
                    </div>
  
            </div>
    )
    }
}
export default McqBox