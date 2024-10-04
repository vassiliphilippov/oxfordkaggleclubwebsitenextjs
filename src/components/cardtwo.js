import { competitionContent } from "@/content/content";

const CardTwo = () => {
    return (
        <>
            {competitionContent.competitions.slice(0, 8).map((card, index) => (
                <a
                    key={index}
                    href={card.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block">
                    <div className="max-w-sm h-96 rounded-2xl overflow-hidden border bg-white">
                        <div className="relative">
                            <img
                                className="w-full h-28 object-cover hover:scale-105 transition duration-300 ease-in"
                                src={card.img}
                                alt="kaggle competition"
                            />
                            <img
                                className="w-8 h-8 object-contain border rounded-full bg-white absolute bottom-0 left-0 m-4"
                                src={card.logo}
                                alt="kaggle competition host logo"
                            />
                        </div>
                        <div
                            className="px-4 py-4 border-y border-gray-200"
                        >
                            <div>
                                <h6
                                    className="font-medium text-lg mb-2 line-clamp-2 h-14 overflow-hidden"
                                >
                                    {card.title}
                                </h6>
                                <p
                                    className="text-gray-700 text-sm line-clamp-2"
                                >
                                    {card.desc}
                                </p>
                                <div
                                    className="py-5"
                                >
                                    {card.category.map((category, index) => (
                                        <span
                                            key={index}
                                            className="inline-block border bg-gray-400 rounded-xl px-3 py-1 text-xs font-normal text-white mr-2 mt-2">
                                            {category.item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div
                            className="px-4 pt-4 flex justify-between items-center"
                        >
                            <span
                                className="inline-block rounded-full py-1 text-sm font-semibold text-gray-400 mr-2"
                            >
                                {card.teams}
                            </span>
                            <span
                                className="inline-block rounded-full py-1 text-sm font-semibold text-gray-800 ml-2"
                            >
                                {card.amount}
                            </span>
                        </div>
                    </div>
                </a>
            ))}
        </>
    );
};

export default CardTwo;