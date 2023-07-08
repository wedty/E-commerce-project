const mongoose = require("mongoose");

const connectToDatabase = ()=>{
    mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser:true,useUnifiedTopology:true}).then((data)=>{
    // mongoose.connect("mongob://127.0.0.1:27017/Ecommerce",{useNewUrlParser:true,useUnifiedTopology:true}).then((data)=>{
    console.log(`Mongodb connected with server:${data.connection.host}`);
}).catch((err)=>{
    console.log(err);
});
}

module.exports= connectToDatabase;