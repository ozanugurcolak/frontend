import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react'
import { searchCompanies } from '../api';
import { CompanySearch } from '../company';
import CardList from '../Components/CardList/CardList';
import Navbar from '../Components/Navbar/Navbar';
import ListPortfolio from '../Components/Portfolio/ListPortfolio';
import Search from '../Components/Search/Search';
import { PortfolioGet } from '../Models/Portfolio';
import { portfolioAddAPI, portfolioDeleteAPI, portfolioGetAPI } from '../Services/PortfolioService';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
interface Props { }

const SearchPage = (props: Props) => {
  const [search, setSearch] = useState<string>("");
  const [portfolioValues, setPortfolioValues] = useState<PortfolioGet[] | null>(
    []
  );
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string | null>(null);
  useEffect(() => {
    getPortfolio();
  }, []);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const getPortfolio = () => {
    portfolioGetAPI()
      .then((res) => {
        if (res?.data) {
          setPortfolioValues(res?.data);
        }
      })
      .catch((e) => {
        setPortfolioValues(null);
      });
  };
  const onPortfolioCreate = (e: any) => {
    e.preventDefault()
    portfolioAddAPI(e.target[0].value)
    .then((res) => {
      if (res?.status === 204) {
        toast.success("Stock added to portfolio!");
        getPortfolio();
      }
    })
    .catch((e) => {
      toast.warning("Could not add stock to portfolio!");
    });
  }

  const onPortfolioDelete = (e: any) => {
    e.preventDefault();
    portfolioDeleteAPI(e.target[0].value).then((res) => {
      if (res?.status == 200) {
        toast.success("Stock deleted from portfolio!");
        getPortfolio();
      }
    });

  };


  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const result = await searchCompanies(search);
    if (typeof result === "string") {
      setServerError(result);
    } else if (Array.isArray(result)) {
      setSearchResult(result);
    }
  };

  useEffect(() => {
    console.log(searchResult);
  }, [searchResult]);

  return (
    <div className="App">
      <Search onSearchSubmit={onSearchSubmit} search={search} handleSearchChange={handleSearchChange} />
      {serverError ? <div>Error: {serverError}</div> : null}
      <ListPortfolio portfolioValues={portfolioValues!} onPortfolioDelete={onPortfolioDelete} />
      <CardList searchResults={searchResult} onPortfolioCreate={onPortfolioCreate} />
    </div>
  )
}

export default SearchPage