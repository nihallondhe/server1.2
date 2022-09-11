import mongoose from 'mongoose';
const connectdb = (DATABASE_URL)=>{
    const DB_OPTIONS={
        user : 'admin',
        pass : 'admin',
        dbNAME : 'empdata',
        authSource : 'empdata'
    }
    return mongoose.connect(DATABASE_URL,DB_OPTIONS).then(()=>{
        console.log('database connected succesfully')
    })
    .catch((err)=>{
        console.log(err)
    })
}

export default connectdb