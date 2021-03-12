import Link from "next/link";
import CartSummary from "./CartSummary";
import LogoSVG from "../svg/polylogo.svg";

function Header() {
  return (
    <header className="md:absolute md:left-0 md:top-0 w-full z-10">
      <div className="py-3 lg:py-5 flex items-center">
        <Link href="/">
          <a title="Return to Poly">Shop</a>
        </Link>
        <span className="pr-1">,</span>
        <CartSummary className = "text-right"/>
      </div>

      <Link href="/">
        <a title="Return to Poly">
          <LogoSVG className="w-10/12" />
        </a>
      </Link>
    </header>
  );
}

export default Header;
