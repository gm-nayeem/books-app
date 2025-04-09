import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen((prev) => !prev);

    return (
        <nav className="w-full bg-black text-white shadow-md">
            <div className="max-w-6xl mx-auto px-4 h-[60px] flex items-center justify-between">
                <Link to="/" className="text-lg font-bold">
                    BookApp
                </Link>

                {/* desktop devices */}
                <div className="hidden md:flex gap-6">
                    <Link to="/" className="hover:underline">
                        Home
                    </Link>
                    <Link to="/wishlist" className="hover:underline">
                        Wishlist
                    </Link>
                </div>

                {/* icons */}
                <div className="md:hidden">
                    <button className="cursor-pointer" onClick={toggleMenu}>
                        {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* mobile devices */}
            {isOpen && (
                <div className="md:hidden flex flex-col gap-3 p-4 bg-black text-white border-t border-t-white transition-all duration-300">
                    <Link to="/" className="hover:underline" onClick={toggleMenu}>
                        Home
                    </Link>
                    <Link to="/wishlist" className="hover:underline" onClick={toggleMenu}>
                        Wishlist
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
