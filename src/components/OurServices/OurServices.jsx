import Button from "../Button/Button";

const OurServices = () => {
  const data = [
    {
      id: 1,
      img:"/src/assets/images/s1.png",
      title: "Currency Wallet",
      desc: "fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using",
    },
    {
      id: 2,
      img:"/src/assets/images/s2.png",
      title: "Security Storage",
      desc: "fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using",
    },
    {
      id: 3,
      img:"/src/assets/images/s3.png",
      title: "Expert Support",
      desc: "fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using",
    },
  ];
  return (
    <div className="ourServices py-[90px]">
      <div className="container">
        <div className="title mb-[50px] flex flex-col items-center">
          <h2 className="text-3xl font-bold text-primary-bg mb-[10px]">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-center px-[15px]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration
          </p>
        </div>
        <div className="cards grid grid-cols-1 md2:grid-cols-3 gap-[30px] place-items-center">
          {data.map((item)=> {
            return(
              <div className="card flex flex-col items-center max-w-[470px] md2:max-w-[360px] gap-4 px-[15px]" key={item.id}>
                <div className="imgBox">
                  <img className="size-[75px]" src={item.img} alt={item.title} />
                </div>
                <div className="content flex flex-col items-center">
                  <h2 className="text-[20px] font-bold mb-[10px]">{item.title}</h2>
                  <p className="text-center">{item.desc}</p>
                  
                </div>
                <div className="link">
                  <a href="#" className="hover:text-primary font-semibold transition">
                    Read More
                  </a>
                </div>
              </div>
            )
          })}
        </div>
        <div className="btn flex justify-center mt-[60px]">
          <Button>View All</Button>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
