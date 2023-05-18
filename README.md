## Virtual Detention - Front End (User side)

## Intent - What is this "Virtual Detention"?
#### Simply put, Virtual Detention is where the bad students like me get sent to go subsequent our education after being kicked out of traditional classrooms for our "poor performance". By design, the American education system weeds out many brilliant minds by not accomodating their distinct learning needs --as education is not what the system is aimed to do, rather job preperation and general compliant behavior before entering the workforce to do your equal part in the economy (oops, did I mean to say society?). Nevertheless, Virtual Detention is here to bridge that gap! As all of my original technology aims to do, this application aims to address a need in the daily lives of human, rather the functioning of a failing societal model that was never equitable to begin with.

### How Will it Accomplish this Mission?
##### Well, just like real-world detention, students have free-reign over what they are learning - which means they can explore topics that maybe they weren't even being exposed to, or even study materials to help for when they go back to the regular classroom!

## What is the Full Scope of the Project?

### User Experience
#### Virtual Detention Classroom
1. load webpage that renders data according to the topic in the nav bar
2. 
#### Virtual Detention Tutor
1. Users will navigate to the tutor page

#### ToolKit!
####### React.js and Node.js for Client-end

### API Documentation
#### Tensorflow.js Client-Side RESTful API: https://www.tensorflow.org/tfx/serving/api_rest#encoding_binary_values
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
<value> is a JSON number (whole or decimal), JSON string, or a JSON object that represents binary data (see the Encoding binary values section below for details). <list> is a list of such values. This format is similar to gRPC's ClassificationRequest and RegressionRequest protos. Both versions accept list of Example objects.
  
## Milestones for Virtual Detention expansion! How far could this project go?
#### Phase 1:
* Natural Language Question Answering with Tensorflow and BERT
* Deploying full stack application with Tensorflow.js models

#### Phase 2:
* create user account/authentication & save progress in user account - cloud engineering nec?
