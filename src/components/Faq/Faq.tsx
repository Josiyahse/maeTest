import React, { useState } from "react";
import faq from "../../assets/iconFaq/faq.png";
import { categories } from "./data";

const Faq = () => {
  const [activeFaq, setActiveFaq] = useState("services");
  return (
    <div className="flex flex-col justify-center m-[72px]">
      <div className="justify-center hidden md:flex ">
        <img className="w-[750px] h-[470px]" src={faq} alt="faq" />
      </div>

      <p className="mt-[20px] xl:px-[200px]">
        Bienvenue sur la FAQ de notre site web. Vous trouverez ci-dessous les
        réponses aux questions les plus fréquentes sur nos services. Si vous ne
        trouvez pas de réponse à votre question ou si vous avez besoin de
        conseils, pour plus d’informations, n’hésitez pas à nous contacter.
      </p>
      <div className="flex flex-wrap justify-between items-center mt-[100px]">
        {categories.map(({ title, label, active, inactive }) => (
          <div
            role="button"
            onClick={() => {
              setActiveFaq(title);
            }}
            className={`flex flex-col justify-center items-center p-3 border-2 border-black w-[200px] h-[200px] mt-[20px] ${
              activeFaq === title && "bg-black"
            }`}
          >
            <div className="w-[75px] h-[75px]">
              <img
                className="w-full h-full"
                src={activeFaq === title ? active : inactive}
                alt={title}
              />
            </div>

            <label
              className={`mt-2 text-center text-${
                activeFaq === title ? "white" : "black"
              }`}
            >
              {label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
