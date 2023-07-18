// a model folder - would be a description of how a table or collection in our database would look like
import mongoose from 'mongoose';
const UserSchema = new mongoose.Schema({
    username: {type:String,required:true,unique:true},
    password: {type:String,required:true},
    savedRecipes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Recipe" }],
});
// there will be a table/collection called users

export const UserModel = mongoose.model('Users',UserSchema);
