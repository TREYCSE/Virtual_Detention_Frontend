//React useRef, useState, and useEffect to set the user's input to the model's parameters and render it to the page back to the user
import { useRef, useEffect , useState, Fragment } from 'react';
//import Loader from "react-loader-spinner"

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
    console.log('hooray, the model is loaded🚀')
  }
  useEffect(()=>{loadModel()}, [])

  const answerQuestion = async() => {
    if(model !==null) {
      const passage = passageRef.current.value
      const question = questionRef.current.value
      //test params work
      //const passage = "Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, search engine, cloud computing, software, and hardware. It is considered one of the Big Four technology companies, alongside Amazon, Apple, and Facebook. Google was founded in September 1998 by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University in California. Together they own about 14 percent of its shares and control 56 percent of the stockholder voting power through supervoting stock. They incorporated Google as a California privately held company on September 4, 1998, in California. Google was then reincorporated in Delaware on October 22, 2002. An initial public offering (IPO) took place on August 19, 2004, and Google moved to its headquarters in Mountain View, California, nicknamed the Googleplex. In August 2015, Google announced plans to reorganize its various interests as a conglomerate called Alphabet Inc. Google is Alphabet's leading subsidiary and will continue to be the umbrella company for Alphabet's Internet interests. Sundar Pichai was appointed CEO of Google, replacing Larry Page who became the CEO of Alphabet."
      //const question = "Who is the CEO of Google?"  
      console.log('params have been begotten?👽')

      const answers = await model.findAnswers(question, passage)
      setAnswer(answers)
      console.log(answers)
    }
  }
  
  return (  
    <div className="userInput">
    
     <header>
     {model ==null ?
     //if model is not loaded, display this
     <div>
        <hr></hr> <hr></hr> <hr></hr>
          <div className='loading'>||||| hold on ... The Virtual Tutor is on their way! ..||||| </div>
        <hr></hr> <hr></hr> <hr></hr>
    </div>

      :
      //if model is loaded, render this to take in user in input that is set as the parameter values
     <Fragment>
        Passage <textarea className="passage" ref={passageRef} rows="38" cols="0"></textarea>
        <hr></hr>  
        Insert Question Here <input className="question" ref={questionRef} size="80"></input>
        <hr></hr>  
        Click me for Answer! <button type="button" className='btn' onClick={answerQuestion}></button>      
        <hr></hr>  
        Answers {answer ? answer.map((ans, idx)=><div><b className='text'>Answer {idx+1} - </b>{ans.text} ({ans.score})</div>): ""}
    </Fragment>
      }
    </header>
    </div>
  );
}

//TO STORE ANSWER AS JSON - do in another branch, git checkout 
//create a json when the answer is coming - the key is 1 , 2, etc. and the answer would be the answer text
//export json to mongo and seed it
//create a state of teh json and update the state as the  code is being updated in the front  and back and end and use teh state to updat eht mongo db database