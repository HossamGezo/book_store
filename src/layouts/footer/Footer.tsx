// React Router
import {Link} from "react-router";
// React Icons
import {FaInstagramSquare} from "react-icons/fa";
import {FaTelegram} from "react-icons/fa";
import {FaFacebookSquare} from "react-icons/fa";
import {BsYoutube} from "react-icons/bs";
import {BsTwitterX} from "react-icons/bs";
import {ImLocation} from "react-icons/im";
import {BsFillTelephoneFill} from "react-icons/bs";
import {MdEmail} from "react-icons/md";
// Styles
import "./footer.css";
// Main Component
const Footer = () => {
  return (
    <>
      <section className="footer py-10 bg-primary text-white">
        <div className="ccontainer">
          {/* Social Media */}
          <div className="footer-social-media max-lg:flex-col flex-around text-center gap-5 border-b-2 border-white pb-5 mb-10">
            <h3 className="footer-social-media-title max-lg:text-2xl text-3xl font-bold">
              Follow us on social media
            </h3>
            <div className="footer-social-media-list flex-center gap-3.5 bg-white max-lg:w-[200px] w-[300px] px-2.5 py-2.5 rounded-md text-secondary/75">
              <FaInstagramSquare className="hover:text-[#E1306C]" />
              <FaTelegram className="hover:text-[#0088cc]" />
              <FaFacebookSquare className="hover:text-[#1877f2]" />
              <BsYoutube className="hover:text-[#ff0000]" />
              <BsTwitterX className="hover:text-[#333]" />
            </div>
          </div>
          {/* Footer Description */}
          <div className="footer-description grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {/* Footer Description Links */}
            <div className="footer-description-links flex flex-col">
              <h3>Usefull Links</h3>
              <Link to="/">Home</Link>
              <Link to="/authors">Authors</Link>
              <Link to="/">Blog</Link>
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact Us</Link>
            </div>
            {/* Footer Description Address */}
            <div className="footer-description-address">
              <h3 className="foter-description-address-title">
                Contact Information
              </h3>
              <div className="foter-description-address-location">
                <ImLocation />
                Egypt – Cairo – Nasr City
              </div>
              <div className="foter-description-address-telephone">
                <BsFillTelephoneFill />
                123-456-789
              </div>
              <div className="foter-description-address-email">
                <MdEmail />
                info@fakeemail.com
              </div>
            </div>
            {/* Footer About Us */}
            <div className="footer-description-about-us md:col-span-2">
              <h3 className="footer-description-about-us-title">About Us</h3>
              <p className="footer-description-about-us-desc">
                Welcome to our online bookstore — your trusted destination for
                discovering, exploring, and purchasing books from every genre.
                We believe that reading is more than a hobby; it is a journey
                that expands the mind, enriches the soul, and opens doors to new
                ideas. Our mission is to make books accessible to everyone by
                offering a wide collection of titles at excellent prices, with
                fast delivery and a smooth shopping experience. Whether you are
                a student, a researcher, or simply a book lover, you will always
                find something that inspires you here. We are committed to
                providing quality, authenticity, and exceptional customer
                service. Thank you for choosing us as your reading companion.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Footer;
