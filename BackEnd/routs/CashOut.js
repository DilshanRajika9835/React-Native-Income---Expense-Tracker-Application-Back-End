const express = require('express');
const mongoose = require('mongoose');
const route=express.Router();
const CashOutDTO=require('../dto/CashOutDTO');
route.use(express.json());
route.use(express.urlencoded({ extended: true })); 


//find all customer in database
route.get('/', (req, res) => {
    CashOutDTO.find().exec()
  .then(
    docs=>{
      if(docs.length>0){
        res.status(200).json(docs); 
      }else{
        res.status(404).json("Not Entires Data"); 
      }
       
    }
  ).catch(
err=>{
  res.status(500).json({
    error:err
  });
} 
  )
  })

route.post('/save', (req, res) => {
  if(req.body.amount.length>0 && req.body.remark.length>0){
 const cashOut=new CashOutDTO({
  _id:new mongoose.Types.ObjectId(),
  amount:req.body.amount,
  remark:req.body.remark
 });
 cashOut.save().then(result=>{
    console.log(result)
 }).catch(err=>{
  console.log(err)
 });
 res.status(201).json({
  message:"Cash Out Save Successfully",
  cashin:cashOut,
  states:true

});

console.log(req.body.remark)
}else{
  res.status(500).json({
    states:false
  
  });
}
}

);
module.exports=route