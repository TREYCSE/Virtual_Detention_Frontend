import { useState, Fragment} from 'react'
import axios from "axios";

export default function Api1 () {

    const [api, setApi] = useState();
    const getApi = async() => {
        const apis = await axios.get('https://api.nasa.gov/planetary/apod?api_key=6HbYrzwibnjgCvHxIbCyHMCDgUVsJ5ALKVOshnaR')
            .then((response) => {
                console.log("RES", response.data);
            if(response.data) {
                return response.data
            }else {
                console.log("ERROR");
                }
            })
                setApi(apis)
    }
    return (

    <div>

        <div>
        {api ==null ?
        <div className='loading'> <h3>Getting your assignment... </h3> <h5>or maybe you could help out and pick it up by clicking this button! </h5> <button  type="button" className='btn' onClick={getApi}></button> </div>
        :
    <Fragment>
       <h6> Here's what you get to learn today... </h6>
       <h3>{api.title}</h3>
       <hr></hr>
       <h4>{api.explanation}</h4>
       <h6>{api.date}</h6>
    </Fragment>
        }
    </div>

    </div>
    )
}