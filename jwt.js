const jwt =require ('jsonwebtoken');
const jwtAuthMiddleware =(req,res,next)=>{
    const token=req .headers.authorization.split('')[1];
    if(!token) return res.status(401).json({error:'unauthorized'});
    try{
        const decoded=jwt.verify(token ,process.env.JWT_SECRET);
        req.user=decoded;
        next();

    }catch(err){
        console.error(err);
        res.status(401).json({error:'internal server error'});

    }
    //function to genret JWT token

    const generateToken =(userData)=>{
        //genret the new JWT token using the user data
        return jwt.sign(userData,process.env.JWT_SECRET);
    }
    module.exports={jwtAuthMiddleware,generateToken};

}
