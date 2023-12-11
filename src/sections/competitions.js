import CardTwo from "@/components/cardtwo";
import { competitionContent } from "@/content/content";

const Competitions = () => {
    return (
        <section
            id="helpyou"
            className="sm:py-10 md:py-20 lg:py-24 px-4 lg:px-0 mx-auto text-left md:max-w-screen-md lg:max-w-screen-xl"
        >
            <div className="mb-10">
                <h2
                    className="font-semibold text-teal-700 sm:text-2xl md:text-3xl"
                >
                    {competitionContent.title}
                </h2>
            </div>
            <div
                className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
            >
                <CardTwo />
            </div>
        </section>
    );
}

export default Competitions;