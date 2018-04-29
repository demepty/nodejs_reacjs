const express= require('express');
const Thread= require ('../models/Thread');
const router = express.Router();

router.get('/', async (req,res)=>{

  const threads = await Thread.find();

  res.json({
    data: threads,
  });
});

module.exports=router;
