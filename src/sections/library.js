import { libraryContent } from "@/content/content";

const Library = () => {
    return (
        <section
            id="helpyou"
            className="sm:py-10 md:py-20 lg:py-24 px-4 lg:px-2 mx-auto text-left md:max-w-screen-md lg:max-w-screen-xl"
        >
            <div className="mb-10">
                <h2
                    className="font-semibold text-teal-700 sm:text-2xl md:text-3xl mb-5"
                >
                    {libraryContent.title}
                </h2>
                <p
                    className="sm:text-sm md:text-base font-normal text-gray-500 dark:text-gray-400 text-justify"
                >
                    {libraryContent.desc}
                </p>
            </div>
            <div
                className="grid sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 sm:gap-4 lg:gap-6"
            >
                {libraryContent.books.map((book, index) => (
                    <div key={index}>
                        <img src={book.img} alt="library" className="w-full sm:h-56 lg:h-80 rounded-xl shadow-lg" />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Library;