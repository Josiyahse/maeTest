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
      className={`flex flex-col justify-between rounded-[12px] w-[80vw] h-[40vh]  xl:w-[485px] xl:h-[374px] 3xl:w-[700px] 3xl:h-[550px] bg-no-repeat bg-center bg-cover `}
      style={styles}
    >
      <div></div>
      <div
        className={` card-orange flex flex-col  w-[80vw] xl:w-[485px] xl:h-[112px] 3xl:h-[160px] p-3 rounded-[12px] 3xl:w-[700px]`}
      >
        <p className="text-white text-[4vw] xl:text-[24px] w-full font-bold 3xl:text-[32px]">{`${data.duration} jours : ${data.price} €`}</p>
        <div className="flex flex-row justify-between">
          <p className="grow text-white text-[3.5vw] xl:text-[15px] w-[30vw] 3xl:text-[24px] 3xl:w-full font-semiBold">
            {data.description}
          </p>
          <div className="flex justify-center items-center rounded-full bg-white h-[46px] w-[46px] xl:h-[46px] xl:w-[60px] 3xl:h-[70px] 3xl:w-[85px]">
            <AiOutlineArrowRight className="text-black text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WideCard;
