import React, { Component } from 'react';
class  McqBox extends Component {
    constructor(){
        super();
        this.state = {
            inputs:[] ,           
        }
    }
    showInputs = (e) =>{
        e.preventDefault();
        let tempstate = JSON.parse(JSON.stringify(this.state));
        let inputs = {type:"text",text:""};
        tempstate.inputs.push(inputs);
        this.setState(tempstate)
    }

    removeInputs=(input)=>{
        input.preventDefault();
        let tempstate = JSON.parse(JSON.stringify(this.state));
        let inputs = {};
        tempstate.inputs.pop(inputs);
        this.setState(tempstate)
       }
       getText = (e) =>{
        let tempstate = JSON.parse(JSON.stringify(this.state));
        tempstate.inputs[e.target.id].text = e.target.value;
        this.setState(tempstate);
        let choice = {id:e.target.id,choiceText:e.target.value}
        this.props.choiceFunction(choice)
       }

       Inputsrender = () =>{
        let tempstate = JSON.parse(JSON.stringify(this.state));
        let inputs = tempstate.inputs;
        let ArrayOfInputs = [];
        let key = 0 ;
        inputs.map((input)=>{
            let tempCard  = <input id={key} key={key} onChange={this.getText} type={inputs.type} placeholder='Add Choice'/>;
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
                            <this.Inputsrender />
                        <div>{this.state.name}</div>
                        </div>
            </div>
    )
    }
}
export default McqBox