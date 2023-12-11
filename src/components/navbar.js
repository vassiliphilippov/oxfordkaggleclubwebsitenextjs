import { useState } from 'react';
import { navContent } from '@/content/content';

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="bg-white border-gray-800 drop-shadow-md px-2 lg:px-2 fixed w-full z-10">
            <div className="md:max-w-screen-md lg:max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-3">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center sm:text-md md:text-2xl font-semibold whitespace-nowrap text-gray-700">
                        {navContent.logo}
                    </span>
                </a>
                <button
                    onClick={toggleMenu}
                    type="button"
                    className="inline-flex items-center p-2 sm:w-8 sm:h-8 md:w-10 md:h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded={isMenuOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="sm:w-3 sm:h-3 md:w-5 md:h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div
                    className={`${
                        isMenuOpen ? 'block' : 'hidden'
                    } w-full md:block md:w-auto`}
                    id="navbar-default"
                >
                    <ul
                        className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-3 lg:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white"
                    >
                        {navContent.navLinks.map((menu, index) => (
                            <li key={index}>
                                <a
                                    href={menu.link}
                                    className="block py-2 px-3 text-gray-900 hover:bg-gray-100 hover:rounded-lg hover:text-gray-900 hover:transition hover:duration-300"
                                    onClick={closeMenu}
                                >
                                    {menu.item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;