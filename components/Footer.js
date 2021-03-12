import Link from "next/link";
import LogoSVG from "../svg/polylogo.svg";

function Footer() {
  return (
    <footer className="py-6 lg:py-12">
      <div className="container mx-auto px-3 md:px-4 lg:px-5 md:flex md:items-center space-y-6 md:space-y-0">
        <div className="w-full md:w-1/3">
          <Link href="/">
            <a title="Return to Poly">
              <LogoSVG className="w-48 md:w-auto md:h-8" />
            </a>
          </Link>
        </div>
        
        <div className="w-full md:w-1/3 flex items-center md:justify-center">
          <a
            className="inline-flex items-center space-x-1 text-faded-black hover:text-black transition-colors"
          >
            <LogoSVG className="h-8"/>
          </a>
        </div>
        
        <div className="w-full md:w-1/3">
          <div className="md:text-right space-x-1">
            <a
              className="inline-flex items-center space-x-1 text-faded-black hover:text-black transition-colors"
            >
              <LogoSVG className="h-8"/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
