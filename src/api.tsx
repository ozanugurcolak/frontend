import axios from "axios";
import { CompanySearch } from "./company";

export interface SearchResponse {
  data: CompanySearch[];
}

export const searchCompanies = async (query: string) => {
    try {
      const { data } = await axios.get<SearchResponse>(
        `https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&exchange=NASDAQ&apikey=${process.env.REACT_APP_API_KEY}`
      );
     
      return data;
    } catch (error: any) {  
      console.log("Error Occurred: ", error); // Hata detaylarını yazdırın
      if (error.response) {  
        console.log("Error Response: ", error.response);
        return error.message;
      } else {
        console.log("Unexpected Error: ", error);
        return "An unexpected error has occurred.";
      }
    }
  };
