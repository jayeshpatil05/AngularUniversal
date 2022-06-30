console.log("file is loading");
import * as  Mongoose  from "mongoose";
Mongoose 
 .connect("mongodb://localhost:27017/universal", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,   })   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));