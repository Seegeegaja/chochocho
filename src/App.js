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
import HotdealListPage from "./pages/community/hotdeal/list/Page";
import HotdealDetailPage from "./pages/community/hotdeal/detail/Page";
import BrandPage from "./pages/brand/Page";
import BrandDetailPage from "./pages/brand/detail/Page";
import CartPage from "./pages/cart/Page";
import SignUpPage from "./pages/signup/Page";
import LoginPage from "./pages/login/Page";
import MyPage from "./pages/mypage/Page";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/market' element={<MarketPage />} />
        <Route path="/market/:id" element={<ProductPage />} />
        <Route path="community" element={<CommunityPage />} />
        {/* 커뮤니티 */}
        <Route path="/community" element={<CommunityLayout />}>
          {/* 핫딜 그룹 */}
          <Route path="hotdeal" element={<HotdealPage />}>
            <Route index element={<HotdealListPage />} />
            <Route path="Write" element={<HotWritePage />} />
            <Route path=":id" element={<HotdealDetailPage/>}/>
          </Route>
          <Route path='best' element={<BestPage />} />
          <Route path="review" element={<ReviewPage />} />
        </Route>
        {/* 브렌드 */}
        <Route path="brand" element={<BrandPage/>}/>
        <Route path="brand/:id" element={<BrandDetailPage/>}/>
        {/* 카트 페이지 */}
        <Route path="cart" element={<CartPage/>}/>
        <Route path="login" element={<LoginPage/>}/>
        <Route path="signup" element={<SignUpPage/>}/>
        {/* 마이 페이지 */}
        <Route path="/mypage" element={<MyPage/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;