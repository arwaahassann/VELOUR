import Link from "next/link";
import ScrollToProducts from "../componets/ScrollToProducts/ScrollToProducts";
import Products from "./products/productclient"

export default function Home() {
  return (
    <>
      <div className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="hero-label">New Collection</span>
          <h1 className="hero-title">
            Draped in<br />Distinction
          </h1>
          <div className="hero-divider" />
          <p className="hero-subtitle">
            Curated luxury for women who move<br />
            through the world with intention.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">
              <Link href={"Auth/Signup"} style={{ textDecoration: "none", color: "inherit" }}>
                Join Velour
              </Link>
            </button>
            <ScrollToProducts />
          </div>
        </div>
      </div>

      <div id="products-section">
        <Products />
      </div>
    </>
  );
}
