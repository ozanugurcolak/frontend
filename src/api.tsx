import axios from "axios";
import {
  CompanyBalanceSheet,
  CompanyIncomeStatement,
  CompanyKeyMetrics,
  CompanyProfile,
  CompanySearch,
} from "./company";
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

  export const getCompanyProfile = async (query: string) => {
    try {
      const data = await axios.get<CompanyProfile[]> (
        `https://financialmodelingprep.com/api/v3/profile/${query}?apikey=${process.env.REACT_APP_API_KEY}`
      )
      return data;
    }
    catch (error:any) {
      console.log("error message from API: ",error.message)
    }
  }
  export const getKeyMetrics = async (query: string) => {
    try {
      const data = await axios.get<CompanyKeyMetrics[]>(
        `https://financialmodelingprep.com/api/v3/key-metrics-ttm/${query}?limit=40&apikey=${process.env.REACT_APP_API_KEY}`
      );
      return data;
    } catch (error: any) {
      console.log("error message: ", error.message);
    }
  };

  export const getIncomeStatement = async (query: string) => {
    try {
      const data = await axios.get<CompanyIncomeStatement[]>(
        `https://financialmodelingprep.com/api/v3/income-statement/${query}?limit=50&apikey=${process.env.REACT_APP_API_KEY}`
      );
      return data;
    } catch (error: any) {
      console.log("error message: ", error.message);
    }
  };
  
  export const getBalanceSheet = async (query: string) => {
    try {
      const data = await axios.get<CompanyBalanceSheet[]>(
        `https://financialmodelingprep.com/api/v3/balance-sheet-statement/${query}?limit=20&apikey=${process.env.REACT_APP_API_KEY}`
      );
      return data;
    } catch (error: any) {
      console.log("error message: ", error.message);
    }
  };