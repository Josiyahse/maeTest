import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useScreen from "./Screen";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let screen: any = useScreen();
  const [active, setActive] = useState("ACCUEIL");
  const [isload, setIsLoad] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  if (location.state !== null && !isload) {
    setActive(location.state);
    setIsLoad(!isload);
  }

  const list = [
    { name: "notre agence", link: "/meetings" },
    { name: "séminaire prêt a l'emploie", link: "/meetings" },
    { name: "blog", link: "/meetings" },
    { name: "contact", link: "/meetings" },
  ];

  const logList = [
    { name: "s'inscrire", type: "LINK", link: "" },
    { name: "se connecter", type: "LINK", link: "" },
    { name: "EN", type: "LANG", link: "" },
  ];

  const logZone = () => {
    if (screen.width < 1280) {
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

  const colorNotActive = () => {
    if (active === "ACCUEIL") {
      return "font-semibold relative text-white";
    } else {
      return "font-semibold relative ";
    }
  };
  const colorActive = () => {
    if (active === "ACCUEIL") {
      return "font-semibold relative text-white";
    } else {
      return "font-semibold relative text-[#186E7A]";
    }
  };

  const renderListOne = () => {
    if (screen.width < 640) {
    }
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
  };

  let glass =
    "glass flex flex-row flex-wrap gap-5 left-0 top-0 p-5 w-full bg-white justify-between items-center z-[10] absolute";
  let noGlass =
    "flex flex-row flex-wrap gap-5 left-0 top-0 p-5 w-full bg-white justify-between items-center z-[10] absolute";

  return (
    <div className={active === "ACCUEIL" ? glass : noGlass}>
      <button
        className="sticky"
        onClick={() => {
          navigate("/");
        }}
      >
        <img
          className="shrink  w-20 "
          src={require(active != "ACCUEIL"
            ? "../assets/metripLogo.png"
            : "../assets/meltripLogoBlanc.png")}
          alt="Grapefruit slice atop a pile of other slices"
        />
      </button>

      <div className="shrink  flex flex-row gap-10 ">{renderListOne()}</div>
      <div className="shrink  flex flex-cols-3 divide-neutral-900 divide-x-2 ">
        {logZone()}
      </div>
    </div>
  );
};

export default Navbar;
