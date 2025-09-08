import axios from "axios";

export async function registerUser(data: any) {
    try {
        const response = await axios.post('http://localhost:3000/users', data);
        return response.data;
    } catch (error) {
        console.error("Error making POST request:", error);
        throw error;
    }
}

export async function loginUser(data:any){
    let statusCode = 200;
try {
    statusCode = 200;
    return await axios.post('http://localhost:3000/auth/login', data);
}
catch(err) {
    if(axios.isAxiosError(err) && err.response) {
        statusCode = err.response.status;
        return err.response.status;
    }
}
return statusCode;

}