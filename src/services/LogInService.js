import axios from "axios";

export async function LogInService(password, email) {
    
    try {
        console.log("Enviando datos de inicio de sesión:", password, email);

        const request = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({password, email})
        };

        const response = await axios.post('http://10.0.2.2:5006/api/users/login', request);
        console.log("Fetch completado, obteniendo respuesta...", response.data);

    } catch (error) {
        console.error("Error en la solicitud:", error);
    }
}
