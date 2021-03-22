import Link from "next/link";
import CartSummary from "./CartSummary";
import LogoSVG from "../svg/polylogo.svg";

function Header() {
  return (
    <header className="fixed md:absolute md:max-h-screen items-end 
    justify-between w-full auto-cols-auto h-20 z-40 bg-gradient-to-b from-white via-dirty-white to-transparent md:bg-none">
      <div className="pt-6 pr-6 lg:pb-12 flex-col h-8">
        <div className="float-left md:block">
          <Link href="/">
          <a title="Return to Poly" class="font-medium text-lg">Home</a>
          </Link>
        </div>
        <div className="float-right md:block">
          <CartSummary className = "text-right"/>
        </div>
      </div>

      <div className="fixed w-1/2 md:w-2/5 md:pr-28 lg:w-2/5 xl:w-2/5 pt-9 lg:pt-0 md:block">
        <Link href="/">
        <a title="Return to Poly">
          <LogoSVG/>
        </a>
      </Link>
      </div>
    </header>
  );
}

export default Header;
