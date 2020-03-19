import React, { Component } from 'react';
class  McqBox extends Component {
    constructor(){
        super();
        this.state = {
            inputs:[] ,
            name:''
        }
    }
    showInputs = () =>{
        let tempstate = JSON.parse(JSON.stringify(this.state));
        let inputs = {id:0,type:"input"};
        tempstate.inputs.push(inputs);
        this.setState(tempstate)
    }
    removeInputs=(input)=>{
        this.setState((currentState)=>({
          inputs:currentState.inputs.filter((c)=>{
            return c.id !== input.id
          })
        }))
       }
       getText = (e) =>{
        this.setState({
            name: e.target.value
        })
       }
    inputsRender = () =>{
        let tempstate = JSON.parse(JSON.stringify(this.state));
        let inputs = tempstate.inputs;
        let ArrayOfInputs = [];
        let key = 1 ;
        inputs.map((input)=>{
            let tempCard  = <input id={Math.random()} onChange={this.getText} type={inputs.type} placeholder='Add Choice'/>;
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
                    
                        <div className="TextBoxesGroup">
                            <this.inputsRender/>
                        <div>{this.state.name}</div>
                        </div>
            </div>
    )
    }
}
export default McqBox