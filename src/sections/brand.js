import { brandContent } from "@/content/content";

const Brand = () => {
    return (
        <section
            className="sm:py-10 md:py-20 lg:pt-0 lg:pb-24 px-4 lg:px-2 mx-auto md:max-w-screen-md lg:max-w-screen-xl"
        >
            <div className="lg:mb-12">
                <h2
                    className="text-left font-semibold text-gray-500 sm:text-lg md:text-2xl"
                >
                    {brandContent.title}
                </h2>
            </div>
            <div
                className="flex flex-wrap mt-8 sm:justify-around sm:gap-5 md:gap-10 lg:gap-16"
            >
                {brandContent.logos.map((logo, index) => (
                    <img
                        key={index}
                        className="object-fit md:h-7 lg:h-10 sm:h-6"
                        src={logo.src}
                        alt="brand logo"
                    />
                ))}
            </div>
        </section>
    );
}

export default Brand;