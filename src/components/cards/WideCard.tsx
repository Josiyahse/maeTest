import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import useScreen from "../Screen";

const WideCard = ({ data }: any) => {
  const styles = {
    backgroundImage: `url(${data.imageLink})`,
  };

  const screen = useScreen();
  // flex flex-col justify-between w-[${screen.sw(485)}px] h-[${screen.sh(374)px] rounded-[12px]
  return (
    <div
      className={`flex flex-col justify-between rounded-[12px] w-[485px] h-[374px] bg-no-repeat bg-center bg-cover `}
      style={styles}
    >
      <div></div>
      <div
        className={` card-orange flex flex-col w-[485px] h-[112px] p-3 rounded-[12px]`}
      >
        <p className="text-white text-[24px] w-[263px]  font-bold">{`${data.duration} jours : ${data.price} €`}</p>
        <div className="flex flex-row justify-between">
          <p className="grow  text-white text-[15px] w-[263px]  font-semiBold">
            {data.description}
          </p>
          <div className="flex justify-center items-center rounded-full bg-white h-[46px] w-[46px]">
            <AiOutlineArrowRight className="text-black text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WideCard;
