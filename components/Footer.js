import Link from "next/link";
import LogoSVG from "../svg/polylogo.svg";
import Ig from "../svg/instagram.svg";
import Fb from "../svg/facebook.svg";
import Tw from "../svg/twitter.svg";

function Footer() {
  return (
    <footer className="py-6 lg:py-12">
      <div className="container mx-auto px-3 md:px-4 lg:px-5 md:flex md:items-center space-y-6 md:space-y-0">
      <div class= "m-8 md:hidden"/>
        <div className="text-center md:text-left w-full md:w-1/2 space-x-0 md:space-x-8">
        <a class="text-lg font-medium transition duration-200 ease-in-out hover:text-blue" href="/">About</a>
        <div class= "m-8 md:hidden"/>
        <a class="text-lg font-medium transition duration-200 ease-in-out hover:text-blue" href="/">Return Policy</a>
        
        </div>
        
        <div className="w-full md:w-1/2">
        <div class= "m-8 md:hidden"/>
          <div className="text-center md:text-right space-x-16 md:space-x-4">
            <a
              className="" href="/"
            >
              <Ig className="h-6 w-6 inline fill-current text-black transition duration-200 ease-in-out hover:text-blue"/>
            </a>
            <a
              className="" href="/"
            >
              <Fb className="h-6 w-6 inline fill-current text-black transition duration-200 ease-in-out hover:text-blue"/>
            </a>
            <a
              className="" href="/"
            >
              <Tw className="h-6 w-6 inline fill-current text-black transition duration-200 ease-in-out hover:text-blue" />
            </a>
            <div class= "m-8 md:hidden"/>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
