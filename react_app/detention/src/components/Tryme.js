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