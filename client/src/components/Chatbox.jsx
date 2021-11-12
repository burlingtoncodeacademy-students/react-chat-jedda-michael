//-----necessary imports
// importing hooks from React

import { useState, useEffect } from "react";
import "../styles/App.css";

//-----component function
export default function Chatbox(props) {
  //uses state to hold the result of the fetch
  const [allMessages, setAllMessages] = useState([]);

  let count = 10;
  let updater = 0;
  function tenSeconds() {
    let idForTimerProcess;

    idForTimerProcess = setTimeout(counter, 10000);

    function counter() {
      count = count - 1;
      console.log(count);
      console.log(updater);
      if (count === 0) {
        count = 10;
        tenSeconds();
        updater = updater + 1;
      } else {
        idForTimerProcess = setTimeout(counter, 10000);
      }
    }
  }
  tenSeconds();

  useEffect(() => {
    //fetches information from a local API route set up on the server
    fetch("http://localhost:8000/allmessages")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setAllMessages(json);
      });
  }, [updater]);

  return (
    <>
      <div>
        <div id="grid">
          <div>
            <h1>Message Board</h1>
            <form id="form" action="/message" method="POST">
              <input type="text" name="username" placeholder="Username Here" />
              <input type="text" name="message" placeholder="Insert Message" />
              <input type="hidden" name="date" value={new Date()} />
              <input type="submit" value="Send Message" />
            </form>
          </div>
        </div>
      </div>

      <div id="allmessages">
        <h1>Messages here:</h1>
        <div>
          {allMessages.map((message) => {
            return (
              <div key={message._id}>
                <div>{message.when}</div>
                <div>{message.author}</div>
                <div>{message.body}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
// function tenSeconds() {
//   let idForTimerProcess;

//   idForTimerProcess = setTimeout(counter, 1000);

//   function counter() {
//     count = count - 1;
//     console.log(count);

//     if (count === 0) {
//       count = 10;
//       tenSeconds();
//     } else {
//       idForTimerProcess = setTimeout(counter, 1000);
//     }
//   }
// }
