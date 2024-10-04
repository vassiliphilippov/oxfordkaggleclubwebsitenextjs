import CardOne from "@/components/cardone";
import { helpYouContent } from "@/content/content";
import { Fade } from "react-reveal";

const HelpYou = () => {
  return (
    <section
      id="helpyou"
      className="sm:py-10 md:py-20 lg:py-24 px-4 lg:px-2 mx-auto text-left md:max-w-screen-md lg:max-w-screen-xl"
    >
      <div className="mb-10">
        <h2 className="font-semibold text-teal-700 sm:text-2xl md:text-3xl">
          {helpYouContent.title}
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <div className="sm:order-1">
          <Fade bottom>
            <img
              src={helpYouContent.img}
              alt="kaggle competition spotlight"
              className="w-full shadow-xl"
            />
          </Fade>
        </div>
        <div className="order-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {helpYouContent.card.map((card, index) => (
            <CardOne
              key={index}
              title={card.title}
              desc={card.desc}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HelpYou;
