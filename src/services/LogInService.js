import axios from "axios";
import { useAuthStore } from "../Zustand/LoginZustand";

//Fetch LogIn API service

export async function LogInService(data) {

    try {
        console.log("Enviando datos de inicio de sesión:", data);

        const response = await axios.post('http://10.0.2.2:5004/api/Authentication/login', data);
        const responseData = response.data

        const userValues = { email, idToken, rolName, userName, userId, image } = responseData.value;
        console.log("Info del usuario:", userValues)
        return JSON.stringify(userValues);

    } catch (error) {
        if (error.response) {

            const messageMatch = error.response.data;
            console.log("Error en la solicitud:", messageMatch);
            console.log("Codigo de estado:", error.response.status);
            throw error.response.data;
        }
        else {
            console.error("Error en la solicitud", error.message || "Error de red")
            throw { message: "Network error" };
        }
    }
}

