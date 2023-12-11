import Button from "@/components/button";
import { applyContent, faqContent } from "@/content/content";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <section
            id="faq"
            className="sm:py-10 md:py-20 lg:py-24 px-4 lg:px-0 mx-auto text-left md:max-w-screen-md lg:max-w-screen-3xl"
        >
            <div className="sm:mb-5 md:mb-0">
                <h2
                    className="font-semibold text-teal-700 sm:text-2xl md:text-3xl mb-5 text-center"
                >
                    {faqContent.title}
                </h2>
                <div className="mt-12 space-y-8">
                    {faqContent.qa.map((question, index) => (
                        <div key={index} className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                            <button
                                className="flex items-center justify-between w-full p-8 gap-4"
                                onClick={() => toggleAccordion(index)}
                            >
                                <h3 className="font-semibold text-gray-700 dark:text-white text-left">{question.question}</h3>
                                <span className={`text-teal-800 rounded-full transition duration-300 ${activeIndex === index ? 'bg-teal-800 text-white' : ''}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className={`w-6 h-6 transform ${activeIndex === index ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                </span>
                            </button>
                            <div
                                className={`${activeIndex === index ? "block" : "hidden"
                                    } px-8 pb-8 transition-transform	`}
                            >
                                <p className="text-base text-gray-500 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: question.answer }} />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="sm:block sm:flex sm:justify-center md:hidden mt-12">
                    <a
                        href={applyContent.buttonLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button
                            text={applyContent.buttonText}
                            className="py-5 px-16 text-lg font-medium text-center border border-teal-700 hover:transition hover:duration-200 hover:ease-in text-white rounded-lg bg-teal-700 hover:bg-white hover:text-gray-800"
                            icon={<BsArrowRight className="inline-block h-8 w-8" />}
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Faq;