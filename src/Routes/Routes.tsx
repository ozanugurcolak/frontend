import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/HomePage";
import SearchPage from "../Pages/SearchPage";
import CompanyPage from "../Pages/CompanyPage";
import CompanyProfile from "../Components/CompanyProfile/CompanyProfile";
import IncomeStatements from "../Components/IncomeStatements/IncomeStatements";
import DesignPage from "../Pages/DesignPage";
import BalanceSheet from "../Components/BalanceSheet/BalanceSheet";
import CashflowStatement from "../Components/CashflowStatement/CashflowStatement";
import HistoricalDividend from "../Components/HistoricalDividend/HistoricalDividend";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import ProtectedRoute from "./ProtectedRoute";

export const router = createBrowserRouter([{
    path: "/",
    element: <App />,
    children: [
        { path: "", element: <HomePage /> },
        { path: "login", element: <LoginPage /> },
        { path: "register", element: <RegisterPage /> },
        {
            path: "search",
            element: (
              <ProtectedRoute>
                <SearchPage />
              </ProtectedRoute>
            ),
          },
        { path: "design-page", element: <DesignPage /> },
        {
            path: "company/:ticker", element: (
                <ProtectedRoute>
                  <CompanyPage />
                </ProtectedRoute>
              ), children: [
                { path: "company-profile", element: <CompanyProfile /> },
                { path: "income-statement", element: <IncomeStatements /> },
                { path: "balance-sheet", element: <BalanceSheet /> },
                { path: "cashflow-statement", element: <CashflowStatement /> },
                { path: "historical-dividend", element: <HistoricalDividend /> },
            ]
        }
    ]
}])