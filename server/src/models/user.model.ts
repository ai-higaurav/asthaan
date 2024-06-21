import mongoose ,{Schema , Types, Document, mongo} from "mongoose";

interface IUser extends Document{
    username: string;
    fname:string;
    lname:string;
    profile:string;
    email:string;
}

const userSchema : Schema <IUser> = new mongoose.Schema({
    username: {
        type:String,
        required:true,
        unique:true
    },
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        require:true
    },
    profile:{
        type:String,
    },
    email:{
        type:String,
        required:true,
    }
},
{
    timestamps:true
})

const User = mongoose.model<IUser>('User', userSchema , 'Users')

export default User;