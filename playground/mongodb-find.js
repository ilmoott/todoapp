const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{    //if the database "TodoApp" doesn't exist, mongo will create it
    if (err){
        return console.log('Unable to connect to MongoDB server.');
    }
    
    console.log('Connected to MongoDB server.');

  
    db.collection('Users').find({name: 'Ilmo'}).toArray().then((docs)=>{
        //({completed:true}) find only the items with the completed set to true. Here we can filter the items
        //.toArray() returns a promise, so we use a .then() with 2 callbacks, one to handle the success and other the error

        //FIND BY ObjectID:
        //{_id: new ObjectID('PASTE here the object id you want to find')}

        console.log('Users:');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err)=>{
        console.log('Unable to fetch Users.', err);
    });
    

    db.close();
});

//VISIT http://mongodb.github.io/node-mongodb-native/3.1/api/ for more information about different methods like, count, snapshot, sort and more