import { Card } from "flowbite-react";

const CardOne = ({ icon, title, desc }) => {
    return (
        <Card
            className="max-w-sm p-5 overflow-hidden bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 flex flex-col"
        >
            <div className="px-3">
                <object
                    type="image/svg+xml"
                    data={icon}
                    className="sm:w-5 sm:h-5 md:w-8 md:h-8 lg:w-10 lg:h-10 mb-2"
                >
                </object>
                <h5 className="mb-2 sm:text-sm md:text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {title}
                </h5>
                <p className="mb-3 sm:text-sm md:text-base font-normal text-gray-500 dark:text-gray-400">
                    {desc}
                </p>
            </div>
        </Card>
    );
};

export default CardOne;