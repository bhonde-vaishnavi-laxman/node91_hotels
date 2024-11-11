//  const passport = require('passprot');
//  const localStrategy = require('passprot-local').strategy;
//  const person = require('./model/person');



//  passport.use (new localStrategy( async(USERNAME,password,done)=>{
//     try{
//         console.log('received credentials :',USERNAME,password);
//         const user = await person.findOne({USERNAME});

//         if(!user)
//             return done(null ,false, {message:'incorrect username'});

//         const ispasswordMatch =user.password === password ? true : false;
//         if(ispasswordMatch){
//             return done(null, user);

//         }else{
//             return done(null, false, {message:'incorrect password'});
//         }

//     }catch(err){
//         return done(err);

//     }

//  }));
//  module.exports = passport;
