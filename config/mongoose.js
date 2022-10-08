// const mongoose=require('mongoose');
// mongoose.connect('mongodb://localhost/habit_tracker');

// const db=mongoose.connection;

// db.on('error',console.error.bind("There is erorr in connecting to the mongoose database"));

// db.once('open',function(){
//     console.log("Succesfully connected to the database");
// });


// module.exports=db;




const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/habit_tracker');


const db = mongoose.connection;
db.on('error', console.error.bind("error connecting to the database"));

db.once('open', function () {
    console.log("Succesfully conncted to the database");
});


module.exports = db;
