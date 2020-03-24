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
    this.createCard = this.createCard.bind(this)
    }
    removeCard = (id)=>{
        let tempstate = JSON.parse(JSON.stringify(this.state));
        tempstate.cards.splice(id ,1)
        this.setState(tempstate)
    }
    createCard = (newCard) =>{
       this.setState({cards:this.state.cards.push(newCard)});
    }
    cardsRender = () =>{
        
        let tempstate = JSON.parse(JSON.stringify(this.state));
        let cards = tempstate.cards;
        let ArrayOfCards = [];
        let key = 0 ;
        cards.map((card)=>{
            card.id= key
            let tempCard  = <Card cardRemovFunc={this.removeCard} showModalFunc = {this.showModal} cardData={card}  key ={key} />;
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
    render(){ 
    return(
    <div className='newline'>
        <div className='btn-cont container'>
            <button onClick ={this.showModal} className="quest-itemplus btn btn-lg  glyphicon glyphicon-plus-sign">
                <span className="add-txt">Add Question</span>
            </button>
            <button className="save-survey btn btn-lg  glyphicon glyphicon-floppy-disk">
                <span className="add-txt">Save Survey</span>
            </button>
        </div>
            <this.cardsRender cardRemovFunc={this.removeCard} key='cardrender'/>
            <DataEdit newCardFunction={this.createCard} key='dataedit' showModalProps={this.state.showModal} hideModalProps ={this.hideModal}/>
        </div>
    )
    }
}
export default Home