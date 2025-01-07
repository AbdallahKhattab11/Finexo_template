import Button from "../Button/Button";

const AboutUs = () => {
  return (
    <div className="bg-primary-bg py-[90px] text-white">
      <div className="container">
        <div className="title mb-[50px] flex flex-col items-center">
          <h2 className="text-3xl font-bold text-white mb-[10px]">
            About <span className="text-primary">Us</span>
          </h2>
          <p className="text-center px-[15px]">
            Magni quod blanditiis non minus sed aut voluptatum illum quisquam
            aspernatur ullam vel beatae rerum ipsum voluptatibus
          </p>
        </div>
        <div className="contentBox flex flex-col md2:flex-row justify-center gap-10 items-center px-[15px] ">
          <div className="imgBox">
            <img
              src="/src/assets/images/about-img.png"
              alt="About Us Image"
              className="w-[550px]"
            />
          </div>
          <div className="max-w-[580px]">
            <h2 className="text-3xl font-bold mb-[15px]  xxs:text-center md:text-left">We are Finexo</h2>
            <p className="my-[15px] xxs:line-clamp-4 md:line-clamp-none xxs:text-center md:text-left">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don&apos;t look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn&apos;t anything embarrassing
              hidden in the middle of text. All
            </p>
            <p className="my-[15px] xxs:line-clamp-3 md:line-clamp-none xxs:text-center md:text-left">
              Molestiae odio earum non qui cumque provident voluptates,
              repellendus exercitationem, possimus at iste corrupti officiis
              unde alias eius ducimus reiciendis soluta eveniet. Nobis ullam ab
              omnis quasi expedita.
            </p>
            <div className="mt-[30px] flex justify-center md:justify-start">
            <Button>Read More</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
