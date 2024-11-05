const { default: mongoose } = require('mongoose');
const mongooes=require('mongoose');

const menuItem= new mongoose.Schema({
    
name:{
    type:String,
    required:true
},
price:{
    type:Number,
    required:true
},
test:{
    type:String,
    enum:['spicy','sweet','sour'],
    required:true
},
is_drink:{
    type:Boolean,
    default:false
},
num_salse:{
    type:Number,
    default:0
}

});


 const menuItema= mongooes.model('menuItem',menuItem);
 module.exports=menuItema;
