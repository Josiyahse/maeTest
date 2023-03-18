import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WideCard from "./cards/WideCard";
import { wideCardData, meets } from "../data";
import SmallCard from "./cards/SmallCard";
// import { AiOutlineRight } from "react-icons/ai";

const Meetings = () => {
  const [meetings, setMeetings] = useState<any>([]);
  const [load, setLoad] = useState(false);
  const [filterMeet, setFilterMeet] = useState<{
    duration: number;
    capacity: number;
    environment: string | null;
    price: number;
    date: string;
  }>({
    duration: 1,
    capacity: 2,
    environment: null,
    price: 200,
    date: new Date().toISOString().slice(0, 10),
  });
  const [filteredMeetings, setFilteredMeetings] = useState([]);
  const [carrouselSetting, setCarrouselSetting] = useState({
    showItems: 6,
    gapAdding: 3,
    defaultShow: 9,
  });

  const navigate = useNavigate();

  const mapWideCard = () => {
    return wideCardData.map((data: any, index: number) => {
      return <WideCard key={`wid${index}`} data={data} />;
    });
  };

  if (!load) {
    setMeetings(meets);
    setLoad(!load);
  }

  useEffect(() => {
    filterTheMeetings();
  }, [filterMeet]);

  useEffect(() => {
    console.log(carrouselSetting);
    mapMeets();
  }, [carrouselSetting]);

  // useEffect(() => {
  //   let lengthTable = filteredMeetings.length;
  //   if (lengthTable > carrouselSetting.numberRender) {
  //     console.log("YO", lengthTable);
  //     let maxPage = Math.trunc(lengthTable / carrouselSetting.numberRender);
  //     setCarrouselSetting((pre) => {
  //       return { ...pre, ...{ maxPage: maxPage + 1 } };
  //     });
  //   }
  // }, [filteredMeetings]);

  // useEffect(() => {
  //   mapMeets();
  // }, [carrouselSetting]);

  // const calculateCarrouselSetting = (action: string) => {
  //   let newPage: number;
  //   if (action === "PREC") {
  //     newPage = carrouselSetting.page - 1;

  //     if (newPage > 0) {
  //       console.log("in");
  //       let newValue = {
  //         first:
  //           carrouselSetting.numberRender * newPage -
  //           carrouselSetting.numberRender -
  //           1,
  //         last: carrouselSetting.numberRender * newPage,
  //         page: newPage,
  //       };

  //       setCarrouselSetting((pre: any) => {
  //         return { ...pre, ...newValue };
  //       });
  //     }
  //   } else if (action === "NEXT") {
  //     newPage = carrouselSetting.page + 1;
  //     if (newPage <= carrouselSetting.maxPage) {
  //       console.log("in");
  //       let newValue = {
  //         first:
  //           carrouselSetting.numberRender * newPage -
  //           carrouselSetting.numberRender -
  //           1,
  //         last: carrouselSetting.numberRender * newPage,
  //         page: newPage,
  //       };

  //       setCarrouselSetting((pre: any) => {
  //         return { ...pre, ...newValue };
  //       });
  //     }
  //   }
  // };

  const filterTheMeetings = () => {
    let processFilter = meetings?.filter((meet: any) => {
      return (
        meet.duration >= filterMeet.duration &&
        meet.capacity >= filterMeet.capacity &&
        meet.estimatePrice >= filterMeet.price &&
        (filterMeet.environment === null ||
          meet.environment === filterMeet.environment) &&
        meet.disponibility <= filterMeet.date
      );
    });
    setFilteredMeetings(processFilter);
  };

  const handleChangeFilterMeet = (e: any) => {
    let { value, name } = e.target;
    let tmpFilter: any;
    switch (name) {
      case "duration":
        tmpFilter = { duration: +value };
        break;
      case "capacity":
        tmpFilter = { capacity: +value };
        break;
      case "environment":
        tmpFilter = { environment: value };
        break;
      case "price":
        tmpFilter = { price: +value };
        break;
      case "date":
        tmpFilter = { date: value };
        break;

      default:
        break;
    }
    setFilterMeet((preValue: any) => {
      return { ...preValue, ...tmpFilter };
    });
  };

  const mapMeets = () => {
    return filteredMeetings?.map((meet: any, index: number) => {
      if (index < carrouselSetting.showItems) {
        return <SmallCard key={`small${index}`} data={meet} />;
      }
    });
  };

  const loopNumber = () => {
    const listNumber = [
      2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ];
    let simple = (num: number) => {
      return filterMeet.capacity === num
        ? "flex align-items-center bg-[#448B7B] text-[#ffff] text-center border-[3px] border-solid rounded-[50%] px-4 py-2 border-black font-regular text-[18px] "
        : "flex align-items-center text-center border-[3px] border-solid rounded-[50%] px-4 py-2 border-black font-regular text-[18px] ";
    };
    let double = (num: number) => {
      return filterMeet.capacity === num
        ? "flex align-items-center text-center bg-[#448B7B] text-[#ffff] border-[3px] border-solid rounded-[50%] px-3 py-2 border-black font-regular text-[18px] "
        : "flex align-items-center text-center border-[3px] border-solid rounded-[50%] px-3 py-2 border-black font-regular text-[18px] ";
    };

    return listNumber.map((num: number, index: any) => {
      return (
        <button
          key={`btn${index}`}
          name="capacity"
          className={num <= 9 ? simple(num) : double(num)}
          value={num}
          onClick={handleChangeFilterMeet}
        >
          {num}
        </button>
      );
    });
  };

  const filter = () => {
    return (
      <div className="flex flex-col w-full gap-5 px-5">
        {/* text  */}
        <div className="flex flex-col w-full gap-5">
          <p className="font-extrabold text-[48px]">Meltrip Now</p>
          <p className="font-light text-[24px]">
            Vos séminaire prêt à l’emploi
          </p>
          <p className="font-light text-[24px]">Quels sont vos critères ?</p>
        </div>
        {/* filtre nombre de durée */}
        <div className="flex flex-col width-full gap-5">
          <p className="font-bold text-[24px]">Durée du séminaire</p>
          <div className="flex flex-wrap width-full gap-5">
            <button
              name="duration"
              value={1}
              onClick={handleChangeFilterMeet}
              className={
                filterMeet.duration === 1
                  ? " flex justify-center whitespace-nowrap bg-[#448B7B]  text-[#ffff]  border-[3px] border-solid rounded-full px-10 py-1 border-black font-regular text-[18px] "
                  : " whitespace-nowrap border-[3px] border-solid rounded-full px-10 py-1 border-black font-regular text-[18px] "
              }
            >
              1 jour(2)
            </button>
            <button
              name="duration"
              value={6}
              onClick={handleChangeFilterMeet}
              className={
                filterMeet.duration === 6
                  ? " whitespace-nowrap bg-[#448B7B] text-[#ffff]  border-[3px] border-solid rounded-full px-10 py-1 border-black font-regular text-[18px] "
                  : " whitespace-nowrap border-[3px] border-solid rounded-full px-10 py-1 border-black font-regular text-[18px] "
              }
            >
              Moins 1 semaine (4)
            </button>
            <button
              name="duration"
              value={7}
              onClick={handleChangeFilterMeet}
              className={
                filterMeet.duration === 7
                  ? " whitespace-nowrap bg-[#448B7B] text-[#ffff]  border-[3px] border-solid rounded-full px-10 py-1 border-black font-regular text-[18px] "
                  : " whitespace-nowrap border-[3px] border-solid rounded-full px-10 border-black font-regular text-[18px] "
              }
            >
              1 semaines (8)
            </button>
            <button
              name="duration"
              value={14}
              onClick={handleChangeFilterMeet}
              className={
                filterMeet.duration === 14
                  ? " whitespace-nowrap bg-[#448B7B] text-[#ffff]  border-[3px] border-solid rounded-full px-10 py-1 border-black font-regular text-[18px] "
                  : " whitespace-nowrap border-[3px] border-solid rounded-full px-10 py-1 border-black font-regular text-[18px] "
              }
            >
              2 semaine (0)
            </button>{" "}
          </div>
        </div>
        {/*  filtre prix par personne */}
        <div className="flex flex-col width-full gap-5">
          <p className="font-bold text-[24px]">Nombres de personnes</p>
          <div className="flex flex-wrap  gap-5">{loopNumber()}</div>
        </div>
        {/* filtre type d’environnement */}
        <div className="flex flex-col width-full gap-5">
          <p className="font-bold text-[24px]">Type d’environnement</p>
          <div className="flex flex-wrap width-full gap-5">
            <button
              name="environment"
              onClick={handleChangeFilterMeet}
              value="SEA"
              className={
                filterMeet.environment === "SEA"
                  ? " whitespace-nowrap bg-[#448B7B] text-[#ffff]  border-[3px] border-solid rounded-full px-10 py-1 border-black font-regular text-[18px] "
                  : " whitespace-nowrap border-[3px] border-solid rounded-full px-10 border-black font-regular text-[18px]"
              }
            >
              Mer (2)
            </button>
            <button
              name="environment"
              onClick={handleChangeFilterMeet}
              value="MOUNTAIN"
              className={
                filterMeet.environment === "MOUNTAIN"
                  ? " whitespace-nowrap bg-[#448B7B] text-[#ffff]  border-[3px] border-solid rounded-full px-10 py-1 border-black font-regular text-[18px] "
                  : " whitespace-nowrap border-[3px] border-solid rounded-full px-10 py-1 border-black font-regular text-[18px]"
              }
            >
              Montagne (8)
            </button>
            <button
              name="environment"
              onClick={handleChangeFilterMeet}
              value="CITY"
              className={
                filterMeet.environment === "CITY"
                  ? " whitespace-nowrap bg-[#448B7B] text-[#ffff]  border-[3px] border-solid rounded-full px-10 py-1 border-black font-regular text-[18px] "
                  : " whitespace-nowrap border-[3px] border-solid rounded-full px-10 py-1 border-black font-regular text-[18px]"
              }
            >
              Ville (2)
            </button>
          </div>
        </div>
        {/* filtre type prix */}
        <div className="flex flex-col width-full gap-5">
          <p className="font-bold text-[24px]">Prix par personnes </p>
          <input
            name="price"
            color="red"
            className=" bg-red-500 custom-slider"
            onChange={handleChangeFilterMeet}
            type="range"
            value={filterMeet.price}
            min={200}
            max={1200}
            placeholder="Price Range"
          />
        </div>
        {/* filtre date */}
        <div className="flex flex-col width-full gap-5">
          <p className="font-bold text-[24px]">Date approximative</p>
          <input
            name="date"
            className=" rounded-[5px] border-[1px] p-5 border-solid border-black font-regular text-[24px]"
            type="date"
            placeholder="Date"
            value={filterMeet.date}
            onChange={handleChangeFilterMeet}
          />
        </div>
      </div>
    );
  };

  // const buttonNav = (action: string) => {
  //   return (
  //     <div className="flex flex-col w-[3vw] h-[100vh] items-center content-center pt-[70vh] ">
  //       <button
  //         className="flex justify-center items-center rounded-full bg-[#186E7A] h-[46px] w-[46px]"
  //         title="nav"
  //       >
  //         <AiOutlineRight
  //           className={
  //             action === "PREC"
  //               ? "text-[#FFFF]  text-2xl rotate-180"
  //               : "text-[#FFFF]  text-2xl"
  //           }
  //           onClick={() => {
  //             calculateCarrouselSetting(action);
  //           }}
  //         />
  //       </button>
  //     </div>
  //   );
  // };
  const seeMore = () => {
    // console.log(
    //   carrouselSetting.showItems,
    //   carrouselSetting.defaultShow,
    //   carrouselSetting.showItems <= carrouselSetting.defaultShow
    // );
    if (carrouselSetting.showItems <= carrouselSetting.defaultShow) {
      // console.log(2);
      setCarrouselSetting((pre: any) => {
        return {
          ...pre,
          ...{
            showItems:
              carrouselSetting.defaultShow + carrouselSetting.gapAdding,
          },
        };
      });
    }
  };

  return (
    <div className="flex flex-col w-full justify-between pt-32 gap-10">
      <Navbar />
      <div className="flex flex-col justify-between px-5 gap-20">
        <div className="flex w-full justify-between   items-start gap-10 ">
          <div className="flex flex-row  w-[30vw]">{filter()}</div>

          <div className="flex flex-row flex-wrap gap-10 pl-6 center w-[60vw] justify-start">
            {mapMeets()}
          </div>
        </div>
        <div className="flex justify-center  pr-10">
          <button
            onClick={seeMore}
            className="p-5 font-semibold text-white rounded-md bg-[#186E7A]"
          >
            VOIR PLUS
          </button>
        </div>
        <p className="text-[48px] font-extrabold  text-center relative">
          TOP 3 DES SÉMINAIRES LES PLUS APPRÉCIÉS
        </p>
        <div className="flex w-full flex-wrap justify-center px-5 gap-5 ">
          {mapWideCard()}
        </div>
      </div>
      <div className="h-20"></div>
      <Footer />
    </div>
  );
};

export default Meetings;
