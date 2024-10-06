import { heroContent, heroContent2 } from "@/content/content";
import Brand from "./brand";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Hero = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl text-center">
          <div className="py-5 px-4 sm:pt-28 lg:pt-32 lg:px-12">
            <h1 className="mb-4 text-4xl font-display tracking-tight leading-none text-teal-700 md:text-5xl lg:text-6xl dark:text-white">
              {heroContent.title}
            </h1>
            <h3 className="mb-8 text-xl font-medium text-gray-700 lg:text-2xl xl:px-48 dark:text-gray-400">
              {heroContent.subtitle}
            </h3>
            <p className="mb-8 sm:text-sm md:text-md font-normal text-gray-500 lg:text-xl lg:px-48 dark:text-gray-400">
              {heroContent.desc}
            </p>
            <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <a
                href={heroContent.learnLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="items-center py-3 px-10 text-xs md:text-base font-medium text-center border border-teal-700 hover:transition hover:duration-200 hover:ease-in text-white rounded-lg bg-teal-700 hover:bg-white hover:text-gray-800">
                  {heroContent.buttonTextTwo}
                </button>
              </a>
              <a href={heroContent.applyLink}>
                <button className="inline-flex justify-center items-center py-3 px-10 text-xs md:text-base font-medium text-center text-gray-900 border rounded-lg border-teal-700 hover:bg-teal-700 hover:text-white hover:transition hover:duration-200 hover:ease-in">
                  {heroContent.buttonText}
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
