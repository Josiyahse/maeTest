import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { wideCardData } from "../data";
import WideCard from "./cards/WideCard";
import useScreen from "./Screen";
import { FiMapPin } from "react-icons/fi";
import { FaEuroSign, FaCalendarAlt } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Meet = () => {
  let meet: any;
  const location = useLocation();
  const [modal, setModal] = useState({ active: false, position: 0 });

  if (location.state) {
    meet = location.state;
  }
  useEffect(() => {
    if (modal.active) {
      modalImages();
    }
  }, [modal]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const closModal = () => {
    setModal((pre: any) => {
      return { ...pre, ...{ active: false } };
    });
  };

  const openModal = (position: number) => {
    setModal(() => {
      return { active: true, position: position };
    });
  };

  const modalImages = () => {
    return (
      <div
        key={`popUp${modal.position}`}
        className=" flex flex-col justify-between py-5 gap-5 bg-white fixed z-50 top-0 left-0 w-[100vw] h-[100vh] "
      >
        <div className="flex justify-center">
          <p className="font-bold xl:text-[24px] 3xl:text-[34px]">
            {meet.activities[modal.position].habitation.name}
          </p>
        </div>
        {/* <div className="flex justify-end">2</div> */}
        {meet.activities[modal.position].habitation !== undefined ? (
          <div className="flex flex-wrap justify-center xl:justify-start items-start gap-[3vw] overflow-auto xl:px-[9vw]">
            {meet.activities[modal.position].habitation.images?.map(
              (img: any, index: number) => {
                return (
                  <img
                    className=" w-[70vw] rounded-xl xl:w-[25vw]"
                    key={`img${index}`}
                    alt="image habitation"
                    src={img}
                  />
                );
              }
            )}
          </div>
        ) : null}
        <div className="flex justify-center">
          <button
            onClick={closModal}
            className="font-bold bg-[#186E7A] py-2 px-10 rounded-lg text-white xl:text-[24px] 3xl:text-[34px] "
          >
            FERMER
          </button>
        </div>
      </div>
    );
  };

  const mapActivities = () => {
    return (
      <div className="flex flex-col w-full gap-5 pt-20">
        {meet.activities?.map((activity: any, index: number) => {
          return activitiesView(activity, index);
        })}
      </div>
    );
  };

  const screen = useScreen();
  const mapWideCard = () => {
    return wideCardData.map((info: any, index) => {
      return <WideCard key={index} data={info} />;
    });
    //   {`text-[${screen.sw(48)}px] font-extrabold  text-center relative w-full`}
  };

  const activitiesView = (act: any, index: number) => {
    return (
      <div
        key={`act${index}`}
        className="flex flex-col w-full gap-2 xl:gap-10 xl:flex-row"
      >
        <div
          className=" w-[90vw] h-[30vh] bg-no-repeat bg-center bg-cover xl:w-[525px] xl:h-[334px] 3xl:w-[725px] 3xl:h-[534px] "
          style={{ backgroundImage: `url(${act.image})` }}
        ></div>
        <div className="flex flex-col w-full xl:max-w-[50vw] justify-between xl:p-5 gap-5 relative">
          <p className="font-bold text-[6vw] md:text-[4vw] xl:text-[30px] 3xl:text-[44px]">{`Jour ${act.rank} : ${act.name}`}</p>
          <p className="font-medium  text-[4vw] md:text-[3vw] xl:text-[16px] 3xl:text-[26px] h-full">
            {act.description}
          </p>
          {act.details ? (
            <div className="flex flex-wrap gap-x-1 divide-x-2  divide-black ">
              {returnDetails(act.details)}
            </div>
          ) : null}
          <div className="flex flex-col justify-between gap-3 xl:flex-row">
            <div className="flex items-center gap-2">
              <FiMapPin className="text-[5vw] xl:text-[1.5vw]" />
              <p className="text-[5vw] md:text-[3vw] xl:text-[1vw]">
                {act.location}
              </p>
            </div>
            <div className="flex">
              {act.habitation ? (
                <div className="flex whitespace-nowrap gap-2">
                  <p className="font-bold text-[4vw] md:text-[3vw] xl:text-[1vw]">
                    Hébergement
                  </p>
                  <button
                    onClick={() => {
                      openModal(index);
                    }}
                    className="font-medium whitespace-normal text-[4vw] md:text-[3vw] xl:text-[1vw] text-[#186E7A]"
                  >
                    {act.habitation.name}
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const returnDetails = (details: Array<any>) => {
    return details.map((det: any) => {
      return (
        <div className="flex gap-1 whitespace-nowrap justify-center items-center px-2 xl:text-[16px] 3xl:text-[26px] ">
          <p className="font-bold text-[4vw] md:text-[3vw] xl:text-[16px] 3xl:text-[26px]">
            {det.name}
          </p>
          :
          <p className="font-medium text-[4vw] md:text-[3vw] xl:text-[16px] 3xl:text-[26px]">
            {det.description}
          </p>
        </div>
      );
    });
  };

  const tailWindStyle = {
    p48: `text-[10vw] xl:text-[48px] 3xl:text-[78px] font-extrabold  text-center relative w-full`,
    p24: `text-[4vw] xl:text-[24px] 3xl:text-[44px] font-light  text-center relative w-full`,
    p24wb: `text-[5vw] xl:text-[24px] 3xl:text-[44px] font-bold text-white text-left relative w-full`,
    p36l: `text-[6vw] xl:text-[36px] 3xl:text-[56px] font-bold  text-left relative w-full`,
    p16l: `text-[4vw] xl:text-[16px] 3xl:text-[36px] font-medium text-left relative w-full whitespace-normal`,
    p16lw: `text-[4vw] xl:text-[16px] 3xl:text-[36px] w-full font-medium text-white text-left relative  whitespace-normal`,
    imageCover: `w-[90vw] h-[60vh] rounded-[12px] bg-no-repeat bg-center bg-cover`,
  };

  return (
    <div className="flex flex-col h-full w-full justify-between gap-10  pt-[10vh] relative">
      <Navbar />
      {modal.active ? modalImages() : null}
      {/* <div className=" h-20"></div> */}
      <div className="flex flex-col justify-between items-center gap-10 px-10 pb-20  ">
        <p className={tailWindStyle.p48}>Meltrip Now</p>
        <p className={tailWindStyle.p24}>Vos séminaire prêt à l'emploi</p>
        <div
          className={tailWindStyle.imageCover}
          style={{
            backgroundImage: `url(${meet.coverImage})`,
          }}
        ></div>
        <div className="flex flex-col w-[90vw] gap-5 xl:gap-10">
          <p className={tailWindStyle.p36l}>{meet.title}</p>
          <p className={tailWindStyle.p16l}>{meet.description}</p>
          <p className={tailWindStyle.p36l}>Séminaire à personnaliser</p>
          <div className="flex w-full flex-wrap p-10 bg-[#186E7A] gap-5 justify-between items-center">
            <img
              className="w-fit 3xl:w-[350px]"
              alt="logo searching"
              src={require("../assets/amico.png")}
            />
            <div className="flex flex-col max-w-[685px] 2xl:max-w-[500px] gap-5 3xl:gap-1">
              <p className={tailWindStyle.p24wb}>
                Un séminaire selon vos envies
              </p>
              <p className={tailWindStyle.p16lw}>
                Cette proposition de séminaire est 100% personnalisable selon
                vos envies. Vous pourrez modifier votre séminaire (durée,
                hébergements, activités et services) au cours de vos échanges
                avec l’agence Meltrip
              </p>
            </div>
            <button className=" px-[50px] py-[20px] text-white 3xl:text-[36px] 3xl:w-fit bg-[#CE5729] rounded-[7px] font-semibold">
              Personnaliser mon séminaire
            </button>
          </div>
          {mapActivities()}
          <p className={tailWindStyle.p36l}>Details</p>
          <div className="flex flex-col gap-20 xl:flex-row ">
            <div className="flex gap-10 items-center">
              <FaEuroSign className="text-[57px] 3xl:text-[100px] text-[#CE5729]" />
              <div className="flex flex-col">
                <p className="font-medium text-[24px] 3xl:text-[50px]">
                  Budget moyen:
                </p>
                <p className="font-bold text-[24px] 3xl:text-[50px]">{`${meet.estimatePrice} € estimé par adulte`}</p>
              </div>
            </div>
            <div className="flex gap-10 items-center">
              <FaCalendarAlt className="text-[57px] 3xl:text-[100px] text-[#CE5729]" />
              <div className="flex flex-col">
                <p className="font-medium text-[24px] 3xl:text-[50px]">
                  Nombre de jours:
                </p>
                <p className="font-bold text-[24px] 3xl:text-[50px]">{`${meet.duration} jours`}</p>
              </div>
            </div>
          </div>
          <p className={tailWindStyle.p36l}>
            Ce circuit ne correspond pas exactement à vos attentes ?
          </p>
          <div className="flex  flex-wrap justify-start gap-5">
            <button className="px-20 py-5 w-full md:w-[43.3vw] xl:w-fit xl:px-[150px] xl:py-[25px] 3xl:text-[30px] text-white bg-[#CE5729] rounded-[7px] font-semibold">
              Régler ce séminaire
            </button>
            <button className="px-10 py-5 w-full md:w-[43.3vw] xl:w-fit xl:px-[150px] xl:py-[25px] 3xl:text-[30px] border-solid border-4 border-[#CE5729] rounded-[7px] font-semibold">
              Personnaliser votre séminaire
            </button>
            <button className="px-5 py-5  w-full xl:w-fit xl:px-[80px] xl:py-[25px] 3xl:text-[30px] border-solid border-4 border-[#448B7B] text-[#448B7B] rounded-[7px] font-semibold">
              Voir d’autres séminaires Meltrip Now
            </button>
          </div>
          <p className={tailWindStyle.p36l}>
            TOP 3 des séminaires les plus appréciés
          </p>
          <div className="flex w-full flex-wrap justify-center px-5 gap-5 ">
            {mapWideCard()}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Meet;
