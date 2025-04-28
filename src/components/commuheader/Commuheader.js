import { Link } from "react-router-dom";

export default function CommuHeader() {
    return (
        <div>
            <nav>
                <Link to="/pages/hotdeal">핫딜</Link>
                <Link to="/pages/best">베스트</Link>
                <Link to="/pages/review">후기</Link>
            </nav>
        </div>
    );
}