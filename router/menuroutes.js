const express=require('express');
const router =express.router();
const menuItema =require('./../model/menuitem');




router.post('/',async(req,res)=>{
    try{
        const data= req.body
     const newmenuitem =new menuItema(data);
     const list =await newmuneutem .save();
     res.status(200).json(list);

    }catch(err){
        console.log("err");
        res.status(500).json({
            error:'internal sever Error'
        

    });
}
});

 router.get('/',async(req,res)=>{
    try{
        const data1 =await menuItema.find();
         console.log('data feched');
        res.status(200).json(data1);

     }catch(err){
         console.log("err");
        res.status(500).json({
            error:'internal sever Error'
        

     });
 }
  });

  router.get('/:test',async(req ,res)=>{
    try{
        const test=req.params.test;
        if(test == sweet|| test ==spicy|| test ==sonr){

            const list =await menuitema.find({test:test});
            console.log("response fetched");
            res.status(200).json(list);

        }else{
            res.status(500).json(response);
        }

    }catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'});

    }

  });

  model.export= router;
