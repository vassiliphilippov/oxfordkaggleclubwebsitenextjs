import Table from "@/components/table";
import { aboutContent } from "@/content/content";
import { Fade } from "react-reveal";

const About = () => {
    return (
        <section
            id="about"
            className="sm:py-10 md:py-20 lg:py-24 px-4 lg:px-2 mx-auto text-left md:max-w-screen-md lg:max-w-screen-xl"
        >
            <div
                className="grid sm:grid-cols-1 md:grid-rows-1 md:grid-cols-1 lg:grid-cols-2 md:gap-14 place-items-center"
            >
                <div className="sm:mb-5 md:mb-0">
                    <h2
                        className="font-semibold text-teal-700 sm:text-2xl md:text-3xl mb-5"
                    >
                        {aboutContent.title}
                    </h2>
                    <p
                        className="sm:text-sm md:text-base font-normal text-gray-500 dark:text-gray-400 text-justify"
                    >
                        {aboutContent.desc}
                    </p>
                </div>
                <div>
                    <Fade bottom>
                        <Table />
                    </Fade>
                </div>
            </div>
        </section>
    );
}

export default About;