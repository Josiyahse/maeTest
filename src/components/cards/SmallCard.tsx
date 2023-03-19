import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowRight, AiFillHeart } from "react-icons/ai";
import useScreen from "../Screen";

const SmallCard = ({ data }: any) => {
  const navigate = useNavigate();
  const styles = {
    backgroundImage: `url(${data.cardImage})`,
  };

  const navigateMeet = () => {
    navigate("/meet", { state: data });
  };

  const screen = useScreen();
  // flex flex-col justify-between w-[${screen.sw(485)}px] h-[${screen.sh(374)px] rounded-[12px]
  return (
    <div
      className={`flex  h-[30vh] flex-col  justify-between rounded-[12px] w-[320px] xl:h-[420px] md:h-[420px] bg-no-repeat bg-center bg-cover`}
      style={styles}
    >
      <div className="flex p-2 justify-end">
        <button
          title="like"
          className="flex justify-center w-[10vw] h-[10vw] items-center rounded-full bg-[#186E7A] md:h-[50px] md:w-[50px]  xl:h-[50px] xl:w-[50px] opacity-70"
        >
          <AiFillHeart className="text-white opacity-100 text-2xl" />
        </button>
      </div>

      <div
        className={` card-box flex flex-col h-[15vh] w-[320px] xl:h-[150px] p-3 gap-1 bg-[#186E7A]`}
      >
        <p className="text-white w-[263px] text-[5vw]  md:text-[2.9vw] md:w-[263px] xl:text-[24px] xl:w-[263px]  font-bold">{`${data.duration} jours : ${data.estimatePrice} € / P`}</p>
        <div className="flex flex-row justify-between gap-1">
          <p className=" text-white text-[3.5vw] md:text-[2.3vw] xl:text-[16px] w-[263px]  font-semiBold pr-2">
            {data.title}
          </p>
          <button
            className="flex justify-center w-[10vw] h-[10vw] items-center rounded-full bg-white md:h-[50px] md:w-[55px] xl:h-[50px] xl:w-[55px]"
            title="nav"
          >
            <AiOutlineArrowRight
              className="text-[#186E7A]  md:text-2xl xl:text-2xl"
              onClick={navigateMeet}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
