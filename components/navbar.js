import Link from "next/link";
import { faMagnifyingGlass, faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EthereumButton from "./ethbutton";

import SearchBar from "./searchbar";

const Navbar = () => {


    return (
        <nav className="columns-3 flex justify-around items-center p-10 bg-black shadow-lg nav-wrapper">
            <Link href="/" className="">ArtFT</Link>
            <Link href="/account"><FontAwesomeIcon icon={faUser} className="h-6 w-6 nav-icon"/></Link>
            <Link href="/artists/login" className="nav-anchor">Artist Login</Link>
            <SearchBar id="searchBox"  formclass="w-1/2" inputclass="w-full p-3 bg-slate-900 rounded-full" />
                {/* <FontAwesomeIcon icon={faMagnifyingGlass} className="h-6 w-6" style={{color: "#fff"}} /> */}
            <Link href="/about" className="nav-anchor">About</Link>
            <Link href="/cart"><FontAwesomeIcon icon={faCartShopping} className="h-6 w-6 nav-icon"/></Link>
        </nav>
    )
}

export default Navbar;