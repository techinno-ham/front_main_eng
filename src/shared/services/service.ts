import mainApi from "@/src/infrastructures/http-client-main";
import { API } from "../constanst/api";


class Services {
    checkToken = async () => {
      try {
        const response = await mainApi.get(API.CHECK_TOKEN);
        return response;
      } catch (error: any) {
        throw new Error(error.response?.data?.message || 'check token failed');
      }
    };
    
  
   
  }
  
  export default new Services();