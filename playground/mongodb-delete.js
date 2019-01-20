const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{    //if the database "TodoApp" doesn't exist, mongo will create it
    if (err){
        return console.log('Unable to connect to MongoDB server.');
    }
    
    console.log('Connected to MongoDB server.');

  
    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result)=>{
    //     console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result)=>{
    //     console.log(result);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
    //     //the find one method will only target the first one it sees
    //     console.log(result);
    // });

    //DELETEMANY EXERCISE
    // db.collection('Users').deleteMany({age: 32}).then((result)=>{
    //     console.log(result.message.deletedCount);
    // });

    //FINDONEANDDELETE EXERCISE
    // db.collection('Users').findOneAndDelete({
    //     _id: new ObjectID("5c3e83496991214328c3f7e1")
    // }).then((result)=>{
    //     console.log(result);
    // });

    db.close();
});
