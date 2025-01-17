import axios from "axios";
const UserApi = axios.create({
    baseURL: process.env.UserApi
});
const url="/users";

export const GetUser = async()=>{
    const res=await UserApi.get(url+"/read");
    return res.data;
}

export const CreateUser = async(value)=>{
    return await UserApi.post(url+"/create");
}


export const UpdateUser = async(value)=>{
    return await UserApi.patch(url+"/update");
}

export const DeleteUser = async(value)=>{
    return await UserApi.delete(url+"/delete");
}
