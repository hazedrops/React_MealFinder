// import DetailModal from "./components/DetailModal";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchEntry from "./components/SearchEntry";
import SearchResults from "./components/SearchResults";
import StatsDiv from "./components/StatsDiv";
import { MealfinderProvider } from "./context/MealfinderContext";
// import Overlay from "./components/Overlay";

import './styles/style.scss';

function App() {  
  return (
    <MealfinderProvider>
      <main>
        <Header />
        <SearchEntry />
        <StatsDiv />         
        <SearchResults />
        {/* <DetailModalContainer setIsModalOpen={setIsModalOpen} /> */}
        {/* <DetailModalContainer /> */}
        <Footer />
      </main>
    </MealfinderProvider>
  );
}

export default App;
