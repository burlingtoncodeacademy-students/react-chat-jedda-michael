//things we're not using but might want to?
// require("dotenv").config();
// const path = require("path");

//importing mongoose
const mongoose = require("mongoose");

//bringing in express
const express = require("express");

//importing ChatSchema
const ChatSchema = require("./data.js");
const { response } = require("express");

//creating the initial connection to the database
mongoose.connect("mongodb://localhost:27017/react-chat");

//put back in if necessary^^^
// {
//   useNewUrlParse: true,
//   useUnifiedTopology: true,
// }

//init the database through the connection constructor, stored in a variable
const db = mongoose.connection;

//setting up default port
const port = process.env.PORT || 8000;

//binding express to a variable
const app = express();

//binds error message to the connection variable to print if an error occurs
db.on("error", console.error.bind(console, "connection error"));

//setting up static server, middleware functions
const staticDir = process.env.DEV ? "./client/public" : "./client/build";
app.use(express.static(staticDir));
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log("listening on port: " + port);
});

//creating the Messages model utilizing the ChatSchema and the "messages" collection
const Messages = mongoose.model("messages", ChatSchema);

//creating our API route for the front end to access the entries from the database
app.get("/allmessages", async (req, res) => {
  //assigning the result of a find on our Model to a variable
  let allMessages = await Messages.find({});
  //sending the result as a json to the page
  res.json(allMessages);
});

// app.post("/page", async (req, res) => {  
// }
