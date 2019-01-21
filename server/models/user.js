const mongoose = require('mongoose');

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    email:{
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});

module.exports = {User};


///////////////////////////
//USER Exercise
//email - required + trimmed + string + minlength: 1

// let athynna = new User({
//     name: 'Athynna',
//     email: ' ath@gmail.com'
// });

// let jr = new User({
//     name: 'e',
//     email: 'e'
// });

// let users = [athynna, jr];

// users.forEach((u)=>{
//     u.save().then((doc)=>{
//         console.log(doc);
//     },(e)=>{
//         console.log('Unable to save user: '+doc+e);
//     }).catch((e)=>{
//         console.log(e);
//     });
// });