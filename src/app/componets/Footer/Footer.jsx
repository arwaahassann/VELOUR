import Link from "next/link";
import "./Footer.css";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-newsletter">
        <p className="newsletter-label">Join the Velour Circle</p>
        <div className="newsletter-form">
          <input type="email" placeholder="Your email address" />
          <button>Subscribe</button>
        </div>
      </div>

      <div className="footer-main">
        <div className="footer-brand">
          <h2 className="footer-logo">VELOUR</h2>
          <p className="footer-tagline">
            Refined luxury for every<br />moment that matters.
          </p>
          <div className="footer-socials">
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="WhatsApp"><FaWhatsapp /></a>
            <a href="mailto:hello@velour.com" aria-label="Email"><MdOutlineEmail /></a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Shop</h4>
          <ul>
            <li><Link href="/">New Arrivals</Link></li>
            <li><Link href="/">Best Sellers</Link></li>
            <li><Link href="/">All Collections</Link></li>
            <li><Link href="/Wishlist">Wishlist</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Help</h4>
          <ul>
            <li><Link href="/Myorders">My Orders</Link></li>
            <li><Link href="#">Shipping & Returns</Link></li>
            <li><Link href="#">Size Guide</Link></li>
            <li><Link href="/">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul className="footer-contact">
            <li>hello@velour.com</li>
            <li>+20 100 000 0000</li>
            <li>Port Said, Egypt</li>
            <li>Sat – Thu: 10am – 9pm</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} VELOUR. All rights reserved.</p>
        <div className="footer-bottom-links">
          <Link href="#">Privacy Policy</Link>
          <span>·</span>
          <Link href="#">Terms of Use</Link>
        </div>
      </div>
    </footer>
  );
}
