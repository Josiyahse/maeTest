import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import useScreen from "../Screen";
import { useNavigate } from "react-router-dom";
import { meets } from "../../data";

const WideCard = ({ data }: any) => {
  const styles = {
    backgroundImage: `url(${data.imageLink})`,
  };

  const navigate = useNavigate();

  const screen = useScreen();
  // flex flex-col justify-between w-[${screen.sw(485)}px] h-[${screen.sh(374)px] rounded-[12px]
  return (
    <div
      className={`flex flex-col justify-between rounded-[12px] w-[80vw] h-[40vh] 2xl:w-[400px] 2xl:h-[250px]  3xl:w-[700px] 3xl:h-[550px] bg-no-repeat bg-center bg-cover `}
      style={styles}
    >
      <div></div>
      <div
        className={` card-orange flex flex-col  w-[80vw]  2xl:w-[400px] 2xl:h-[90px] xl:w-[485px] xl:h-[112px] 3xl:h-[160px] p-3 rounded-[12px] 3xl:w-[700px]`}
      >
        <p className="text-white text-[4vw] 2xl:text-[20px]  xl:text-[24px] w-full font-bold 3xl:text-[32px]">{`${data.duration} jours : ${data.price} €`}</p>
        <div className="flex flex-row justify-between">
          <p className="grow text-white text-[3.5vw] 2xl:text-[13px] xl:text-[15px] w-[30vw] 3xl:text-[24px] 3xl:w-full font-semiBold">
            {data.description}
          </p>
          <div className="flex justify-center items-center rounded-full bg-white h-[46px] w-[46px] 2xl:h-[40px] 2xl:w-[60px]  xl:h-[60px] xl:w-[60px] 3xl:h-[70px] 3xl:w-[70px]">
            <button
              onClick={() => {
                navigate("/meet", { state: meets[0] });
              }}
            >
              <AiOutlineArrowRight className="text-black text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WideCard;
