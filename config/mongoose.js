const mongoose =require('mongoose');
// "mongodb+srv://deepeshgodwani:deepesh@cluster0.nimatsg.mongodb.net/?retryWrites=true&w=majority"
let URL="mongodb://deepeshgodwani:deepesh@ac-63it5xi-shard-00-00.nimatsg.mongodb.net:27017,ac-63it5xi-shard-00-01.nimatsg.mongodb.net:27017,ac-63it5xi-shard-00-02.nimatsg.mongodb.net:27017/?ssl=true&replicaSet=atlas-lxiz0n-shard-0&authSource=admin&retryWrites=true&w=majority"
const connectDb=async()=>{
     try {
         const conn =await mongoose.connect(URL,{
             useNewUrlParser:true,
             useUnifiedTopology:true,
             
         });

         console.log("CONNECTED TO DATABASE");
     } catch (error) {
        console.log("ERROR IN CONNECTING WITH DATABASE",error);
        process.exit();
     }
}

module.exports=connectDb;
