import CardOne from "@/components/cardone";
import { helpYouContent } from "@/content/content";

const HelpYou = () => {
    return (
        <section
            id="helpyou"
            className="sm:py-10 md:py-20 lg:py-24 px-4 lg:px-2 mx-auto text-left md:max-w-screen-md lg:max-w-screen-xl"
        >
            <div className="mb-10">
                <h2
                    className="font-semibold text-teal-700 sm:text-2xl md:text-3xl"
                >
                    {helpYouContent.title}
                </h2>
            </div>
            <div
                className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            >
                {helpYouContent.card.map((card, index) => (
                    <CardOne key={index} title={card.title} desc={card.desc} icon={card.icon} />
                ))}
            </div>
        </section>
    );
}

export default HelpYou;