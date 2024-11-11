const express =require('express');
const router = express.Router();
const person=require('./../model/person');
const {jwtAuthMiddleware,generateToken} = require('./../jwt');

router.post('/signup',async(req ,res)=>{
    try{
        const data=req.body
        const newPerson =new person(data);
        const response = await newPerson.save();
        const payload={
            id:response.id,
            username:response.username
        }
        console.log(json.stringify (payload));
        const token =generateToken(payload);
        console.log("token is:",token);





        res.status(200).json({response:response,   token:token});
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
//export the code in this
module.exports = router;
