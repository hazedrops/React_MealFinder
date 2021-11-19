import { useState } from 'react';

// import DetailModal from "./components/DetailModal";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchEntry from "./components/SearchEntry";
import SearchResults from "./components/SearchResults";
import StatsDiv from "./components/StatsDiv";
// import Overlay from "./components/Overlay";

import './styles/style.scss';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [clickedItem, setClickedItem] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();

    fetchRecipes(searchTerm);
  }

  const fetchRecipes = async (query) => {
    const tempRecipes = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
      .then(res => res.json());
    
    setIsLoading(true);

    // console.log("in the fetchrecipes") 
    // console.log(tempRecipes);
    setRecipes(tempRecipes);
    setIsLoading(false);
    // console.log(typeof(tempRecipes));
  }

  const handleClose = () => {
    setIsOpen(false);
    setClickedItem('');
    console.log('in the handleClose');
  }
  
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
        { (recipes && !isLoading) ? <SearchResults recipes={recipes} open={isOpen} setIsOpen={setIsOpen} onClose={handleClose} clickedItem={clickedItem} setClickedItem={setClickedItem} /> : <div>Loading...</div> }
        {/* <DetailModalContainer setIsModalOpen={setIsModalOpen} /> */}
        {/* <DetailModalContainer /> */}
        <Footer />
      </main>
    </>

  );
}

export default App;
