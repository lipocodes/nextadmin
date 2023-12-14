import {User, Product} from './models'
import { connectToDB } from '@/app/lib/utils'

export const fetchUsers = async(q,page) => {

  const regex = RegExp(q,"i"); 
  const ITEM_PER_PAGE = 2; 

  try {
    connectToDB();
    const count = await User.find({username: { $regex: regex }}).count();
    const users = await User.find({username: { $regex: regex } }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE*(page-1));
    return {users,count};
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};