const mongoose = require('mongoose');

const Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
       type: Boolean,
       default: false
    },
    completedAt:{
        type: Number,
        default: null
    }
});

module.exports = {Todo};


// var newTodo = new Todo({
//     text: 'Cook Dinner',
//     completed: false
// });

// newTodo.save().then((doc)=>{
//     console.log(doc);
// }, (e)=>{
//     console.log('Enable to save To-do.'+ e);
// });

// var cleaning = new Todo({
//     text: ' Get products ready  ',
//     //the other values will be added by Mongoose as we specified up above
// });

// cleaning.save().then((doc)=>{
//     console.log(doc);
// }, (e)=>{
//     console.log('Enable to save the new To-do'+e);
// });


