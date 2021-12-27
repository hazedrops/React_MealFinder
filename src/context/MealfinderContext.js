import {  createContext, useState, useEffect } from 'react';

const MealfinderContext = createContext();

export const MealfinderProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [clickedItem, setClickedItem] = useState('');

  useEffect(() => {
    fetchRecipes();
  }, []); 

  // Fetch recipe
  const fetchRecipes = async (query) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const data = await response.json();
    
    setIsLoading(true);

    // console.log("in the fetchrecipes") 
    // console.log(tempRecipes);
    setRecipes(data);
    setIsLoading(false);
    // console.log(typeof(tempRecipes));
  }

  const handleSearch = (e) => {
    e.preventDefault();

    fetchRecipes(searchTerm);
  }  

  const handleClose = () => {
    setIsOpen(false);
    setClickedItem('');
    console.log('in the handleClose');
  }

  // Add feedback
  // const addFeedback = async (newFeedback) => {
  //   const response = await fetch('/feedback', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type':'application/json',
  //     },
  //     body: JSON.stringify(newFeedback),
  //   });

  //   const data = await response.json();

  //   setFeedback([data, ...feedback]);
  // }

  // // Delete Feedback
  // const deleteFeedback = async (id) => {
  //   if(window.confirm('Are you sure you want to delete?')) {
  //     await fetch(`/feedback/${id}`, {
  //       method: 'DELETE'
  //     });

  //     setFeedback(feedback.filter((item) => item.id !== id));
  //   }
  // }

  // // Update feedback item
  // const updateFeedback = async (id, updItem) => {
  //   const response = await fetch(`/feedback/${id}`, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type':'application/json',
  //     },
  //     body: JSON.stringify(updItem),
  //   });

  //   const data = await response.json();

  //   setFeedback(
  //     feedback.map((item) =>(item.id === id ? {id, ...data} : item))
  //   );

  //   // Reset the FeedbackEditState 
  //   setFeedbackEditState({
  //     item: {},
  //     edit: false,
  //   });
  // }

  // // Set item to be updated
  // const editFeedback = (item) => {
  //   setFeedbackEditState({
  //     item,
  //     edit: true
  //   })
  // }

  return <MealfinderContext.Provider 
      value={{
        searchTerm,
        recipes,
        isLoading,
        isOpen,
        clickedItem,
        handleSearch,
        handleClose,
        // Functions here!!

      }}
  >
    { children }
  </MealfinderContext.Provider>
}

export default MealfinderContext;