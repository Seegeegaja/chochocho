import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Routes , Route } from "react-router-dom";
import HomePage from "./pages/home/Page";
import MarketPage from "./pages/market/Page"
import ProductPage from "./pages/market/ProductPage";
import CommunityPage from "./pages/community/Page";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/market' element={<MarketPage/>}/>
        <Route path="/market/:id" element={<ProductPage/>}/>
        <Route path="/community" element={<CommunityPage/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;