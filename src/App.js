import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/Page";
import MarketPage from "./pages/market/Page"
import ProductPage from "./pages/market/ProductPage";
import CommunityPage from "./pages/community/Page";
import HotdealPage from "./pages/community/hotdeal/Page";
import BestPage from "./pages/community/best/Page";
import ReviewPage from "./pages/community/review/Page";
import CommunityLayout from "./pages/community/layout/Page";
import HotWritePage from "./pages/community/hotdeal/WritePage";

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/market' element={<MarketPage />} />
        <Route path="/market/:id" element={<ProductPage />} />
        <Route path="community" element={<CommunityPage/>}/>

        {/* 커뮤니티 */}
        <Route path="/community" element={<CommunityLayout />}>
          <Route path='hotdeal' element={<HotdealPage />} />
          <Route path="hotdeal/Write" element={<HotWritePage/>}/>
          <Route path='best' element={<BestPage />} />
          <Route path="review" element={<ReviewPage />} />
        </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;