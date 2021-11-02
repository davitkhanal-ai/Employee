const mongoose = require('mongoose')
 
const uri = "mongodb+srv://admin:admin@cluster0.9xjhe.mongodb.net/employee?retryWrites=true&w=majority";


try {
    mongoose.connect(
        uri, { useNewUrlParser: true, useUnifiedTopology: true },
        ()=>{
            console.log("Database is running")
        }
    )
} catch (error) {
    console.log("Failed")
}


require("./employee.model")
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });