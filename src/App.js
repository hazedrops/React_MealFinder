import { useState, useEffect } from 'react';

import DetailModalContainer from "./DetailModalContainer";
import Footer from "./Footer";
import Header from "./Header";
import SearchEntry from "./SearchEntry";
import SearchResults from "./SearchResults";
import StatsDiv from "./StatsDiv";
import Overlay from "./Overlay";

import './Styles/style.scss';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();

    fetchRecipes(searchTerm);
  }

  const fetchRecipes = async (query) => {
    const tempRecipes = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
      .then(res => res.json());
    
    setIsLoading(true);

    console.log("in the fetchrecipes") 
    console.log(tempRecipes);
    setRecipes(tempRecipes);
    setIsLoading(false);
    // console.log(typeof(tempRecipes));
  }

  // useEffect(() => {
  //   handleSearch();
  // }, []);
  
  return (
    <>
      <main>
        <Header />
        <SearchEntry 
          handleSearch={handleSearch}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          recipes={recipes}
        />
        { (recipes && !isLoading) && <StatsDiv recipes={recipes} />}
        { (recipes && !isLoading) ? <SearchResults recipes={recipes} /> : <div>Loading...</div> }
        {/* <DetailModalContainer setIsModalOpen={setIsModalOpen} /> */}
        {/* <DetailModalContainer /> */}
        <Footer />
      </main>
      <div>
        <Overlay />
      </div>
    </>

  );
}

export default App;
