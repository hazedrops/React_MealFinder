import {  createContext, useState } from 'react';

const MealfinderContext = createContext();

export const MealfinderProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [clickedItem, setClickedItem] = useState('');
  const [finalIngredients, setFinalIngredients] = useState([]);

  // Fetch recipe
  const fetchRecipes = async (query) => {
    if(!query) {
      query = null;
    }

    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const data = await response.json();
    
    setIsLoading(true);
    setRecipes(data);
    setIsLoading(false);
  }

  const handleSearch = (e) => {
    e.preventDefault();

    fetchRecipes(searchTerm);
  }  

  const handleClose = () => {
    setIsOpen(false);
    setClickedItem('');
    setFinalIngredients([]);
    console.log('in the handleClose');
  }

  return <MealfinderContext.Provider 
      value={{
        searchTerm,
        recipes,
        isLoading,
        isOpen,
        clickedItem,
        finalIngredients,
        setSearchTerm,
        setRecipes,
        handleSearch,
        handleClose,
        setIsLoading,
        setIsOpen,
        setClickedItem,
        setFinalIngredients
      }}
  >
    { children }
  </MealfinderContext.Provider>
}

export default MealfinderContext;