import {
  FaHome,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { RiMessage2Fill } from "react-icons/ri";
import { MdOutlineWatchLater } from "react-icons/md";
import footerLogo from "../../../../assets/logo/logo-1.png";

const Footer = () => {
  return (
    <div className="border-t bg-base-200 text-base-content">
      {/* Top Section */}
      <footer className="py-12 px-6 container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="space-y-4 text-center md:text-left">
          <div className="flex justify-center md:justify-start">
            <img src={footerLogo} className="h-12" />
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2">
            <FaHome className="text-orange-500 text-xl" />
            <p className="text-sm">82 Valley Farms Court Grovetown</p>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2">
            <IoMdCall className="text-orange-500 text-xl" />
            <p className="text-sm">(546) 347-9636</p>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2">
            <RiMessage2Fill className="text-orange-500 text-xl" />
            <p className="text-sm">info@vactor.com</p>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2">
            <MdOutlineWatchLater className="text-orange-500 text-xl" />
            <p className="text-sm">Mon - Sat : 8 AM - 5 PM</p>
          </div>
        </div>

        {/* Services */}
        <nav className="space-y-2 text-center md:text-left">
          <h6 className="text-lg font-semibold mb-3">Services</h6>
          {["Branding", "Design", "Marketing", "Advertisement"].map(
            (item, i) => (
              <a
                key={i}
                href="#"
                className="block text-sm hover:text-orange-500 transition-colors"
              >
                {item}
              </a>
            )
          )}
        </nav>

        {/* Company */}
        <nav className="space-y-2 text-center md:text-left">
          <h6 className="text-lg font-semibold mb-3">Company</h6>
          {["About Us", "Contact", "Jobs", "Press Kit"].map((item, i) => (
            <a
              key={i}
              href="#"
              className="block text-sm hover:text-orange-500 transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Newsletter */}
        <form className="space-y-4 text-center md:text-left">
          <h6 className="text-lg font-semibold">Newsletter</h6>
          <fieldset className="form-control w-full">
          
            <div className="flex flex-col sm:flex-row gap-2">
              {/* Input full width in both cases */}
              <input
                type="email"
                className="py-3 px-4 dark:bg-slate-900 dark:border-slate-700 dark:placeholder:text-slate-500 dark:text-[#abc2d3] w-full pr-[90px] rounded-md border  outline-none"
                placeholder="Email address"
              />
              {/* Button full width in small, auto in larger */}
              <button className="btn w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white transition-colors">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>

      {/* Bottom Section */}
      <footer className="bg-base-300 py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-6">
          <p className="text-sm text-center md:text-left">
            © 2024 Vactor Store. All Rights Reserved.
          </p>
          {/* Social Icons with react-icons */}
          <div className="flex justify-center space-x-4">
            <a
              href="#"
              className="w-9 h-9 rounded-full flex items-center justify-center bg-orange-500 text-white hover:bg-orange-600 transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full flex items-center justify-center bg-orange-500 text-white hover:bg-orange-600 transition-colors"
            >
              <FaPinterest />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full flex items-center justify-center bg-orange-500 text-white hover:bg-orange-600 transition-colors"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full flex items-center justify-center bg-orange-500 text-white hover:bg-orange-600 transition-colors"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full flex items-center justify-center bg-orange-500 text-white hover:bg-orange-600 transition-colors"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
