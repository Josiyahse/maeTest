import { useRouteError } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div
      className="flex flex-col h-full w-full  gap-8 relative"
      id="error-page"
    >
      <Navbar />
      <div className="flex flex-col justify-center items-center  gap-10 px-[300px] ">
        <div>
          <p className="font-extrabold text-[100px] text-[#263238] text-center">
            404
          </p>
          <p className="font-bold text-[40px] text-[#263238] text-center">
            Page non trouvée
          </p>
        </div>
        <img
          className="w-[42vw]"
          alt="error image"
          src={require("./assets/error.png")}
        />
        <button className="px-20 h-[66px] w-[500px] text-white bg-[#CE5729] rounded-[7px] font-semibold">
          RETOUR À L’ACCUEIL
        </button>
      </div>
      <Footer />
    </div>
  );
}
