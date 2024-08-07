import {Schema,model,Document} from 'mongoose'

interface IUser extends Document{
    name:String;
    email:String;
    password:String;
}

const userSchema =   new Schema<IUser>({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },

    password:{
        type:String,
        required:true
    }
});


const User = model<IUser>('User',userSchema)

export default User
export {IUser}