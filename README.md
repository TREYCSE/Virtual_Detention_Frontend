# Welcome to the Virtual Detention | Full Scope of Project

### The Virtual Detention Tutor | User Experience | Intent
######  What is this "Virtual Detention"? Simply put, Virtual Detention is where the bad students like me get sent to go subsequent our education after being kicked out of traditional classrooms for our "poor performance". By design, the American education system weeds out many brilliant minds by not accomodating their distinct learning needs --as education is not what the system is aimed to do, rather job preperation and general compliant behavior before entering the workforce to do your equal part in the economy (oops, did I mean to say society?). Nevertheless, Virtual Detention is here to bridge that gap! As all of my original technology aims to do, this application aims to address a need in the daily lives of human, rather the functioning of a failing societal model that was never equitable to begin with. Just like real-world detention, students have free-reign over what they are learning - which means they can explore topics that maybe they weren't even being exposed to, or even study materials to help for when they go back to the regular classroom!
    
### Phases
##### Phase 1: Deployed application using Tensorflow.js backend cpu, Node.js and React.js
* Deploy Natural Language Question Answering with Tensorflow render to user using Node and React/pure Node.js backend w/ bert pretrained functional models w/ original functionality rendering user's input to page.

Phase 1 Milestones
* connect to tensorflow cpu backend - complete✅
* create & code react app front end w/css - complete✅
* connect react front end to backend - complete✅
* load model from backend to front end console using a sample passage and question - the model is loaded✅ but the params(passage, question) are not [error: modelfindAnswer is not a function⁉️]
* add user input functionality to model page - added components pages for params and imported them into tryme page, need to import the responses from Forms into model page and set them as the params⚠️
* render answer to page in model page - not sure which way to render if not sure how defining answer for model & params^ [original syntax provided by BERT model const answers = model.findAnswers provided error still working on resolving]⚠️
* 🔜 use Docker to containerize application and deploy to Heroku

##### Phase 2: + TensorflowServing + Converted SavedModels + data storage/filing system
* Method now just allows me to run the model in the browser but there's not much function on the backend server side. However, migrating to TensorFlow Serving should allow me to store model output in the next stage by giving my backend more functionality [will get backend as API from 2nd repo once using TF Serving]. Plan to use TensorFlow RESTful API for server-server communication.

##### Phase 3: + Authentication & User Profiles + CRUD
* Create user account/authentication & save progress in user account.  ^^ save answers in profile

##### Phase 4: + Fine-Tuning BERT Q&A
* Go through Bert's Layers to make inferences and adjustments to the model [potentially switching to Core API which is better for neural networks]

### Developer Summary:
###### Users will enter a passage and a question that will be taken in as arguments in the model to output an answer that is rendered on a new output react.js page/component

### ToolKit:
###### TensorFlow models w/ Tensorflow Node.js, and React.js for Client-end API in the browser, Docker containerizer & Heroku
###### TensorFlow models are BERT Q&A models for Natural Language Question Answering: Answer questions based off content of a given passage, serving as a virtual tutor once ML algorithms with BERT complete deployed as RESTful API, can then integrate with React/Node.js frontend! [Typescript TensorFlow models converted to js [using tensorflow converter] and deployed as JSON RESTful API to render output to the frontend using Tensorflow & javascript backend, with React.js & Node.js frontend.]

### Tensorflow.js Models for Web
###### https://www.tensorflow.org/js/tutorials
#### 1. TensorFlow.js Models [options]
##### TensorFlow.js is an open-source hardware-accelerated JavaScript library for training and deploying machine learning models.

* Develop ML in the Browser: Use flexible and intuitive APIs to build models from scratch using the low-level JavaScript linear algebra library or the high-level layers API.

* Develop ML in Node.js: Execute native TensorFlow with the same TensorFlow.js API under the Node.js runtime.

* Run Existing models: Use TensorFlow.js model converters to run pre-existing TensorFlow models right in the browser.  - what I am using!

* Retrain Existing models
Retrain pre-existing ML models using sensor data connected to the browser or other client-side data.

#### 2. TensorFlow.js Backends and API [options]
###### This repository contains the logic and scripts that combine several packages: https://github.com/tensorflow/tfjs

APIs:
* TensorFlow.js Core, a flexible low-level API for neural networks and numerical computation.
* TensorFlow.js Layers, a high-level API which implements functionality similar to Keras.
* TensorFlow.js Data, a simple API to load and prepare data analogous to tf.data.
* TensorFlow.js Converter, tools to import a TensorFlow SavedModel to TensorFlow.js - what I will be moving to in Phase 2! [https://github.com/TREYCSE/Virtual_Detention_TensorFlowServing/tree/main]
* TensorFlow.js Vis, in-browser visualization for TensorFlow.js models
* TensorFlow.js AutoML, Set of APIs to load and run models produced by AutoML Edge.

Backends/Platforms:
* TensorFlow.js CPU Backend, pure-JS backend for Node.js and the browser. - what I am using! [https://github.com/tensorflow/tfjs/tree/master/tfjs-backend-cpu]
* TensorFlow.js WebGL Backend, WebGL backend for the browser.
* TensorFlow.js WASM Backend, WebAssembly backend for the browser.
* TensorFlow.js WebGPU, WebGPU backend for the browser.
* TensorFlow.js Node, Node.js platform via TensorFlow C++ adapter.
* TensorFlow.js React Native, React Native platform via expo-gl adapter.

### BERT Models for Javascript

#### 1. BERT Model Installation [options]
###### https://www.npmjs.com/package/@tensorflow-models/qna
There are two main ways to get this model in your JavaScript project: via script tags or by installing it from NPM and using a build tool like Parcel, WebPack, or Rollup.

via Script Tag

    <!-- Make sure your page supports utf-8 characterset. -->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Load TensorFlow.js. This is required to use the qna model. -->
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs"> </script>
    <!-- Load the qna model. -->
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/qna"> </script>

    <!-- Place your code in the script tag below. You can also use an external .js file -->
    <script>
      // Notice there is no 'import' statement. 'qna' and 'tf' is
      // available on the index-page because of the script tag above.

      // Load the model.
      qna.load().then(model => {
        // Find the answers
        model.findAnswers(question, passage).then(answers => {
          console.log('Answers: ', answers);
        });
      });
    </script>

via NPM

    // Note: you do not need to import @tensorflow/tfjs here, but make sure you have installed the peer dependencies for tfjs-core and tfjs-converter.

    const qna = require('@tensorflow-models/qna');

    // Load the model.
    const model = await qna.load();

    // Finding the answers
    const answers = await model.findAnswers(question, passage);

    console.log('Answers: ');
    console.log(answers);
    Try the demo here! You can also take a look at the source code of the demo app.

Note: Please make sure your web page supports utf-8 character set. To achieve that you can add following line to your page:

      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

#### 2. BERT Model API
##### Loading the model
When using a script tag, the package is available as qna in the global namespace.

    // you can load the model without providing the config object.
    model = await qna.load();
    // or you can specify the model url.
    config = {modelUrl: 'https://yourown-server/qna/model.json'};
    customModel = await qna.load(config);
    Args: config Model Config structure with following attributes:

    modelUrl: An optional string that specifies custom url of the model. This is useful for area/countries that don't have access to the model hosted on GCP.
    Returns a model object.

##### Find the answers
You can find the answers for a given question and associated passage with the model without needing to create a Tensor. model.findAnswers takes two inputs (question and passage) and returns an array of answers ranked by their scores. This method exists on the model that is loaded from qna.load().

    model.findAnswers(
      question: string, passage: string
    )
    Args:

    question: The question string.
    passage: The content to extract answers from.
    Returns an Promise of array of answers that look like following:

    [{
      text: "Sundar Pichai",
      startIndex: 1143,
      endIndex: 1156,
      score: 0.8380282521247864
    }]
In which the text is of string type and represents the answer body, and score is a number, indicates the confident level. The startIndex is the index of the starting character of the answer in the passage. The endIndex is index of the last character of the answer.

##### Here is an example run of the QnA model:

    const passage = "Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, search engine, cloud computing, software, and hardware. It is considered one of the Big Four technology companies, alongside Amazon, Apple, and Facebook. Google was founded in September 1998 by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University in California. Together they own about 14 percent of its shares and control 56 percent of the stockholder voting power through supervoting stock. They incorporated Google as a California privately held company on September 4, 1998, in California. Google was then reincorporated in Delaware on October 22, 2002. An initial public offering (IPO) took place on August 19, 2004, and Google moved to its headquarters in Mountain View, California, nicknamed the Googleplex. In August 2015, Google announced plans to reorganize its various interests as a conglomerate called Alphabet Inc. Google is Alphabet's leading subsidiary and will continue to be the umbrella company for Alphabet's Internet interests. Sundar Pichai was appointed CEO of Google, replacing Larry Page who became the CEO of Alphabet."
    const question = "Who is the CEO of Google?"
    const model = await qna.load();
    const answers = await model.findAnswers(question, passage);
    console.log(answers);
    /**
    [{
      text: "Sundar Pichai",
      startIndex: 1143,
      endIndex: 1156,
      score: 0.8380282521247864
    }]
    **/

##### TensorFlow & BERT QnA Additional Resources
* Natural Language Question Answering: https://towardsdatascience.com/implementing-question-answering-networks-with-cnns-5ae5f08e312b
* BERT: https://arxiv.org/abs/1810.04805 , GH: https://github.com/google-research/bert , Example: https://github.com/tensorflow/examples/tree/master/lite/examples/bert_qa/ios
* Pre-trained TensorFlow.js Models: https://github.com/tensorflow/tfjs-models
