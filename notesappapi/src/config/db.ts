import mongoose from 'mongoose'

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI as string)
        console.log('MongoDB connected .....')
        
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
          } else {
            console.error('An unknown error occurred:', error);
          }
          process.exit(1);
    }
}

export default connectDB