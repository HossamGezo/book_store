// Libraries
import { Link } from "react-router";

// React Icons
import { FaInstagramSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

// Styles
import "./footer.css";

// Main Component
const Footer = () => {
  return (
    <footer className="footer py-10 bg-primary text-white">
      <div className="custom-container">
        {/* Social Media */}
        <div className="footer-social-media max-lg:flex-col flex items-center justify-around text-center gap-5 border-b-2 border-white pb-5 mb-10">
          <h3 className="footer-social-media-title max-lg:text-2xl text-3xl font-bold select-none">
            Follow us on social media
          </h3>
          <div className="footer-social-media-list flex items-center justify-center gap-5 bg-white w-[300px] px-2.5 py-2.5 rounded-md text-secondary/75">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
              className="focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-hidden rounded-sm transition-all p-0.5"
            >
              <FaInstagramSquare
                className="text-[#E1306C]"
                aria-hidden="true"
              />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Telegram"
              className="focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-hidden rounded-sm transition-all p-0.5"
            >
              <FaTelegram className="text-[#0088cc]" aria-hidden="true" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Facebook"
              className="focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-hidden rounded-sm transition-all p-0.5"
            >
              <FaFacebookSquare className="text-[#1877f2]" aria-hidden="true" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Youtube"
              className="focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-hidden rounded-sm transition-all p-0.5"
            >
              <BsYoutube className="text-[#ff0000]" aria-hidden="true" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on X"
              className="focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-hidden rounded-sm transition-all p-0.5"
            >
              <BsTwitterX className="text-[#333]" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Footer Description */}
        <div className="footer-description grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {/* Footer Description Links */}
          <nav
            className="footer-description-links flex flex-col gap-1.5"
            aria-label="Footer Useful Links"
          >
            <h3 className="select-none text-xl font-bold mb-2">Useful Links</h3>
            <Link
              to="/"
              className="w-fit hover:text-blue-200 hover:underline transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-hidden rounded-sm px-1"
            >
              Home
            </Link>
            <Link
              to="/authors"
              className="w-fit hover:text-blue-200 hover:underline transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-hidden rounded-sm px-1"
            >
              Authors
            </Link>
            <Link
              to="/"
              className="w-fit hover:text-blue-200 hover:underline transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-hidden rounded-sm px-1"
            >
              Blog
            </Link>
            <Link
              to="/about"
              className="w-fit hover:text-blue-200 hover:underline transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-hidden rounded-sm px-1"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="w-fit hover:text-blue-200 hover:underline transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-hidden rounded-sm px-1"
            >
              Contact Us
            </Link>
          </nav>
          {/* Footer Description Address */}
          <div className="footer-description-address">
            <h3 className="footer-description-address-title select-none text-xl font-bold mb-3.5">
              Contact Information
            </h3>
            <div className="footer-description-address-location flex items-center gap-2 mb-2">
              <ImLocation aria-hidden="true" />
              Egypt – Cairo – Nasr City
            </div>
            <div className="footer-description-address-telephone flex items-center gap-2 mb-2">
              <BsFillTelephoneFill aria-hidden="true" />
              123-456-789
            </div>
            <div className="footer-description-address-email flex items-center gap-2">
              <MdEmail aria-hidden="true" />
              info@fakeemail.com
            </div>
          </div>

          {/* Footer About Us */}
          <div className="footer-description-about-us md:col-span-2">
            <h3 className="footer-description-about-us-title select-none text-xl font-bold mb-3.5">
              About Us
            </h3>
            <p className="footer-description-about-us-desc text-justify leading-relaxed text-sm opacity-90">
              Welcome to our online bookstore — your trusted destination for
              discovering, exploring, and purchasing books from every genre. We
              believe that reading is more than a hobby; it is a journey that
              expands the mind, enriches the soul, and opens doors to new ideas.
              Our mission is to make books accessible to everyone by offering a
              wide collection of titles at excellent prices, with fast delivery
              and a smooth shopping experience. Whether you are a student, a
              researcher, or simply a book lover, you will always find something
              that inspires you here. We are committed to providing quality,
              authenticity, and exceptional customer service. Thank you for
              choosing us as your reading companion.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
