const mongoose= require('mongoose');

module.exports.Connect=async ()=>{
        await mongoose.connect(process.env.MONGODB_URL).then(()=>{
        console.log("MongoDB Connected");
    }).catch(()=>{
        console.log("Not connected");
    })
}

