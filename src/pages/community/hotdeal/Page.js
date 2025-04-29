import { useNavigate } from "react-router-dom";
import "./HotdealPage.css";

export default function HotdealPage() {
  const navigate = useNavigate();
  const hotdeals = [
    {
      brand: "고디바",
      title: "고디바(EU) 다크 초콜릿 컬렉션 50% 세일 (10)",
      likes: 532,
      comments: 178,
      date: "2023-04-25"
    }
  ];

  const hotdealList = [
    { type: "핫딜", shop: "초콜릿월드", title: "고디바 초콜릿 50% 할인 이벤트", likes: 89, comments: 32, views: 1245, author: "초콜릿마스터", date: "2023-04-20" },
    { type: "핫딜", shop: "초콜릿월드", title: "린트 초콜릿 1+1 프로모션", likes: 67, comments: 24, views: 987, author: "초코홀릭", date: "2023-04-18" },
    { type: "핫딜", shop: "초콜릿월드", title: "토블론 초콜릿 특가 판매", likes: 45, comments: 18, views: 756, author: "달콤한인생", date: "2023-04-15" },
    { type: "핫딜", shop: "초콜릿월드", title: "페레로 로쉐 선물세트 30% 할인", likes: 38, comments: 15, views: 632, author: "초콜릿러버", date: "2023-04-12" },
    { type: "핫딜", shop: "초콜릿월드", title: "벨기에 초콜릿 수입 기념 특가", likes: 29, comments: 12, views: 543, author: "초코마니아", date: "2023-04-10" },
    { type: "핫딜", shop: "초콜릿월드", title: "가나 초콜릿 묶음 할인", likes: 18, comments: 9, views: 421, author: "초코사랑", date: "2023-04-08" }
  ];

  return (
    <div className="hotdeal-page">
      {/* 상단 배너 */}
      <div className="hotdeal-banner"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/image/hotdeal.png)` }}
      >
        <span className="badge">🍫 BEST HOT DEAL</span>
      </div>

      {/* 핫딜 리스트 */}
      <div className="hotdeal-table">
        <h4>BEST HOT DEAL</h4>
        <ul>
          {hotdeals.map((deal, i) => (
            <li key={i}>
              <span className="brand">{deal.brand}</span>
              <span className="title">{deal.title} <span className="label">HOTDEAL</span></span>
              <span className="likes">👍 {deal.likes}</span>
              <span className="comments">💬 {deal.comments}</span>
              <span className="date">{deal.date}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 🔥 여기 추가되는 부분 */}
      <div className="hotdeal-table">
        <table>
          <thead>
            <tr>
              <th>구분</th>
              <th>쇼핑몰</th>
              <th>제목</th>
              <th>추천/댓글</th>
              <th>조회수</th>
              <th>작성자</th>
              <th>등록일</th>
            </tr>
          </thead>
          <tbody>
            {hotdealList.map((item, index) => (
              <tr key={index}>
                <td><span className="type-badge">{item.type}</span></td>
                <td>{item.shop}</td>
                <td>
                  {item.title}
                  {index < 3 && <span className="label">HOTDEAL</span>}
                </td>
                <td>👍 {item.likes} 💬 {item.comments}</td>
                <td>{item.views}</td>
                <td>{item.author}</td>
                <td>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 페이지네이션 */}
      <div className="pagination">
        <button>{"<"}</button>
        <button className="active">1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>{">"}</button>
      </div>

      {/* 글쓰기 버튼 */}
      <div className="write-button">
        <button onClick={() => navigate("/community/hotdeal/write")}>글쓰기</button>
      </div>
    </div>
  );
}

