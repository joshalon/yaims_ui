import { useState, useEffect } from "react";
import axios from "axios";
function Token() {
    const [token, setToken] = useState(null)
const getToken = async () => {
    try {
      const response = await axios.get("https://famous-crossing-420503.wl.r.appspot.com/getSessionToken" ,{
        withCredentials: true
      });
      setToken(response.data.token)
    }
    catch (error) {
      console.error("Error getting token", error.response?.data, error.message);
    }
   return {
        token
   }
  };
  useEffect(() => {
    getToken();
  }, []);
}
export default Token;