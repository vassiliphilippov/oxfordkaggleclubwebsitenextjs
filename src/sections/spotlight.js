import { spotLightContent } from "@/content/content";
import { Fade } from "react-reveal";

const Spotlight = () => {
    return (
        <section
            id="kaggle"
            className="sm:py-10 md:py-20 lg:py-24 sm:px-4 lg:px-2 mx-auto text-left md:max-w-screen-md lg:max-w-screen-xl"
        >
            <div
                className="grid sm:grid-cols-1 md:grid-rows-1 lg:grid-cols-[1.5fr,1fr] place-items-center md:gap-14"
            >
                <div className="sm:order-2 lg:order-1">
                    <Fade bottom>
                        <img src={spotLightContent.img} alt="kaggle competition spotlight" className="w-full shadow-xl" />
                    </Fade>
                </div>

                <div className="sm:order-1 lg:order-2">
                    <h2 className="font-semibold text-teal-700 sm:text-2xl md:text-3xl sm:mb-3 md:mb-5">
                        {spotLightContent.title}
                    </h2>
                    <p className="mb-3 sm:text-sm md:text-base font-normal text-gray-500 dark:text-gray-400 sm:mb-3 md:mb-8">
                        {spotLightContent.desc}
                    </p>
                    <p className="mb-3 sm:text-sm md:text-base font-normal text-gray-500 dark:text-gray-400">
                        {spotLightContent.desctwo}
                    </p>
                    <ul className="list-disc pl-5">
                        {spotLightContent.list.map((list, index) => (
                            <li key={index} className="mb-3 sm:text-sm md:text-base font-normal text-gray-500 dark:text-gray-400">
                                {list.item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
};

export default Spotlight;