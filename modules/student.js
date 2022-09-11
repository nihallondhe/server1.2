import mongoose from "mongoose";

const empschema = new mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number,required:true},
    branch:{type:String,required:true},
    isworking: {type:Boolean},
    Date:{type:Date,default:Date.now}
})

const empmodel = mongoose.model('student',empschema)


const createdoc = async()=>{
    try{
        
const empdoc = new empmodel( {
    name:'Nihal',
    age: 24,
    branch: 'comp',
    isworking: true,

})
await empdoc.save()


    }
    catch(err){

        console.log(err)
    }
}
export default createdoc
