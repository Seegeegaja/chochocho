import { Routes, Route } from "react-router-dom";
import HotdealPage from "../hotdeal/Page";
import BestPage from "../best/Page";
import ReviewPage from "../review/Page";
import CommuHeader from "../../components/commuheader/Commuheader";
import "./CommunityPage.css";

export default function CommunityPage() {
  return (
    <div>
      <CommuHeader />
      <Routes>
        <Route path='/hotdeal' element={<HotdealPage />} />
        <Route path='/best' element={<BestPage />} />
        <Route path="/review" element={<ReviewPage />} />
      </Routes>
    </div>
  );
}
