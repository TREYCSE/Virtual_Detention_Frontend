import  Navs  from "./nav_2.js";

export default function Tryme() {
  return (
      <div>

        <h3> Here are the rules...!</h3>
        <h4>
          Just type or paste a passage that you want the Virtual Tutor to read for you, then ask it a question to see what it can find!
        </h4>
        <h4>
          Don't try to escape detention, just ask the tutor for help!
        </h4>

        <Navs className="bertLink" BertModel="/bert"/>
        
      </div>
    )
  }

/*
import PassageForm from "./PassageForm.js";
import QuestionForm from "./QuestionForm.js";
import { useState } from "react";
const [showForm, setShowForm] = useState(false);
const handleNewNoteClick = () => {
showForm ? setShowForm(false) : setShowForm(true);
  };
        <button className ="trybtn"onClick={handleNewNoteClick} >Try me!</button>
          {showForm && <PassageForm handleBtnClick={handleNewNoteClick}/>}
          {showForm && <QuestionForm handleBtnClick={handleNewNoteClick}/>}
          {showForm && <Navs handleBtnClick={handleNewNoteClick} BertModel="/answer"/>}

export default function QuestionForm() {
  return (
    <div className="container">
      <form className="submit">
        <input
            type = "string"
            name = "question"
            id = "question"
            placeholder = "Type Your Question!"
      />
      </form>
    </div>
  )
}

export default function PassageForm() {
  return (
    <div>
      <form>
        <input className="container-big"
            type = "string"
            name = "passage"
            id = "passage"
            placeholder = "Input your passage data here!"
      />
      </form>
    </div>
  )
}
*/

/*
import { PassageForm, QuestionForm } from '../components/index.js';
import React Form from components output from components Tryme.js and set each parameter as it's own form to set each parameter here in the Answers function
const passage = {PassageForm}
const question = {QuestionForm}
  //set parameters to the  input FROM these forms, right now set to the form elements as a whole not strings

const model = await qna.load();
const model = fetch(qna.load)
  .then((status) => {
    console.log(status);
  })
  .catch(error => {
    console.log(`${error}`)
    console.log("error, oh no something went wrong..")
  })
  */