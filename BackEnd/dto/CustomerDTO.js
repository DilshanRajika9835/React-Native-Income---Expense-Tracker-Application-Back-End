const mongoose = require('mongoose');
const Customer = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    username:String,
    nic:String,
    password:String,
 
  },
  {collection:'Customer',
  versionKey: false //here
});
module.exports=mongoose.model('CustomerModel', Customer);























// const userSchema = new mongoose.Schema({
//     id:{
//         type:String,
//         require:true
//     },
//     name:{
//         type:String,
//         require:true
//     },
//     address:{
//         type:String,
//         require:true
//     },
//     salary:{
//         type:String,
//         require:true
//     }
    
//   }
//   );
//    module.exports=mongoose.model("User", userSchema);