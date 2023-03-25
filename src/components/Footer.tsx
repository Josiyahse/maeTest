import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
const Footer = () => {
  const btStrokeColor = "text-[#CE5729] text-2xl 3xl:text-[50px]";
  let footerList = [
    {
      title: "Liens utiles",
      list: ["Organiser mon séminaire", "Nous rejoindre", "CGV & CGU"],
    },
    {
      title: "Notre entreprise",
      list: ["Contact", "Newsletter", "Faq", "Partenaires GES"],
    },
    {
      title: "Adresse et contact",
      list: ["11 rue Cambrai", "+33 06 32 07 10 64", "contact@meltrip.com"],
    },
  ];

  const btList = [
    <AiFillInstagram className={btStrokeColor} />,
    <FaFacebookF className={btStrokeColor} />,
    <BsTwitter className={btStrokeColor} />,
    <FaLinkedinIn className={btStrokeColor} />,
  ];

  const mapBt = () => {
    return btList.map((bt: any, index) => {
      return (
        <div
          key={`${index}bt`}
          className="flex justify-center items-center rounded-full bg-white h-[46px] w-[46px] 3xl:h-[80px] 3xl:w-[80px]"
        >
          {bt}
        </div>
      );
    });
  };

  const mapFooter = () => {
    return footerList.map((foot, index) => {
      return (
        <div
          key={`${index}foo`}
          className="flex flex-col h-[250px] w-[263px] text-neutral-50 text-2xl font-medium justify-start gap-5 xl:gap-10 "
        >
          <p className="text-neutral-50 text-[24px] 3xl:text-[32px] w-[300px] font-bold">
            {foot.title}
          </p>
          <div>
            <ul className="flex flex-col gap-3 xl:gap-5">
              {foot.list.map((li, index1) => {
                return (
                  <li
                    key={`${index1}foot`}
                    className=" text-neutral-50 text-[18px] 3xl:text-[24px] w-[263px]  font-thin"
                  >
                    {li}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="flex flex-row flex-wrap min-h-[418px] bg-[#186E7A] justify-around items-center px-10 gap-10 p-16 ">
      <div className="w-full xl:w-fit">
        <img
          className="3xl:w-[200px]"
          alt="logo"
          src={require("./../assets/footerImage.png")}
        />
      </div>
      <p className=" tracking-wide whitespace-normal max-h-[184px] max-w-[350px] text-neutral-50 text-[18px] 3xl:text-[24px] font-thin">
        Vous avez du mal à organiser votre séminaire ou vous ne voulez pas
        perdre de temps avec l'organisation de celui-ci ? Meltrip, c'est
        l'agence événementielle qu'il vous faut !
      </p>
      {mapFooter()}
      <div className="flex xl:flex-col gap-[27px] ">{mapBt()}</div>
    </div>
  );
};

export default Footer;
