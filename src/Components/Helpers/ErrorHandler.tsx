import axios from "axios";
import { toast } from "react-toastify";

export const handleError = (error: any) => {
  if (error.response) {
    const err = error.response;
    
    if (Array.isArray(err.data.errors)) {
      for (let val of err.data.errors) {
        toast.warning(val.description);
      }
    } else if (typeof err.data.errors === "object") {
      for (let e in err.data.errors) {
        toast.warning(err.data.errors[e][0]);
      }
    } else if (err.data) {
      toast.warning(err.data);
    } else if (err.response.status === 401) { 
      toast.warning("Please login");
      window.history.pushState({}, "LoginPage", "/login");
    } else {
      toast.warning("An unexpected error occurred.");
    }
  } else {
    toast.error("An unexpected error occurred.");
    console.error(error);
  }
};
