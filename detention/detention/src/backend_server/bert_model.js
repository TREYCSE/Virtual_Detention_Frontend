// Note: you do not need to import @tensorflow/tfjs here, but make sure you have installed the peer dependencies for tfjs-core and tfjs-converter.
// Import @tensorflow/tfjs-core
// npm install @tensorflow/tfjs-core & npm install @tensorflow/tfjs-backend-cpu
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-backend-cpu';
import * as qna from "@tensorflow-models/qna";
//const qna = require('@tensorflow-models/qna');
//import { assert } from 'console';
console.log ('Using TensorFlow backend: ', tf.getBackend ());
//loadAndPredict (); - load and predict not defined
// Adds the CPU backend to the global backend registry.
// Doing all in one repo until phase 2 TensorFlow

//check in with paresh:
//working, but messed up my react app- won't open with script - can they not be in the same dir? if so can i recreate react app in same repo different dic? sep pack.jsons that's where I think it is glitching
//make backend README for when have sep repos for Tensorflow server, for now one repo cause just need backend connection for model - get like imports to front end not like 3rd party API?
//once recreated and can start and connected, check that model can run, then add input functionality
//npm install @tensorflow-models/qna?
//pip install tensorflowjs[wizard]
//GET BACKEND CONNECTION HERE?

// Load the model.
const model = qna.load();
console.log("model is loaded!")

//model = await qna.load();

//EXAMPLE
const passage = "Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, search engine, cloud computing, software, and hardware. It is considered one of the Big Four technology companies, alongside Amazon, Apple, and Facebook. Google was founded in September 1998 by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University in California. Together they own about 14 percent of its shares and control 56 percent of the stockholder voting power through supervoting stock. They incorporated Google as a California privately held company on September 4, 1998, in California. Google was then reincorporated in Delaware on October 22, 2002. An initial public offering (IPO) took place on August 19, 2004, and Google moved to its headquarters in Mountain View, California, nicknamed the Googleplex. In August 2015, Google announced plans to reorganize its various interests as a conglomerate called Alphabet Inc. Google is Alphabet's leading subsidiary and will continue to be the umbrella company for Alphabet's Internet interests. Sundar Pichai was appointed CEO of Google, replacing Larry Page who became the CEO of Alphabet."
const question = "Who is the CEO of Google?"

// Finding the answers
const answers = model.findAnswers(question, passage);
/*
[{
  text: "Sundar Pichai",
  startIndex: 1143,
  endIndex: 1156,
  score: 0.8380282521247864
}]
*/
//console.log('Answers: ');
console.log(answers);

export default function BertModel() {
  return (
    <div>
    <h3>Here's what I have to say...🤓</h3>
  </div>
  )
}

//  {answers1}