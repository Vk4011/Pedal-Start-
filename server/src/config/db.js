const mongoose = require("mongoose");
require("dotenv").config();


const db=async ()=>{
    try{    
    await mongoose.connect(process.env.MONGO_URI)

    console.log("\n\t Database connected 🔥")    
    }
    catch(e){
        console.log("\n\t Failed to connect db : "+e.message);
        process.exit(1);
    }

}

module.exports = db;
