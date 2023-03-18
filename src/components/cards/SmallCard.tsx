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
      className={`flex flex-col justify-between rounded-[12px] w-[320px] h-[420px] bg-no-repeat bg-center bg-cover`}
      style={styles}
    >
      <div className="flex p-2 justify-end">
        <div className="flex justify-center items-center rounded-full bg-[#186E7A] h-[50px] w-[50px] opacity-70">
          <AiFillHeart className="text-white opacity-100 text-2xl" />
        </div>
      </div>

      <div
        className={` card-box flex flex-col w-[320px] h-[150px] p-3 gap-1 bg-[#186E7A]`}
      >
        <p className="text-white text-[24px] w-[263px]  font-bold">{`${data.duration} jours : ${data.estimatePrice} € / P`}</p>
        <div className="flex flex-row justify-between gap-1">
          <p className=" text-white text-[16px] w-[263px]  font-semiBold pr-2">
            {data.title}
          </p>
          <button className="flex justify-center items-center rounded-full bg-white h-[50px] w-[55px]" title="nav" >
            <AiOutlineArrowRight
              className="text-[#186E7A] text-2xl"
              onClick={navigateMeet}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
