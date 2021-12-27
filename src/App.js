
// import DetailModal from "./components/DetailModal";
import { MealfinderProvider } from "./context/MealfinderContext";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchEntry from "./components/SearchEntry";
import SearchResults from "./components/SearchResults";
import StatsDiv from "./components/StatsDiv";
// import Overlay from "./components/Overlay";

import './styles/style.scss';

function App() {  
  return (
    <MealfinderProvider>
      <main>
        <Header />
        <SearchEntry />
        { (recipes && !isLoading) && <StatsDiv recipes={recipes} />}
        { (recipes && !isLoading) ? <SearchResults recipes={recipes} open={isOpen} setIsOpen={setIsOpen} onClose={handleClose} clickedItem={clickedItem} setClickedItem={setClickedItem} /> : <div>Loading...</div> }
        {/* <DetailModalContainer setIsModalOpen={setIsModalOpen} /> */}
        {/* <DetailModalContainer /> */}
        <Footer />
      </main>
    </MealfinderProvider>

  );
}

export default App;
