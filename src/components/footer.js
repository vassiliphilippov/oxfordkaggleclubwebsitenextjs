import { footerContent } from "@/content/content";

const Footer = () => {
    return (
        <footer
            className="sm:py-5 px-4 lg:px-2 mx-auto md:max-w-screen-md lg:max-w-screen-xl border-gray-200 sm:mx-auto"
        >
            <hr
                className="my-6 border-gray-200 sm:mx-auto lg:my-6"
            />
            <div
                className="md:flex md:items-center md:justify-between mb-6"
            >
                <span
                    className="text-sm text-gray-600 sm:text-center"
                >
                    &copy; {new Date().getFullYear()}{" "}
                    <a
                        href={"/"}
                        className="hover:underline"
                    >
                        {footerContent.name}
                    </a>
                </span>
                <ul className="flex flex-wrap text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-3 md:mt-0">
                    {footerContent.footerMenu.map((menu, index) => (
                        <li
                            key={index}
                        >
                            <a href={menu.link} className="hover:underline">
                                {menu.item}
                            </a>
                            {index !== footerContent.footerMenu.length - 1 && <span className="mx-2 text-gray-300 dark:text-gray-400"> &bull; </span>}
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
};

export default Footer;