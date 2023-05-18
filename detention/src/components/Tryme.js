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
              <button
                type = "submit"
                class = "btn"
                id = "saveBtn"
                onClick = "saveScore(event)"
              >
                  Get My Answer!🙋‍♂️
              </button>
          </form>
        </div>

      </div>

    );
  }