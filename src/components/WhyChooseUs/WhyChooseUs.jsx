import Button from "../Button/Button";
import w1 from "../../assets/images/w1.png";
import w2 from "../../assets/images/w2.png";
import w3 from "../../assets/images/w3.png";
import w4 from "../../assets/images/w4.png";

const WhyChooseUs = () => {
  const data = [
    {
      id: 10,
      img: w1,
      title: "Expert Management",
      desc: "Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus",
    },
    {
      id: 11,
      img: w2,
      title: "Secure Investment",
      desc: "Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus",
    },
    {
      id: 12,
      img: w3,
      title: "Instant Trading",
      desc: "Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus",
    },
    {
      id: 13,
      img: w4,
      title: "Happy Customers",
      desc: "Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus",
    },
  ];
  return (
    <div className="whyChooseUs py-[90px] ">
      <div className="container">
        <div className="title mb-[50px] flex flex-col items-center">
          <h2 className="text-3xl font-bold text-primary-bg mb-[10px]">
            Why Choose <span className="text-primary">Us</span>
          </h2>
        </div>
        <div className="contentBox flex flex-col gap-5 items-center ">
          {data.map((item)=> {
            return (
              <div className="item flex flex-col items-center px-[15px]" key={item.id}>
                <div className="imgBox size-[120px] rounded-full  border-[5px] border-primary-bg elementCenter mb-[15px]">
                  <img src={item.img} alt={item.title} className="size-[55px]"/>
                </div>
                <h2 className="text-2xl font-bold mb-[15px]">{item.title}</h2>
                <p className="text-center">{item.desc}</p>
              </div>
            )
          })}
        </div>
        <div className="btn elementCenter mt-[45px]">
          <Button>Read More</Button>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
