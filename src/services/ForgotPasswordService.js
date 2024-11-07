import axios from "axios";

export function SendEmailForgot (data) {
    try{
        console.log(data)
        const response = axios.post( "http://localhost//10.0.2.2:5004/api/Authentication/forgot-password" ,data)
    }
    catch (error){
        if(error.response){

        }
    }
}