import  Navs  from "./nav_2.js";

//change form to React State
export default function Tryme() {
    return (
      <div>

      <div className="container-big">
        <input className="container-enlarge"
          type = "text"
          name = "passage"
          id = "passage"
          placeholder = "Input your passage data here!"
        />
        </div>
        <div className="container">
          <form className="submit">
              <input
                type = "text"
                name = "question"
                id = "question"
                placeholder = "Type Your Question!"
              />
          </form>
        </div>
        <Navs BertModel="/answer"/>
      </div>

    );
  }