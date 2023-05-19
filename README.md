# Welcome to the Virtual Detention | Full Scope of Project | Front End 
### User Data + Model Functionality = User Answer

### The Virtual Detention Tutor | User Experience | Intent
######  What is this "Virtual Detention"? Simply put, Virtual Detention is where the bad students like me get sent to go subsequent our education after being kicked out of traditional classrooms for our "poor performance". By design, the American education system weeds out many brilliant minds by not accomodating their distinct learning needs --as education is not what the system is aimed to do, rather job preperation and general compliant behavior before entering the workforce to do your equal part in the economy (oops, did I mean to say society?). Nevertheless, Virtual Detention is here to bridge that gap! As all of my original technology aims to do, this application aims to address a need in the daily lives of human, rather the functioning of a failing societal model that was never equitable to begin with. Just like real-world detention, students have free-reign over what they are learning - which means they can explore topics that maybe they weren't even being exposed to, or even study materials to help for when they go back to the regular classroom!   
    
### Milestones
##### Phase 1: Deployed full-stack application
* Natural Language Question Answering with Tensorflow and BERT models rendered as RESTful API returnin JSON to user and storing it as new JSON.

##### Phase 2: + User Profiles
* Create user account/authentication & save progress in user account

### Developer Summary:
###### Users will enter a passage and a question that will be taken in as arguments in the model to output an answer that is rendered on a new output react.js page/component

### ToolKit:
###### TensorFlow models w/ Tensorflow Node.js, and React.js for Client-end API in the browser

### Tensorflow.js Models for Web
###### https://www.tensorflow.org/js/tutorials
#### 1. TensorFlow.js Models [options]
##### TensorFlow.js is an open-source hardware-accelerated JavaScript library for training and deploying machine learning models.

* Develop ML in the Browser: Use flexible and intuitive APIs to build models from scratch using the low-level JavaScript linear algebra library or the high-level layers API.

* Develop ML in Node.js: Execute native TensorFlow with the same TensorFlow.js API under the Node.js runtime.

* Run Existing models: Use TensorFlow.js model converters to run pre-existing TensorFlow models right in the browser.  - what I am using⁉️

* Retrain Existing models
Retrain pre-existing ML models using sensor data connected to the browser or other client-side data.

###### Note: I also have the BERT trained models as ts files to be converted to JSON to be trained and inferenced upon later on, as any model can always use more fine-tuning! But the current API allows me to import the SavedModel and use it without the files of code. I have them in my directory save for making inferences later in phase 3/4 but not needed for actual model to work b/c installed and imported TensorFlow SavedModel that has already been find tuned and is ready to use.

#### 2. TensorFlow.js Backends and API [options]
###### This repository contains the logic and scripts that combine several packages: https://github.com/tensorflow/tfjs

APIs:
* TensorFlow.js Core, a flexible low-level API for neural networks and numerical computation.
* TensorFlow.js Layers, a high-level API which implements functionality similar to Keras.
* TensorFlow.js Data, a simple API to load and prepare data analogous to tf.data.
* TensorFlow.js Converter, tools to import a TensorFlow SavedModel to TensorFlow.js - what I am using! [https://github.com/tensorflow/tfjs/tree/master/tfjs-converter]
* TensorFlow.js Vis, in-browser visualization for TensorFlow.js models
* TensorFlow.js AutoML, Set of APIs to load and run models produced by AutoML Edge.

Backends/Platforms:
* TensorFlow.js CPU Backend, pure-JS backend for Node.js and the browser. - what I am using! [https://github.com/tensorflow/tfjs/tree/master/tfjs-backend-cpu]
* TensorFlow.js WebGL Backend, WebGL backend for the browser.
* TensorFlow.js WASM Backend, WebAssembly backend for the browser.
* TensorFlow.js WebGPU, WebGPU backend for the browser.
* TensorFlow.js Node, Node.js platform via TensorFlow C++ adapter.
* TensorFlow.js React Native, React Native platform via expo-gl adapter.

### API Documentation:
###### Tensorflow.js Client-Side RESTful API: https://www.tensorflow.org/tfx/serving/api_rest#encoding_binary_values
#####  Making Requests/Request format: The request body for the classify and regress APIs must be a JSON object formatted as follows:

    {
      // Optional: serving signature to use.
      // If unspecifed default serving signature is used.
      "signature_name": <string>,

      // Optional: Common context shared by all examples.
      // Features that appear here MUST NOT appear in examples (below).
      "context": {
        "<feature_name3>": <value>|<list>
        "<feature_name4>": <value>|<list>
      },

      // List of Example objects
      "examples": [
        {
          // Example 1
          "<feature_name1>": <value>|<list>,
          "<feature_name2>": <value>|<list>,
          ...
        },
        {
          // Example 2
          "<feature_name1>": <value>|<list>,
          "<feature_name2>": <value>|<list>,
          ...
        }
        ...
      ]
    }
###### "[value]" is a JSON number (whole or decimal), JSON string, or a JSON object that represents binary data (see the Encoding binary values section below for details). <list> is a list of such values. This format is similar to gRPC's ClassificationRequest and RegressionRequest protos. Both versions accept list of Example objects.
