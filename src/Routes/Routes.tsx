import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/HomePage";
import SearchPage from "../Pages/SearchPage";
import CompanyPage from "../Pages/CompanyPage";
import CompanyProfile from "../Components/CompanyProfile/CompanyProfile";
import IncomeStatements from "../Components/IncomeStatements/IncomeStatements";
import DesignPage from "../Pages/DesignPage";
import BalanceSheet from "../Components/BalanceSheet/BalanceSheet";

export const router = createBrowserRouter([{
    path:  "/",
    element: <App/>,
    children: [
        {path: "", element: <HomePage/>},
        {path: "search", element: <SearchPage/>},
        { path: "design-page", element: <DesignPage /> },
        {path: "company/:ticker", element: <CompanyPage/>, children: [
            {path:"company-profile",element:<CompanyProfile/>}, 
            {path:"income-statement",element:<IncomeStatements/>},
            { path: "balance-sheet", element: <BalanceSheet /> },
        ]}
    ]
}])