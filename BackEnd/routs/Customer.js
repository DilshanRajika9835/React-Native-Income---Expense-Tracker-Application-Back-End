const express = require('express');
const mongoose = require('mongoose');
const route=express.Router();
const CustomerDTO=require('../dto/CustomerDTO');
route.use(express.json());
route.use(express.urlencoded({ extended: true })); 

// route.get('/find', (req, res) => {
//   const id=req.headers.id
//   console.log(id)
//   CustomerModel.findById(id).exec()
//   .then(
//     doc=>{
//       if(doc){
//         res.status(200).json(doc);
//       }else{
//         res.status(404).json({
//           error:"No Valid Entry Found Provided Customer ID"
//         });
//       }
//     }
//   ).catch(
// err=>{
//   res.status(500).json({
//     error:err
//   });
      
//       } 
//   )
//   })
//find all customer in database
  route.get('/', (req, res) => {
    CustomerDTO.find().exec()
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

route.get('/find', (req, res) => {
  const nic=req.headers.nic
  const password=req.headers.password
  CustomerDTO.find({nic:nic,password:password}).exec()
  .then(
    docs=>{
      if(docs.length>0){
        res.status(200).json({
          user:docs
        });
      }else{
        res.status(404).json({
          error:"No Valid Entry Found Provided Customer ID",
          status:"NOT_USER"
        });
      }
    }
  ).catch(
      err=>{res.status(500).json({
    error:err,
    status:"NOT_USER",

  }
  );   
      } 
  )
  })

//find all customer in database
  route.get('/', (req, res) => {
    CustomerDTO.find().exec()
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
    if(req.body.username.length>0 && req.body.password.length>0){
   const customer=new CustomerDTO({
    _id:new mongoose.Types.ObjectId(),
    username:req.body.username,
    nic:req.body.nic,
    password:req.body.password,
   });
   customer.save().then(result=>{
      console.log(result)
   }).catch(err=>{
    console.log(err)
   });
   res.status(201).json({
    message:"Customer Save Successfully",
    customer:customer,
    states:true

});

console.log(req.body.username)
  }else{
    res.status(500).json({
      states:false
    
    });
  }
}
  
);
 
  route.delete('/delete', (req, res) => {
    const id=req.body.id;
    CustomerDTO.deleteOne({_id:id}).exec()
    .then(result=>{
        res.status(200).json(result);
    })
    .catch(err=>{
      res.status(500).json({
        error:err
      });
    })
  });
  route.put('/update', (req, res) => {  
    CustomerDTO.updateOne({"_id":req.body._id},{$set:{"name":req.body.username,"address":req.body.nic,"salary":req.body.password}}).exec()
   .then(result=>{
    res.status(200).json(result);
      }).catch(err=>{
        res.status(500).json({
          error:err
        });
     })
  });
  module.exports=route