
import { useRef, useEffect , useState, Fragment } from 'react';
//import { PassageForm, QuestionForm } from '../components/index.js';
//import React Form from components output from components Tryme.js and set each parameter as it's own form to set each parameter here in the Answers function
//import Loader from "react-loader-spinner"

// Note: you do not need to import @tensorflow/tfjs here, but make sure you have installed the peer dependencies for tfjs-core and tfjs-converter. - import '@tensorflow/tfjs';
// Import @tensorflow/tfjs-core - import * as tf from '@tensorflow/tfjs-core';
import * as qna from "@tensorflow-models/qna";

// Adds the CPU backend to the global backend registry. //tf.getBackend ();
import '@tensorflow/tfjs-backend-cpu';

// Adds the WebGL backend to the global backend registry. -
import '@tensorflow/tfjs-backend-webgl';

console.log ('Using TensorFlow backend!');

export default function BertModel() {

  const passageRef = useRef(null);
  const questionRef = useRef(null);
  const [answer, setAnswer] = useState();
  const [model, setModel] = useState(null);


  const loadModel = async () => {
    const loadedModel = await qna.load()
    setModel(loadedModel);
    console.log('hooray, the model is loaded👽🚀')
  }
  useEffect(()=>{loadModel()}, [])

  const answerQuestion = async() => {
    if( model !== null ){
      const passage = passageRef.current.value
      const question = questionRef.current.value
      //test params work - loading too many times
      //const passage = "Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, search engine, cloud computing, software, and hardware. It is considered one of the Big Four technology companies, alongside Amazon, Apple, and Facebook. Google was founded in September 1998 by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University in California. Together they own about 14 percent of its shares and control 56 percent of the stockholder voting power through supervoting stock. They incorporated Google as a California privately held company on September 4, 1998, in California. Google was then reincorporated in Delaware on October 22, 2002. An initial public offering (IPO) took place on August 19, 2004, and Google moved to its headquarters in Mountain View, California, nicknamed the Googleplex. In August 2015, Google announced plans to reorganize its various interests as a conglomerate called Alphabet Inc. Google is Alphabet's leading subsidiary and will continue to be the umbrella company for Alphabet's Internet interests. Sundar Pichai was appointed CEO of Google, replacing Larry Page who became the CEO of Alphabet."
      //const question = "Who is the CEO of Google?"  
      console.log('params have been begotten?')

      const answers = await model.findAnswers(question, passage)
      setAnswer(answers)
      console.log(answers)
    }
  }
  answerQuestion();
  
  return (  
    <div className="input">

    <Fragment>
    Passage <textarea className="passage" ref={passageRef} rows="38" cols="0"></textarea>
    <hr></hr>  
    Insert Question Here <input className="question" ref={questionRef} size="80"></input>
    <hr></hr>  
    Click me for Answer! <button className='btn' onClick={answerQuestion}></button>      
    <hr></hr>  
    Answers {answer ? answer.map((ans, idx)=><div><b>Answer {idx+1} - </b>{ans.text} ({ans.score})</div>): ""}
    </Fragment>

     </div>
  )
}

/* event.which === 13 &&   
     <header>
      {model == null?
        <h3>Model is still loading hold on a min...</h3>
        <Loader />
        </header>
    :

//test params
const passage = "Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, search engine, cloud computing, software, and hardware. It is considered one of the Big Four technology companies, alongside Amazon, Apple, and Facebook. Google was founded in September 1998 by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University in California. Together they own about 14 percent of its shares and control 56 percent of the stockholder voting power through supervoting stock. They incorporated Google as a California privately held company on September 4, 1998, in California. Google was then reincorporated in Delaware on October 22, 2002. An initial public offering (IPO) took place on August 19, 2004, and Google moved to its headquarters in Mountain View, California, nicknamed the Googleplex. In August 2015, Google announced plans to reorganize its various interests as a conglomerate called Alphabet Inc. Google is Alphabet's leading subsidiary and will continue to be the umbrella company for Alphabet's Internet interests. Sundar Pichai was appointed CEO of Google, replacing Larry Page who became the CEO of Alphabet."
const question = "Who is the CEO of Google?"
//const passage = {PassageForm}
//const question = {QuestionForm}

const model = await qna.load();
const model = fetch(qna.load)
  .then((status) => {
    console.log(status);
  })
  .catch(error => {
    console.log(`${error}`)
    console.log("error, oh no something went wrong..")
  })
  //set parameters to the  input FROM these forms, right now set to the form elements as a whole not strings
//this is not going to work I need to set it to a STRING, the output from the form, not the form itself
console.log(model)

//have model and answers in state
//.bind the model api to these answer parameters?
const answers = await model.findAnswers(passage, question);
console.log(answers)
//render the answers onto the page
//<button onClick={model.findAnswers(null, passage, question)}>generate answer to see what I have to say...🤓</button>
  */