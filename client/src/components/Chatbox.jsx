//-----necessary imports
// importing hooks from React

import { useState, useEffect } from "react";
import "../styles/App.css";

//-----component function
export default function Chatbox(props) {
  //uses state to hold the result of the fetch
  const [allMessage, setAllMessages] = useState([]);

  useEffect(() => {
    //fetches information from a local API route set up on the server
    fetch("http://localhost:8000/allmessages")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setAllMessages(json);
      });
  }, []);




return(
    <>
        <div method="post" action="/page" id="grid">
            <h1>PartyTime!!!</h1>
        </div>



 </>
)

}