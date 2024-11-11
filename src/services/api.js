import axios from "axios";
import { BASE_URL } from "../utils/constants";

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    // "Content-Type": "application/json",
  },
});


apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


//api calls
export default {
  register(user) {
    return apiClient.post("/register", user);
  },
   async login(user) {
    try {
       const response = await apiClient
         .post("/login", user);
       const token = response.data.token;
       localStorage.setItem("authToken", token);
       localStorage.setItem("user", JSON.stringify(response.data.user));
       return response.data;
     } catch (error) {
       // Handle login error
       console.error("Login error:", error);
       throw error; // Rethrow the error to handle it in the caller
     }
  },
   async getUser() {
        const user = await localStorage.getItem("user");
        return user ? JSON.parse(user) : null;
    },

   logOut  (){
  // Clear user data from local storage
  localStorage.removeItem('user');

  // Clear the authentication token from local storage or wherever it's stored
  localStorage.removeItem("authToken");

  // Optionally, make an API call to the server to log out
  try {
     const response =  apiClient.post('/logout');
     // Handle successful logout if needed
     console.log('Logout successful:', response.data);
   } catch (error) {
     // Handle any errors that occur during the logout process
     console.error('Logout error:', error);
   }
}
};
