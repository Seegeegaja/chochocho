import React from "react";
import "./LoginPage.css";

export default function LoginPage() {
  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h2 className="login-title">로그인</h2>
        <p className="login-subtitle">초콜릿 월드에 오신 것을 환영합니다!</p>

        <form className="login-form">
          <label>이메일</label>
          <input type="email" placeholder="name@example.com" required />

          <label>비밀번호</label>
          <input type="password" placeholder="비밀번호 입력" required />

          <button type="submit" className="login-button">로그인</button>
        </form>

        <div className="login-divider">또는</div>

        <div className="social-login">
          <button className="social">
            <img src="/icon/google.png" alt="Google" />
            Google로 계속하기
          </button>
          <button className="social">
            <img src="/icon/microsoft.png" alt="Microsoft" />
            Microsoft 계정으로 계속하기
          </button>
          <button className="social">
            <img src="/icon/apple.png" alt="Apple" />
            Apple로 계속하기
          </button>
        </div>

        <div className="login-footer">
          계정이 없으신가요? <a href="/signup">회원가입</a>
        </div>
      </div>
    </div>
  );
}
