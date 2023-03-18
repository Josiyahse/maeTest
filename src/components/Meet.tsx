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
        className="flex flex-col justify-between bg-red-500 fixed z-50 w-[90vw] h-[90vh] top-[5vh] left-[5vw] p-[1vw] gap-[5vw]"
      >
        <div className="flex justify-end">2</div>
        {meet.activities[modal.position].habitation !== undefined ? (
          <div className="flex flex-wrap justify-center items-center gap-[3vw] overflow-auto">
            {meet.activities[modal.position].habitation.images?.map(
              (img: any, index: number) => {
                return (
                  <img
                    className=" w-[70vw] rounded-xl"
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
            className="font-bold bg-red-500 text-white"
          >
            FERMER
          </button>
        </div>
      </div>
    );
  };

  const mapActivities = () => {
    return (
      <div className="flex flex-col w-full gap-5">
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
      <div key={`act${index}`} className="flex w-full gap-10">
        <div
          className=" w-[525px] h-[334px] bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: `url(${act.image})` }}
        ></div>
        <div className="flex flex-col max-w-[50vw] justify-between p-5 gap-5 relative">
          <p className="font-bold text-[30px]">{`Jour ${act.rank} : ${act.name}`}</p>
          <p className="font-medium text-[16px] h-full">{act.description}</p>
          {act.details ? (
            <div className="flex flex-wrap gap-x-1 divide-x-2  divide-black ">
              {returnDetails(act.details)}
            </div>
          ) : null}
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FiMapPin />
              <p>{act.location}</p>
            </div>
            <div className="flex">
              {act.habitation ? (
                <div className="flex whitespace-nowrap gap-2">
                  <p className="font-bold text-[16px]">Hébergement</p>
                  <p
                    onClick={() => {
                      openModal(index);
                    }}
                    className="font-medium text-[#186E7A] text-[16px]"
                  >
                    {act.habitation.name}
                  </p>
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
        <div className="flex gap-1 whitespace-nowrap justify-center items-center px-2 ">
          <p className="font-bold text-[16px]">{det.name}</p>:
          <p className="font-medium text-[16px]">{det.description}</p>
        </div>
      );
    });
  };

  const tailWindStyle = {
    p48: `text-[48px] font-extrabold  text-center relative w-full`,
    p24: `text-[24px] font-light  text-center relative w-full`,
    p24wb: `text-[24px] font-bold text-white text-left relative w-full`,
    p36l: `text-[36px] font-bold  text-left relative w-full`,
    p16l: `text-[16] font-medium text-left relative w-full whitespace-normal`,
    p16lw: `text-[16] font-medium text-white text-left relative w-full whitespace-normal`,
    imageCover: `w-[90vw] h-[60vh] rounded-[12px] bg-no-repeat bg-center bg-cover`,
  };
  return (
    <div className="flex flex-col h-full w-full justify-between gap-10  pt-[30vh] relative">
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
        <div className="flex flex-col w-[80vw] gap-10">
          <p className={tailWindStyle.p36l}>{meet.title}</p>
          <p className={tailWindStyle.p16l}>{meet.description}</p>
          <p className={tailWindStyle.p36l}>Séminaire à personnaliser</p>
          <div className="flex w-full flex-wrap p-10 bg-[#186E7A] gap-5 justify-between items-center">
            <img alt="logo searching" src={require("../assets/amico.png")} />
            <div className="flex flex-col max-w-[685px] gap-5">
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
            <button className="w-[351px] h-[66px] text-white bg-[#CE5729] rounded-[7px] font-semibold">
              Personnaliser mon séminaire
            </button>
          </div>
          {mapActivities()}
          <p className={tailWindStyle.p36l}>Details</p>
          <div className="flex gap-20">
            <div className="flex gap-10 items-center">
              <FaEuroSign className="text-[57px] text-[#CE5729]" />
              <div className="flex flex-col gap-5">
                <p className="font-medium text-[24px]">Budget moyen:</p>
                <p className="font-bold text-[24px]">{`${meet.estimatePrice} € estimé par adulte`}</p>
              </div>
            </div>
            <div className="flex gap-10 items-center">
              <FaCalendarAlt className="text-[57px] text-[#CE5729]" />
              <div className="flex flex-col gap-5">
                <p className="font-medium text-[24px]">Nombre de jours:</p>
                <p className="font-bold text-[24px]">{`${meet.duration} jours`}</p>
              </div>
            </div>
          </div>
          <p className={tailWindStyle.p36l}>
            Ce circuit ne correspond pas exactement à vos attentes ?
          </p>
          <div className="flex  flex-wrap gap-5">
            <button className="px-20 h-[66px] text-white bg-[#CE5729] rounded-[7px] font-semibold">
              Régler ce séminaire
            </button>
            <button className="px-10 h-[66px] border-solid border-4 border-[#CE5729] rounded-[7px] font-semibold">
              Personnaliser votre séminaire
            </button>
            <button className="px-20 h-[66px] border-solid border-4 border-[#448B7B] text-[#448B7B] rounded-[7px] font-semibold">
              Voir d’autres séminaires Meltrip Now
            </button>
          </div>
          <p className={tailWindStyle.p36l}>
            TOP 3 des séminaires les plus appréciés{" "}
          </p>
          <div className="flex w-full flex-wrap justify-start px-5 gap-5 ">
            {mapWideCard()}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Meet;
