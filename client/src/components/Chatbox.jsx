//-----necessary imports
// importing hooks from React

import { useState, useEffect } from "react";
import "../styles/App.css";

//-----component function
export default function Chatbox(props) {
  //uses state to hold the result of the fetch
  const [allMessages, setAllMessages] = useState([]);

  useEffect(() => {
    // countDownFrom(10);
    // console.log("this one is in the useEffect=>", changed);
    //^^were connected to my timer attempts

    //fetches information from a local API route set up on the server
    fetch("http://localhost:8000/allmessages")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setAllMessages(json);
      });
  },[]);
  //changed^ failed timer attempt

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

//various attempts to make a working timer that updates a variable
//to tell chatbox when to fetch

// let changed = false;
// function countDownFrom(num) {
//   setTimeout(tick, 1000);
//   let changed = false;

//   function tick() {
//     console.log(num);
//     num = num - 1;
//     if (num <= 1) {
//       changed = true;
//       console.log("this is inside countdownfrom=>", changed);

//       return changed;
//     } else {
//       setTimeout(tick, 1000);
//     }

//   }
//   console.log("this is one scope up=>", changed)
//   return changed;

// }

// function tenSeconds() {
//   let idForTimerProcess = setTimeout(counter, 1000);
//   let count = 10;
//   function counter() {
//     let updater = 0;

//     count = count - 1;
//     // console.log(count);
//     // console.log(updater);
//     if (count === 0) {
//       updater = updater + 1;
//       tenSeconds();
//       return updater;
//     } else {
//       idForTimerProcess = setTimeout(counter, 1000);
//     }
//   }
//   return updater;
// };
//tenSeconds()
