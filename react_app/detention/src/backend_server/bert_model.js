// Note: you do not need to import @tensorflow/tfjs here, but make sure you have installed the peer dependencies for tfjs-core and tfjs-converter.
// Import @tensorflow/tfjs-core
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-backend-cpu';
import * as qna from "@tensorflow-models/qna";
// Adds the CPU backend to the global backend registry.
//import { PassageForm, QuestionForm } from '../components/index.js';
console.log ('Using TensorFlow backend!'); tf.getBackend ();
// loadAndPredict (); load and predict not defined
//import React Form from components output from components Tryme.js and set each parameter as it's own form to set each parameter here in the Answers function

const model = fetch(qna.load)
  .then(response => {
    console.log(`${response}`)
    console.log('success, BERT QnA model loaded!')
  })
  .catch(error => {
    console.log(`${error}`)
    console.log("error, oh no something went wrong..")
  })
console.log(model)


async function Answers () {
//test param values
  const passage = "Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, search engine, cloud computing, software, and hardware. It is considered one of the Big Four technology companies, alongside Amazon, Apple, and Facebook. Google was founded in September 1998 by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University in California. Together they own about 14 percent of its shares and control 56 percent of the stockholder voting power through supervoting stock. They incorporated Google as a California privately held company on September 4, 1998, in California. Google was then reincorporated in Delaware on October 22, 2002. An initial public offering (IPO) took place on August 19, 2004, and Google moved to its headquarters in Mountain View, California, nicknamed the Googleplex. In August 2015, Google announced plans to reorganize its various interests as a conglomerate called Alphabet Inc. Google is Alphabet's leading subsidiary and will continue to be the umbrella company for Alphabet's Internet interests. Sundar Pichai was appointed CEO of Google, replacing Larry Page who became the CEO of Alphabet."
  const question = "Who is the CEO of Google?"

//this is not going to work I need to set it to a STRING, the output from the form, not the form itself
  //const passage = {PassageForm}
  //const question = {QuestionForm}
  return (
    await model.findAnswers(passage, question)
//the promise is void if remove params, not useful w/out but still getting model.findAnswer is not a function‼️ - how check that arguments are set properly? can't until get past error?
  )
}
Answers();

//render the answers onto the page Answers();
export default function BertModel() {
  return (
    <div>
      <h3>Here's what I have to say...🤓</h3>
    </div>
  )
}

/*

const answers = fetch(model.findAnswers(question, context))
  .then(response => {
    console.log(`${response}`)
    console.log('success, BERT QnA model loaded!')
  })
  .catch(error => {
    console.log(`${error}`)
    console.log("error, oh no something went wrong..")
})
console.log(answers)

async function model.findAnswer(passage, question) {

}
*/
