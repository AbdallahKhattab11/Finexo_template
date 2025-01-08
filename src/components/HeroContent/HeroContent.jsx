import slideImg from "../../assets/images/slider-img.png";
import Button from "../Button/Button";

const HeroContent = () => {
  return (
    <div className="px-[15px] w-full h-full grid grid-cols-1 md:grid-cols-2 md:gap-5  place-items-center ">
      <div className="flex justify-end">
        <div className="text flex flex-col justify-center items-start max-w-[550px]">
          <h1 className="text-responsive-font font-bold mb-[15px]">
            CRYPTO <br /> CURRENCY
          </h1>
          <p className="mb-[25px] text-[14px] xxs:line-clamp-4 lg:line-clamp-3">
            Explicabo esse amet tempora quibusdam laudantium, laborum eaque
            magnam fugiat hic? Esse dicta aliquid error repudiandae earum
            suscipit fugiat molestias, veniam, vel architecto veritatis delectus
            repellat modi impedit sequi.
          </p>
          <Button>Read More</Button>
        </div>
      </div>
      <div className="imgBox xxs:max-w-[400px] lg:max-w-[600px] elementCenter ">
        <img src={slideImg} alt="slider-img" className="upDown	" />
      </div>
    </div>
  );
};

export default HeroContent;
