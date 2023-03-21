import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useScreen from "./Screen";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let screen: any = useScreen();
  const [active, setActive] = useState("ACCUEIL");
  const [isload, setIsLoad] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [dropped, setDropped] = useState(false);

  if (location.state !== null && !isload) {
    setActive(location.state);
    setIsLoad(!isload);
  }

  const list = [
    { name: "notre agence", link: "/" },
    { name: "séminaire prêt a l'emploie", link: "/meetings" },
    { name: "blog", link: "/" },
    { name: "contact", link: "/" },
  ];

  const logList = [
    { name: "s'inscrire", type: "LINK", link: "/" },
    { name: "se connecter", type: "LINK", link: "/" },
    { name: "EN", type: "LANG", link: "/" },
  ];

  const logZone = () => {
    if (screen.width < 1280) {
      return (
        <button title="menu" className="flex justify-end ">
          <p
            className={
              "active".toUpperCase() === active
                ? colorActive()
                : colorNotActive()
            }
            onClick={() => {
              setDropped(!dropped);
            }}
          >
            <HiMenu className="text-[7vw] text-left" />
          </p>
        </button>
      );
    } else {
      return logList.map((entry: any) => {
        return (
          <button className="flex justify-center px-5">
            <p
              className={
                entry.name.toUpperCase() === active
                  ? colorActive()
                  : colorNotActive()
              }
            >
              {entry.name.toUpperCase()}
            </p>
          </button>
        );
      });
    }
  };

  const logSmallScreen = () => {
    return logList.map((text: any, index) => {
      return (
        <button
          key={`${index}list`}
          className={
            text.name.toUpperCase() === active
              ? colorActive()
              : colorNotActive()
          }
          onClick={() => {
            setActive(text.name.toUpperCase());
            navigate(text.link, { state: text.name.toUpperCase() });
          }}
        >
          {text.name.toUpperCase()}
        </button>
      );
    });
  };

  const colorNotActive = () => {
    if (active === "ACCUEIL") {
      return "flex font-bold text-[5vw] text-[#FFFFFF] md:text-[4vw] xl:text-[1vw]";
    } else {
      return "flex font-bold text-[5vw] text-[#000000] md:text-[4vw] xl:text-[1vw]";
    }
  };

  const colorActive = () => {
    if (active === "ACCUEIL") {
      return "flex font-bold text-[5vw] text-[#FFFFFF] md:text-[4vw] xl:text-[1vw]";
    } else {
      return "flex font-bold text-[5vw] text-[#186E7A] md:text-[4vw] xl:text-[1vw]";
    }
  };

  const renderListOne = () => {
    if (screen.width < 1280) {
      return list.map((text: any, index) => {
        return (
          <button
            key={`${index}list`}
            className={
              text.name.toUpperCase() === active
                ? colorActive()
                : colorNotActive()
            }
            onClick={() => {
              setActive(text.name.toUpperCase());
              navigate(text.link, { state: text.name.toUpperCase() });
            }}
          >
            {text.name.toUpperCase()}
          </button>
        );
      });
    } else {
      return list.map((text: any, index) => {
        return (
          <button
            key={`${index}list`}
            className={
              text.name.toUpperCase() === active
                ? colorActive()
                : colorNotActive()
            }
            onClick={() => {
              setActive(text.name.toUpperCase());
              navigate(text.link, { state: text.name.toUpperCase() });
            }}
          >
            {text.name.toUpperCase()}
          </button>
        );
      });
    }
  };

  let glass =
    "glass flex flex-row flex-wrap gap-5 left-0 top-0 p-5 xl:px-10 w-full bg-white justify-between items-center z-[10] absolute";
  let noGlass =
    "flex flex-row flex-wrap gap-5 left-0 top-0 p-5 xl:px-10 w-full bg-white justify-between items-center z-[10] absolute";

  let divideBlack = "shrink divide-black divide-x-2  flex flex-cols-3";
  let divideWite = "shrink divide-white divide-x-2  flex flex-cols-3";
  return (
    <div className={active === "ACCUEIL" ? glass : noGlass}>
      <button
        className="sticky"
        onClick={() => {
          navigate("/");
        }}
      >
        <img
          className="shrink  w-20 md:w-28 xl:w-32 "
          src={require(active != "ACCUEIL"
            ? "../assets/metripLogo.png"
            : "../assets/meltripLogoBlanc.png")}
          alt="Grapefruit slice atop a pile of other slices"
        />
      </button>

      <div className="shrink hidden  gap-10 xl:flex xl:flex-row  ">
        {renderListOne()}
      </div>
      <div className={active === "ACCUEIL" ? divideWite : divideBlack}>
        {logZone()}
      </div>
      {dropped ? (
        <div className="flex flex-col justify-start pt-10 gap-[5vh] w-full items-start h-[90vh] ">
          {renderListOne()}
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
