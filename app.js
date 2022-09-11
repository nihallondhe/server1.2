import  express  from "express";
import mongoose from "mongoose";
const app = express()
// import createdoc  from "./modules/student.js"; 
// import connectdb from './db/connectdb.js'


//const DATABASE_URL="mongodb://localhost:27017/empdata"


mongoose.connect("mongodb://admin:admin@localhost:27017/empdata").then(()=>{
    console.log('database connected')
})

// createdoc()
// connectdb(DATABASE_URL)


app.listen('3000',()=>{
    console.log('server runnig started')
})