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

export async function loginUser(data:any) {
    try {
        const response = await axios.post('http://localhost:3000/auth/login', data);
        return response.data;
    }
    catch (error: string | any) {
        throw new Error(error);
    }
}