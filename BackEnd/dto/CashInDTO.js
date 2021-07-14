const mongoose = require('mongoose');
const CashIn = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    amount:String,
    remark:String,
 
  },
  {collection:'CashIn',
  versionKey: false //here
});
module.exports=mongoose.model('CashInModal', CashIn);