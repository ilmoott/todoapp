const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{    //if the database "TodoApp" doesn't exist, mongo will create it
    if (err){
        return console.log('Unable to connect to MongoDB server.');
    }
    
    console.log('Connected to MongoDB server.');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // },(err, result)=>{
    //     if(err){
    //         console.log('Unable to insert to-do.');
    //     }else{
    //         console.log(JSON.stringify(result.ops, undefined, 2));
    //     }
    // });

    //Insert new doc to users collection (name, age, location)

    // db.collection('Users').insertOne({
    //     name: 'Ilmo',
    //     age: 32,
    //     location: 'Brisbane, Australia'
    // },(err, result)=>{
    //     if(err){
    //         console.log('Unable to insert to this collection.');
    //     }else{
    //         console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    //         //we call the ".getTimestamp()" on the "ObjectId" of the first item of the result.ops

    //         console.log(JSON.stringify(result.ops, undefined, 2));
    //         //here we're printing all the data inserted at this time
    //     }
    // });

    // db.close();
});