
const { Double } = require('mongodb');
const mongoose = require('mongoose');
const CashOut = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    amount:String,
    remark:String
 
  },
  {collection:'CashOut',
  versionKey: false //here
});
module.exports=mongoose.model('CashOutModal', CashOut);