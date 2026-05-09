import { FaFacebookF } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import "./Header.css"

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="emailus">
          <a href="mailto:hello@velour.com"><TfiEmail /> Email us</a>
        </div>
        <div className="sociallinks">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><SlSocialInstagram /></a>
          <a href="#"><FaWhatsapp /></a>
        </div>
      </div>
    </header>
  );
}
