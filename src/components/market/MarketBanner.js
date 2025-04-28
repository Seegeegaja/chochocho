// src/components/market/MarketBanner.js

export default function MarketBanner() {
    return (
      <section
        className="market-banner"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/image/martketbanner.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "400px",
        }}
      >
        <div className="banner-inner">
          <h1 className="banner-title">세계 최고의 초콜릿</h1>
          <p className="banner-subtitle">벨기에, 스위스, 프랑스 프리미엄 초콜릿을 만나보세요.</p>
          <div className="banner-buttons">
            <button className="banner-btn">다크 초콜릿</button>
            <button className="banner-btn">밀크 초콜릿</button>
          </div>
        </div>
      </section>
    );
  }
  