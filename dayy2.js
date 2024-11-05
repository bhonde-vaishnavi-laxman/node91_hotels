// console.log("vaishnavi bhonde");

// function add(a,b){
//     return a+b;
// }
// var result=add(129,12);
// console.log(result);


// var sub=function(a,b){
//     return a-b;
// }
// var sub1=(600,300);
// console.log(sub1);

// var mult=(a,b)=>{
//     return a*b;
// }
// var n=(2,9);
// console.log(n);

// var add=(a,b)=>a-b;
// var marks= add(130,90);
// console.log(marks);
// (function (){
//     console.log("hii vaishnavi");
// })();
//callback funstion
// function callback(){
//     console.log("callback funstions is creating");
// }

// function add(k,m){
//     var marks=k+m;
//     console.log(marks);
//     callback();
// }
// add(40,40);


// function callback(){
//     console.log("call back funstion is exsecuting");
// }

// function sub(a,b){
//      var h=a-b;
//      console.log(h);
//      callback();

// }
// sub(300,100,callback);

// function vaishnavi(){
//     console.log("vaishnavi bhonde hiii");
// }

// function mult(m,n){
//     var v=m*n;
//     console.log(v);
//     vaishnavi();
// }
// mult(2,10,vaishnavi());


// var fs=require('fs');
// var os=require('os');
// var user= os.userInfo();
// console.log(user);
// console.log(user.username);
// fs.appendFile('grreting.txt','hii'+user.username+'\n',()=>{
//     console.log("file is creating");
// });

// //creting the new file and add the this main file
// var fs=require('fs');
// var os=require('os');

// var name=os.userInfo();
// console.log(name.username);
// fs.appendFile('hiinode.txt','hii'+name.username+'\n',(a,b)=>{
// console.log("file is creating");
// });

//import the file acsseing the 1file to 2file to data

// const node= require('./notes.js');
// console.log("dayy2.js file");
// var age = notes.age;
// console.log(age);



///lodash 

var_ =require('lodash');
var data =["person",'1',"name","1","person","name"];

var filter=_.uniq(data);
console.log(filter);