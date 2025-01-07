/* eslint-disable react/prop-types */


const Customer = ({ img, name, job, desc, icon }) => {
  return (
    <div className="customer px-[20px] ">
      <div className="imgBox mb-[20px]">
        <img src={img} alt={name} className="size-[100px] rounded-full" />
      </div>
      <div className="name flex items-center justify-between mb-[5px]">
        <h2 className="font-semibold text-[18px]">{name}</h2>
        <p className="text-[20px]">{icon}</p>
      </div>
      <p className="job mb-[10px]">{job}</p>
      <p className="desc line-clamp-3">{desc}</p>
    </div>
  );
};

export default Customer;