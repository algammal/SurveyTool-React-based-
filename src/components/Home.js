import React, { Component } from 'react';
import Card from './Card'
import DataEdit from './DataEdit'
class Home extends Component {
    constructor(){
        super();
        this.state = {
            showModal:false,
            cards:[]   
        }
    }
    cardsRender = () =>{
        let tempstate = JSON.parse(JSON.stringify(this.state));
        let cards = tempstate.cards;
        let ArrayOfCards = [];
        let key = 0 ;
        cards.map((card)=>{
            let tempCard  = <Card showModalFunc = {this.showModal} questionText={card.questionText} type={card.type} index ={key} />;
            ArrayOfCards.push(tempCard)
            key++;
        })
        return ArrayOfCards;
    }
    showModal = () =>{
        let tempstate = JSON.parse(JSON.stringify(this.state));
        tempstate.showModal = true;
        // let card = {questionText:"What is your age?",type:"mcq"};
        //tempstate.cards.push(card);
        this.setState(tempstate)
    }
    editShowModal = ()=>{
        /// TODO
        // tempState.cards[index]
    }
    hideModal = () =>{
        let tempstate = JSON.parse(JSON.stringify(this.state));
        tempstate.showModal = false;
        this.setState(tempstate)
    }
  

    // dummyButton = (props) =>{
    //     return <div>{props.name}</div>
    // }

    render(){ 
    return(
    <div className='newline'>
            <button onClick ={this.showModal} className="quest-itemplus btn btn-lg  glyphicon glyphicon-plus-sign">
                <span className="add-txt">Add Question</span>
            </button>
            <button className="save-survey btn btn-lg  glyphicon glyphicon-floppy-disk">
                <span className="add-txt">Save Survey</span>
            </button>
            <this.cardsRender key='cardrender'/>
            {/* <this.dummyButton name="AlGammal" key='example'/> */}
            <DataEdit key='dataedit' showModal={this.state.showModal} hideModal ={this.hideModal}/>
        </div>
    )
    }
}
export default Home