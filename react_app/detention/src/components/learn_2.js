import {Fragment, useState} from 'react'
import axios from "axios"

export default function Api2 () {
  
const [api2, setApi2] = useState();
//https://api.nasa.gov/DONKI/CME?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&api_key=DEMO_KEY
//5pbbLZEKs5Fo7nvZOIRvOhXJHpyjg3JUmgbrHTS3
//https://api.nasa.gov/planetary/apod?api_key=5pbbLZEKs5Fo7nvZOIRvOhXJHpyjg3JUmgbrHTS3
  const getData = async () => {
      const api2s = await axios.get('https://api.nasa.gov/techtransfer/patent/?engine&api_key=5pbbLZEKs5Fo7nvZOIRvOhXJHpyjg3JUmgbrHTS3')

      .then((response) => {
          console.log("RES", response.data);
      if(response) {
        return response.data
      }else {
          console.log("ERROR");
          }
      })
      setApi2(api2s)
  };
    return (
  
      <div>

        {api2 ==null ?

        <div className='loading'>
          <h4>Without constant learning your memory will get fuzzy with age ... so stick with it because learning always pays! Click the button for some data! </h4>
          <button  type="button" className='btn' onClick={getData}></button>
          <h4> don't click again! just hold on a second while I go get that for you...</h4>
          </div>
         :
         <Fragment>
            <h4> | And you better learn all of it .... maybe choose option 1 next time! | </h4>
            <div>{api2.results}</div>
         </Fragment>
    }
 </div>
  )
}