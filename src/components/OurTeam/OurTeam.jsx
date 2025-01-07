/* eslint-disable react/jsx-key */

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const OurTeam = () => {
  const TeamData = [
    {
      id: `p1`,
      img: "/src/assets/images/team-1.jpg",
      name: "Joseph Brown",
      jopTitle: "Marketing Head",
      socialLinks: [
        <FaFacebookF />,
        <FaTwitter />,
        <FaLinkedin />,
        <FaInstagram />,
        <FaYoutube />,
      ],
    },
    {
      id: `p2`,
      img: "/src/assets/images/team-2.jpg",
      name: "Nancy White",
      jopTitle: "Developer",
      socialLinks: [
        <FaFacebookF />,
        <FaTwitter />,
        <FaLinkedin />,
        <FaInstagram />,
        <FaYoutube />,
      ],
    },
    {
      id: `p3`,
      img: "/src/assets/images/team-3.jpg",
      name: "Earl Martinez",
      jopTitle: "Designer",
      socialLinks: [
        <FaFacebookF />,
        <FaTwitter />,
        <FaLinkedin />,
        <FaInstagram />,
        <FaYoutube />,
      ],
    },
    {
      id: `p4`,
      img: "/src/assets/images/team-4.jpg",
      name: "Josephine Allard",
      jopTitle: "Data Analyst",
      socialLinks: [
        <FaFacebookF />,
        <FaTwitter />,
        <FaLinkedin />,
        <FaInstagram />,
        <FaYoutube />,
      ],
    },
  ];
  return (
    <div className="ourTeam py-[90px] bg-primary-bg">
      <div className="container">
        <div className="title mb-[50px] flex flex-col items-center">
          <h2 className="text-[30px] font-bold text-white">
            Our <span className="text-primary">Team</span>
          </h2>
        </div>
        <div className="contentBox grid xxs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center px-5">
          {TeamData.map((person) => {
            return (
              <div className="person bg-nav-gradient px-[15px] pt-[50px] pb-[20px] w-full max-w-[370px] rounded-lg flex flex-col items-center gap-5" key={person.id}>
                <div className="imgBox size-[120px] border-[5px] border-white rounded-full overflow-hidden">
                  <img src={person.img} alt={person.name} className="w-full rounded-full"/>
                </div>
                <div className="personInfo mb-[30px]">
                  <h2 className="text-[20px] font-semibold text-primary mb-[10px] text-nowrap ">{person.name}</h2>
                  <p className="text-[16px] text-white text-center font-medium">{person.jopTitle}</p>
                </div>
                <div className="socialLinks w-full flex gap-3 justify-evenly ">
                  {person.socialLinks.map((link) => {
                    return <span className="text-white text-[22px] cursor-pointer  transition hover:text-primary">{link}</span>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;

// face twitter linkedin instagram youtube
