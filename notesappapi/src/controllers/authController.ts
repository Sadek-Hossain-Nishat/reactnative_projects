import {Request,Response} from 'express'
import User,{IUser} from '../models/user'



export const registerUser = async (req:Request,res:Response)=>{

    const {name,email,password} = req.body

    try {

        const userExists = await User.findOne({email})

        if (userExists) {

            return res.status(400).json({message:'User already exists'})
            
        }

        const user:IUser = new User({
            name,
            email,
            password

        })

        await user.save()

        res.status(200).json({message:'User created successfully'})


        
    } catch (error) {
        
        res.status(500).json({message:'Server Error'})
    }

}