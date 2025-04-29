import { Routes, Route, Outlet } from "react-router-dom";
import HotdealPage from "./hotdeal/Page";
import BestPage from "./best/Page";
import ReviewPage from "./review/Page";
import CommuHeader from "../../components/commuheader/Commuheader";
import "./CommunityPage.css";
import { useState } from "react";

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState("hotdeal");

  const posts = {
    hotdeal: [
      {
        title: "고디바 다크 초콜릿 컬렉션 솔직 후기",
        content: "고디바 다크 초콜릿 컬렉션, 정말 최고네요! 깊고 진한 풍미가 입안 가득 퍼지는 느낌이 너무 좋아요.",
        author: "초콜릿사랑",
        time: "약 1년 전",
        views: 1987,
        comments: 98
      },
      {
        title: "린트 밀크 초콜릿, 부드러움의 극치!",
        content: "린트 밀크 초콜릿은 정말 부드럽고 달콤해요. 입에서 사르르 녹는 느낌이 너무 좋아서 계속 먹게 돼요.",
        author: "달콤한결",
        time: "1년 이상 전",
        views: 1654,
        comments: 76
      },
    ],
    best: [
      {
        title: "베스트 초콜릿 브랜드 총정리!",
        content: "최고의 초콜릿 브랜드를 정리했습니다. 맛, 가격, 품질을 비교해봤어요.",
        author: "초코러버",
        time: "6개월 전",
        views: 2345,
        comments: 156
      }
    ],
    review: [
      {
        title: "수제 초콜릿, 정성이 느껴지는 맛",
        content: "직접 만든 수제 초콜릿은 시판 초콜릿과 비교할 수 없는 특별한 맛이 있어요.",
        author: "손재주꾼",
        time: "1년 이상 전",
        views: 1432,
        comments: 54
      }
    ]
  };
  return (
    <div>
      {/* 커뮤니티 상단 네브바 */}
      <CommuHeader />
      <section className="community-section">
        <div className="community-inner">
          <h1 className="community-title">커뮤니티</h1>
          <h2 className="community-subtitle">인기 게시글</h2>
          {/* 카드 리스트 */}
          <div className="card-container">
            {/* 카드 1 */}
            <div className="post-card">
              <span className="tag hot">핫딜</span>
              <span className="date">2024.2.10.</span>
              <h3>고디바 초콜릿, 발렌타인데이 선물로 딱!</h3>
              <p>고디바 초콜릿이 발렌타인데이에 좋은 이유를 지금 바로 확인해보세요! 특별한 초콜릿으로 마음을 전하세요.</p>
              <div className="meta">
                <span>초콜릿마니아</span> <span>조회 2345 · 댓글 123</span>
              </div>
            </div>

            {/* 카드 2 */}
            <div className="post-card">
              <span className="tag normal">일반</span>
              <span className="date">2023.11.17.</span>
              <h3>수능 끝! 초콜릿 먹고 힘내자!</h3>
              <p>수능 끝난 수험생 여러분, 달콤한 초콜릿으로 스트레스를 날려버리고, 새로운 시작을 응원합니다!</p>
              <div className="meta">
                <span>달콤한인생</span> <span>조회 1876 · 댓글 89</span>
              </div>
            </div>
            {/* 카드 3 */}
            <div className="post-card">
              <span className="tag info">정보</span>
              <span className="date">2023.10.25.</span>
              <h3>초콜릿, 알고 먹으면 더 맛있다!</h3>
              <p>초콜릿의 종류와 효능을 제대로 알면 더 맛있게 즐길 수 있습니다.</p>
              <div className="meta">
                <span>초콜릿박사</span> <span>조회 1543 · 댓글 67</span>
              </div>
            </div>
          </div>
        </div>
        {/* 최신 게시글 영역 */}
        <div className="community-inner">
        <h2 className="recent-title">최신 게시글</h2>
          {/* 탭 메뉴 */}
          <div className="tab-menu">
            <button
              className={activeTab === "hotdeal" ? "tab active" : "tab"}
              onClick={() => setActiveTab("hotdeal")}>
              핫딜
            </button>
            <button
              className={activeTab === "best" ? "tab active" : "tab"}
              onClick={() => setActiveTab("best")}>
              베스트
            </button>
            <button
              className={activeTab === "review" ? "tab active" : "tab"}
              onClick={() => setActiveTab("review")}>
              후기
            </button>
          </div>
          <div className="recent-posts">
            <div className="recent-list">
              {posts[activeTab].map((post, index) => (
                <div className="recent-item" key={index}>
                  <div className="recent-item-title">{post.title}</div>
                  <div className="recent-item-content">{post.content}</div>
                  <div className="recent-item-meta">
                    <span>{post.author} · {post.time}</span>
                    <span>👁 {post.views} · 💬 {post.comments}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
