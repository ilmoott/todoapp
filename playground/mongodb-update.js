const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{    //if the database "TodoApp" doesn't exist, mongo will create it
    if (err){
        return console.log('Unable to connect to MongoDB server.');
    }
    
    console.log('Connected to MongoDB server.');

  
    //findOneAndUpdate
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5bdebe9acb94604580569be3')
    // }, {
    //     $set:{
    //         completed: true  //we use the update operator ($set) to just update the selected object and value
    //         // a list to the update operators you can find on https://docs.mongodb.com/manual/reference/operator/update/
    //     }
    //  }, {returnOriginal: false}).then((result)=>{
    //     console.log(result);
    // });
    
    //findOneAndUpdate Exercise
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5c3eeba35b01ae34dc3550eb")
    }, {
        $inc:{
            age: -1
        },
        $set:{
            name: 'Master of the World'
        }
    },{
        returnOriginal: false
    }).then((result)=>{
        console.log(result);
    });

    db.close();
});
