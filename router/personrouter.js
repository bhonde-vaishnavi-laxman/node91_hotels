const express =require('express');
const router =express.router();
const person=require('./../model/person');



router.post('/',async(req ,res)=>{
    try{
        const data=req.body
        const newPerson =new person(data);
        const response = await newPerson.save();
        res.status(200).json(response);
    }catch(err){
        console.log("err");
        res.status(500).json({
            error:'internal sever Error'
        });
    }
 });

 router.get('/',async(req ,res)=>{

    try{
        const data= await person.find();
        console.log('data feched');
        res.status(200).json(data);

    }catch(err){
        console.log("err");
        res.status(500).json({error :'internal error'})

    }
 });

router.get('//:workType',async(req ,res)=>{
    try{
        const workType =req.params.workType;

        if( workType == 'chef' || workType == 'maneger' || workType == 'waiter'){

            const response =await person.find({ work:workType});
            console.log("response fetched");
            res.status(200).json(response);

        }else{
            res.status(500).json(response);
        }

    }catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'});

    }
});

module.export=router;
