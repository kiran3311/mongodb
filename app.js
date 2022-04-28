const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/kir", { useNewUrlParser : true });


const todoSchema = new mongoose.Schema({
  title: String,
  detail:String
});

const Todo = mongoose.model("Todo",todoSchema);

const todo = new Todo({
  title:"task_1",
  detail:"workout"
});

todo.save();