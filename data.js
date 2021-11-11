//importing mongoose
// const { MongoClient, ObjectId } = require("mongodb");
const mongoose = require("mongoose");

//creating our mongoose Schema
//**does it need to be async? */
const ChatSchema = new mongoose.Schema({
  when: Date,
  author: String,
  body: String,
});

//exporting just the EntrySchema
module.exports = ChatSchema;
