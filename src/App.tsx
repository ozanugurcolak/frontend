import { ChangeEvent, SyntheticEvent, useState, useEffect } from 'react';
import './App.css';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import { CompanySearch } from './company';
import { searchCompanies } from './api';

function App() {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onClick = async (e: SyntheticEvent) => {
    e.preventDefault();
    const result = await searchCompanies(search);
    if (typeof result === "string") {
      setServerError(result);
    } else if (Array.isArray(result)) {
      setSearchResult(result); // Search results are set here
    }
  };

  useEffect(() => {
    console.log(searchResult); // This will log the updated search results
  }, [searchResult]); // Triggered whenever searchResult is updated

  return (
    <div className="App">
      <Search onClick={onClick} search={search} handleChange={handleChange} />
      {serverError ? <div>Error: {serverError}</div> : null}
      <CardList  />
    </div>
  );
}

export default App;
