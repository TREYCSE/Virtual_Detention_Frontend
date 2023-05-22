import  Navs  from "./nav_2.js";
import PassageForm from "./PassageForm.js";
import QuestionForm from "./QuestionForm.js";
import { useState } from "react";

export default function Tryme() {
  const [showForm, setShowForm] = useState(false);
  const handleNewNoteClick = () => {
    showForm ? setShowForm(false) : setShowForm(true);
  };

  return (
      <div>

        <button onClick= {handleNewNoteClick} >Try me!</button>
          {showForm && <PassageForm handleBtnClick={handleNewNoteClick}/>}
          {showForm && <QuestionForm handleBtnClick={handleNewNoteClick}/>}
          {showForm && <Navs handleBtnClick={handleNewNoteClick} BertModel="/answer"/>}

      </div>
    )
  }