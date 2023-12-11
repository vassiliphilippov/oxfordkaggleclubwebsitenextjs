import Button from "@/components/button";
import { applyContent } from "@/content/content";
import { BsArrowRight } from "react-icons/bs";

const Apply = () => {
    return (
        <section
            id="apply"
            className="sm:py-10 md:py-20 lg:py-24 px-4 lg:px-2 mx-auto text-left md:max-w-screen-md lg:max-w-screen-xl"
        >
            <div
                className="grid sm:grid-cols-1 md:grid-rows-1 md:grid-cols-1 lg:grid-cols-2 md:gap-10 lg:gap-14"
            >
                <div className="sm:mb-5 md:mb-0">
                    <h1
                        className="font-semibold text-gray-700 sm:text-2xl md:text-3xl mb-5 md:mb-10"
                    >
                        {applyContent.title}
                    </h1>
                    <a
                        href={applyContent.buttonLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button
                            text={applyContent.buttonText}
                            className="sm:hidden md:block items-center py-3 px-10 text-xs md:text-base font-medium text-center border border-teal-700 hover:transition hover:duration-200 hover:ease-in text-white rounded-lg bg-teal-700 hover:bg-white hover:text-gray-800 focus:ring-4 focus:ring-slate-300 dark:focus:ring-slate-900"
                            icon={<BsArrowRight className="inline-block h-8 w-8"/>}
                        />
                    </a>
                </div>
                <div>
                    {applyContent.applyMethod.map((section, index) => (
                        <div key={index} className="mb-5">
                            <p
                                className="mb-3 sm:text-sm md:text-base font-semibold text-gray-700 dark:text-gray-400"
                            >
                                {section.title}
                            </p>
                            <ul className="list-disc pl-5">
                                {section.list.map((item, itemIndex) => (
                                    <li 
                                    key={itemIndex} 
                                    className="mb-2 sm:text-sm md:text-base font-normal text-gray-500 dark:text-gray-400"
                                    dangerouslySetInnerHTML={{ __html: item.item }}
                                    />
                                ))}
                            </ul>
                        </div>
                    ))}
                    <a
                        href={applyContent.buttonLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                         <Button
                            text={applyContent.buttonText}
                            className="sm:block md:hidden mt-6 py-3 px-10 text-md font-medium text-center border border-teal-700 hover:transition hover:duration-200 hover:ease-in text-white rounded-lg bg-teal-700 hover:bg-white hover:text-gray-800"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Apply;