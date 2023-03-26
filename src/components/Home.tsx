import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { AiOutlineRight } from "react-icons/ai";
import { HiOutlineArrowCircleRight } from "react-icons/hi";

const Home = () => {
  const fadeRef = useRef<any>(null);

  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let logoDes = [
    {
      logo: require("./../assets/Group1.png"),
      bold: "Une expérience sur mesure basé sur vos besoins et sur la personnalité des participant.e.s",
      regular:
        "Pour répondre à vos besoins, Meltrip vous demande de remplir un questionnaire pour obtenir les informations essentielles. Nous étudions également la personnalité de vos collaborateurs pour vous proposer 3 séminaires uniques et originaux, favorisant ainsi leur bien-être. Il ne vous reste plus qu'à faire votre choix parmi nos propositions.",
    },
    {
      logo: require("./../assets/Group2.png"),
      bold: "Un événement d’entreprise conçu pour répondre aux enjeux sociétaux actuels",
      regular:
        "Meltrip organise des séminaires écoresponsables en sélectionnant des acteurs selon des critères rigoureux. Cette démarche permet de réduire l'impact environnemental et de sensibiliser les participants à de nouvelles façons de consommer. Meltrip intègre également des activités écoresponsables pour offrir une expérience unique alliant qualité et responsabilité environnementale.",
    },
    {
      logo: require("./../assets/Group3.png"),
      bold: "Un.e interlocuteur.rice unique et dédié.e à votre entreprise pour assurer un séminaire qualitatif",
      regular:
        "Parce que la qualité de nos séminaires passe aussi par l’accompagnement, Meltrip vous assigne un interlocuteur.rice qui vous accompagnera durant toutes les étapes de construction de votre séminaire mais aussi pendant. Un doute ou une question n’hésitez pas à l’appeler ou lui envoyer un mail, il/elle vous répondra ! ",
    },
  ];

  let feeds = [
    {
      side: "LEFT",
      image: require("../assets/feed1.png"),
      title: "Réaliser une demande d’organisation de séminaire",
      description:
        "Pour cela, il vous suffit de remplir les informations nécessaires (type de séminaire et de lieu, nombre de participants, etc.) et nous laisser un commentaire si vous avez une envie particulière",
    },
    {
      side: "LEFT",
      image: require("../assets/feed2.png"),
      title: "Réaliser un mini Quiz de personnalité",
      description:
        "Une fois votre demande effectué, il reste le test de personnalité à effectuer. Pour cela, vous n’aurez plus qu’à nous donner les adresses mails des participants et nous enverrons à tous les participants un test qu’ils/elles devront remplir. Ne vous inquiétez pas si vous êtes participants, il vous suffira de rentrer aussi votre adresse mail !",
    },
    {
      side: "RIGHT",
      image: require("../assets/feed3.png"),
      title: "Recevez un appel de votre interlocuteur.rice dédié.e",
      description:
        "Pour s’assurer que votre demande sera retranscrite à la perfection en séminaire, votre interlocuteur.rice (qui vous accompagnera de l’organisation à la fin du séminaire) vous appellera dans les 72h.",
    },
    {
      side: "RIGHT",
      image: require("../assets/feed4.png"),
      title: "Recevoir 2-3 propositions de séminaire",
      description:
        "Pour que votre séminaire soit une réussite, nous rechercherons les meilleurs logements, transports et activités qui permettront à tous les types de personnalités de profiter pleinement du séminaire tout en veillant à ce que tous les aspects de votre séminaire soient éco-responsables. Vous recevrez alors 2 à 3 propositions et vous n’aurez plus qu’à valider celle qui vous convient le mieux !",
    },
    {
      side: "LEFT",
      image: require("../assets/feed5.png"),
      title:
        "Recevez tous les éléments qui vous seront nécessaires pour votre séminaire",
      description:
        "De la check list de votre valise, à vos itinéraires, vous recevrez tous les éléments nécessaires à la réalisation.",
    },
    {
      side: "LEFT",
      image: require("../assets/feed6.png"),
      title: "Profitez de votre séminaire",
      description:
        "Pour cette étape, il vous reste jusqu’à suivre votre itinéraire, emporter vos billets de transport et à vivre le moment présent",
    },
    {
      side: "END",
      image: require("../assets/feed7.png"),
      title:
        "consultez les émissions carbones de vos séminaires et découvrez comment meltrip vous aide à les compenser grâce à ses partenaires",
      description:
        "Conscients de notre impact, nous voulons aussi vous aider en vous informant des émissions carbones que vous avez réalisées pendant ce séminaire. Pour que vous puissiez vous aussi agir, nous vous proposons notre partenaire qui vous permettront de les compenser en investissant dans la structure agricole d’un agriculteur (reconnu par l’État), tout en bénéficiant de récolte de ceux-ci.",
    },
  ];

  let grids = [
    {
      type: "PHOTO",
      title: "un roadtrip à bordeaux",
      image: require("../assets/grid1.png"),
    },

    {
      type: "PHOTO",
      title: "un roadtrip à ANGERS",
      image: require("../assets/grid2.png"),
    },
    {
      type: "PHOTO",
      title: "un Tour à NICE",
      image: require("../assets/grid3.png"),
    },
    {
      type: "PHOTO",
      title: "un Passage à LILLE",
      image: require("../assets/grid4.png"),
    },

    {
      type: "PHOTO",
      title: "un roadtrip à TOULOUSE",
      image: require("../assets/grid5.png"),
    },
    {
      type: "PHOTO",
      title: "un Séjour à PARIS",
      image: require("../assets/grid6.png"),
    },
    {
      type: "PHOTO",
      title: "un roadtrip à bordeaux",
      image: require("../assets/grid7.png"),
    },
  ];

  const imageFeed = (image: any, index: number) => {
    return (
      <div className=" bg-no-repeat bg-center bg-cover relative">
        <img
          className="w-[100vw] md:w-[70vw] xl:w-[30vw]"
          alt="image"
          src={image}
        />
        <div className="absolute flex justify-center items-center rounded-full bg-[#448B7B] h-[50px] w-[50px]  top-[-20px] left-7 ">
          <p className="font-bold text-white text-[30px]">{index + 1}</p>
        </div>
      </div>
    );
  };

  useEffect(() => {
    if (fadeRef.current instanceof HTMLElement) {
      fadeRef.current.classList.add("active");
    }
  }, []);

  const mapFeed = () => {
    let title = "font-bold text-[5vw] xl:text-[1.9vw] ";
    let desc = "font-medium text-[4vw] text-[#757575] xl:text-[1.2vw] ";
    const left = (feed: any, index: number) => {
      return (
        <div
          className="flex flex-col gap-[2vh] justify-end xl:flex-row"
          ref={fadeRef}
        >
          {imageFeed(feed.image, index)}
          <div className="flex flex-col gap-5 w-full xl:w-[30vw]">
            <p className={title}>{feed.title.toUpperCase()}</p>
            <p className={desc}>{feed.description}</p>
          </div>
        </div>
      );
    };
    const right = (feed: any, index: number) => {
      return (
        <div
          className="flex flex-col-reverse gap-[2vh] justify-start xl:flex-row"
          ref={fadeRef}
        >
          <div className="flex flex-col gap-5 w-full xl:w-[30vw]">
            <p className={title}>{feed.title.toUpperCase()}</p>
            <p className={desc}>{feed.description}</p>
          </div>
          {imageFeed(feed.image, index)}
        </div>
      );
    };
    const end = (feed: any, index: number) => {
      return (
        <div className=" relative">
          <div className="flex flex-col-reverse gap-[2vh] justify-center xl:flex-row xl:pt-[10vh] ">
            <div className="flex flex-col gap-5 w-full xl:w-[30vw]">
              <p className={title}>{feed.title.toUpperCase()}</p>
              <p className={desc}>{feed.description}</p>
            </div>
            {imageFeed(feed.image, index)}
          </div>
          <div className="flex justify-center">
            <img
              alt="scoop"
              className="w-[30vw]  pt-[5vh] xl:w-[10vw] "
              src={require("../assets/scoop.png")}
            />
          </div>
        </div>
      );
    };

    return feeds.map((feed: any, index: number) => {
      switch (feed.side) {
        case "LEFT":
          return left(feed, index);

        case "RIGHT":
          return right(feed, index);

        case "END":
          return end(feed, index);

        default:
          break;
      }
    });
  };

  const mapDes = () => {
    return logoDes.map((des: any, index: number) => {
      return (
        <div
          key={`des${index}`}
          className="flex flex-col h-full w-full gap-[3vh] justify-around"
        >
          <div className="flex justify-center md:scale-125 xl:scale-100 md:pb-10 xl:pb-0 object-cover object-center ">
            <img className="" alt={des.title} src={des.logo} />
          </div>
          <div className="flex flex-col ">
            <p className=" flex items-start font-bold h-[16vh] text-[5vw] md:h-[20vh] xl:text-[1.5vw]">
              {des.bold.toUpperCase()}
            </p>
            <p className="font-medium text-[5vw] text-[#757575] xl:text-[1.2vw]">
              {des.regular}
            </p>
          </div>
        </div>
      );
    });
  };

  const returnImage = (pos: number) => {
    return (
      <div className="w-full xs:w-[250px] xl:w-[300px]  relative">
        <img className="w-full" alt={grids[pos].title} src={grids[pos].image} />
        <div className="flex w-full justify-between items-center px-3 xs:w-[250px] xl:w-[300px] absolute bottom-5 left-0 h-auto">
          <p className="font-bold w-full text-[3vw] text-white xl:text-[1vw] ">
            {grids[pos].title.toUpperCase()}
          </p>
          <HiOutlineArrowCircleRight className="text-white text-[10vw] xl:text-[4vw]" />
        </div>
      </div>
    );
  };

  const inputLetter = () => {
    return (
      <div className="flex  w-full xl:w-[90vw] xl:full xl:flex justify-between items-center bg-white rounded-full  p-3 gap-10 ">
        <input
          type="text"
          placeholder="Entrez votre adresse email"
          className="text-[3vw] xl:text-[1vw]"
        />
        <button className="bg-[#CE5729] rounded-full p-2 text-white text-[3vw] xl:p-3 xl:px-6 xl:text-[1vw]">
          S'abonner
        </button>
      </div>
    );
  };

  return (
    <div className="flex flex-col w-full justify-between gap-[30vh] pt-[80vh] static">
      <div className="hidden xl:inline">
        {/* <img
          alt="back1"
          className=" absolute left-[55vw] top-[135vh]"
          src={require("../assets/back1.png")}
        /> */}
        {/* <img
          alt="back2"
          className=" absolute left-[30vw] top-[195vh]"
          src={require("../assets/back2.png")}
        /> */}
        {/* <img
          alt="back3"
          className=" absolute left-[0vw] top-[170vh]"
          src={require("../assets/back3.png")}
        /> */}
        {/* <img
          alt="back4"
          className=" absolute w-[15vw] left-[15vw] top-[295vh] rotate-90"
          src={require("../assets/back4.png")}
        /> */}
        <img
          alt="backFigL"
          className=" absolute w-[20vw] left-[0vw] top-[300vh] "
          src={require("../assets/backFigL.png")}
        />
        {/* <img
          alt="back2"
          className=" absolute w-[15vw] left-[41vw] top-[345vh] rotate-12"
          src={require("../assets/back4.png")}
        /> */}
        {/* <img
          alt="back2"
          className=" absolute w-[15vw] right-[15vw] top-[410vh] rotate-[123deg]"
          src={require("../assets/back4.png")}
        /> */}
        {/* <img
          alt="back2"
          className=" absolute left-[51vw] top-[480vh] "
          src={require("../assets/back7.png")}
        /> */}
        <img
          alt="backFigR"
          className=" absolute w-[15vw] right-[0vw] top-[440vh]  "
          src={require("../assets/backFigR.png")}
        />

        {/* <img
          alt="back2"
          className=" absolute w-[15vw] left-[40vw] top-[480vh] rotate-[9deg]"
          src={require("../assets/back4.png")}
        /> */}

        {/* <img
          alt="back2"
          className=" absolute  left-[6vw] top-[550vh] "
          src={require("../assets/back7.png")}
        /> */}
        <img
          alt="backFigL"
          className=" absolute w-[20vw]  left-[0vw] top-[550vh] z-10"
          src={require("../assets/backFigL.png")}
        />
        {/* <img
          alt="back2"
          className=" absolute  left-[20vw] top-[550vh] rotate-[115deg]"
          src={require("../assets/back4.png")}
        /> */}
        {/* <img
          alt="back2"
          className=" absolute  left-[48vw] top-[620vh]  -rotate-[4deg]"
          src={require("../assets/back4.png")}
        /> */}
        {/* <img
          alt="scoop"
          className=" absolute left-[48vw] top-[730vh] "
          src={require("../assets/scoop.png")}
        /> */}
        {/* <img
          alt="back5"
          className=" absolute left-[40vw] top-[750vh] "
          src={require("../assets/back5.png")}
        /> */}
      </div>
      <Navbar />
      {/* Image div */}
      <div
        className="flex flex-col justify-end h-[100vh] w-full absolute top-0 left-0 bg-no-repeat bg-center bg-cover gap-[9vh] pb-5 xl:gap-[10vh] "
        style={{
          backgroundImage: `url(${require("../assets/HomeBackground.png")})`,
        }}
      >
        <div className="flex flex-col justify-center gap-3">
          <p className="text-center text-[7vw] font-bold text-white xl:text-[5vw] ">
            {"votre séminaire sur mesure".toUpperCase()}
          </p>
          <p className="text-center text-[4vw] font-semibold text-white xl:text-[2vw]">
            Soyez vous, jusqu’au bout !
          </p>
        </div>
        <div className="flex flex-col items-center gap-5">
          <button className="text-center text-[4vw] font-bold bg-[#CE5729] px-10 py-5 text-white xl:text-[1vw]">
            CRÉONS VOTRE SÉMINAIRE
          </button>
          <a title="down" href="#discover">
            <AiOutlineRight className=" text-[50px] rotate-90 text-white" />
          </a>
        </div>
      </div>
      {/* Image div */}
      <div className="flex flex-col items-center  w-full  bg-no-repeat bg-center bg-cover gap-[11vh]  pb-5">
        <img
          className="w-[13vw]"
          alt="logo meltrip"
          src={require("../assets/meltripvdefdefdef-2.png")}
        />
        <p
          id="discover"
          className="font-bold text-[5vw] text-[#CE5729] pt-[6vh] xl:text-[2vw]"
        >
          Un séminaire avec Meltrip c'est...
        </p>
        <div className="flex flex-col gap-[10vh] justify-around w-[90vw] relative xl:flex xl:flex-row  ">
          {mapDes()}
        </div>
        <p className="font-bold text-[5vw] text-[#CE5729] pt-[6vh] xl:text-[2vw]">
          Comment ça marche ?
        </p>
        <div className="flex flex-col gap-[15vh] pt-[15vh] px-[5vw]">
          {mapFeed()}
        </div>
        {/* <div className="columns-4 ">{mapGrid()}</div> */}
        <div className="flex  items-center gap-10 w-full relative xl:flex-col xl:h-[1300px]  ">
          <div className="flex items-start px-5 xl:px-0 gap-[5vw] xl:flex-row xl:justify-between xl:gap-5">
            {returnImage(0)}
            <div className="flex flex-col justify-start gap-[50px] w-full xl:w-[600px] ">
              <p className="font-bold text-[5vw] text-[#CE5729] xl:text-left xl:text-[40px] xs:text-[35px]">
                Vous voulez un séminaire prêt- à l’emploi ?
              </p>
              <p className="font-medium text-[3vw] text-[#757575] xl:text-[20px] xs:text-[15px] ">
                Conscient de notre impact, nous voulons aussi vous aider en vous
                informant des émissions GES que vous avez réalisées pendant ce
                séminaire.
              </p>
              <button
                onClick={() => {
                  navigate("/meetings");
                }}
                className="flex underline underline-offset-1 text-left text-medium text-[3vw] text-[#448B7B] xl:text-[19px] xs:text-[14px] xl:z-10  "
              >
                Voir plus de Meltrip Now
              </button>
            </div>
            <div className="hidden xl:block">{returnImage(1)}</div>
          </div>
          <div className="hidden xl:flex gap-10 items-center absolute xl:pt-[400px] xs:pt-[350px] 3xl:[0vh]">
            {returnImage(2)}
            <div className="flex flex-col gap-10">
              {returnImage(3)}
              {returnImage(6)}
            </div>
            {returnImage(4)}
            {returnImage(5)}
          </div>
        </div>
        <div className="flex flex-col w-full gap-10 items-center  xl:gap-32">
          <p className="font-bold text-[5vw] text-[#CE5729] xl:text-[2vw]">
            NOS GARANTIES
          </p>
          <div className="flex flex-col w-full justify-around gap-5 px-[1vw] xl:px-10 xl:flex-row">
            <div className="flex px-[3vw] flex-col items-center gap-5 ">
              <img
                className=" w-[15vw] xl:w-[5vw]"
                alt="star"
                src={require("../assets/star.png")}
              />
              <p className="font-regular text-[4vw] w-[70vw] xl:text-[24px] xl:w-[20vw] text-center">
                Des séminaires sur mésure
              </p>
            </div>
            <div className="flex px-[3vw] flex-col justify-between gap-5 items-center ">
              <img
                className="w-[15vw]  xl:w-[5vw]"
                alt="step"
                src={require("../assets/step.png")}
              />
              <p className="font-regular text-[4vw] w-[70vw]  xl:text-[24px] xl:w-[20vw] text-center">
                Calcul de votre empreinte carbone et sélection d'un de nos
                partenaires pour vous aider à les compenser
              </p>
            </div>
            <div className="flex flex-col px-[3vw] items-center gap-5 text-center">
              <img
                className="w-[30vw] xl:w-[15vw]"
                alt="card"
                src={require("../assets/card.png")}
              />
              <p className="font-regular text-[4vw] w-[70vw]  xl:text-[24px] xl:w-[20vw] text-center">
                Paiement sécurisé
              </p>
            </div>
          </div>
        </div>
        <p className="font-bold text-[5vw] text-center px-5 text-[#CE5729] xl:pt-[6vh] xl:text-[2vw] ">
          {"Envie d’en savoir plus et d’être au courant des nouveautés ?".toUpperCase()}
        </p>
        <div className="flex justify-center  w-full  xl:px-[20vw]  relative">
          {/* <img
            className="hidden xl:block w-[7vw] absolute top-[14vh] left-[18vw]"
            alt="rectangle"
            src={require("../assets/newsLetterRectangle.png")}
          /> */}
          <div className=" flex flex-col justify-center items-start w-[90vw] bg-[#CE5729]  h-[30vh] xl:h-fit xl:w-[55vw] p-5 md:p-10 xl:p-10 rounded-[30px] md:rounded-[40px] xl:rounded-[60px] z-10 gap-4">
            <p className="font-bold text-[4vw] text-white xl:text-[1.7vw] xl:w-[25vw]">
              Abonnez-vous à notre Newsletter
            </p>
            <p className="font-medium text-[3vw] text-white xl:text-[1.3vw] xl:w-[23vw]">
              En m’abonnant, j’accepte de recevoir cette newsletter et je
              comprends que je peux me désabonner facilement à tout moment.
            </p>
            <div className="block w-full xl:hidden">{inputLetter()} </div>
          </div>
          <div className="hidden xl:flex bg-[#186E7A] h-[25vh]  absolute w-[20vw] right-[24vw]  justify-center items-center rounded-full pr-20 z-30 xl:h-full">
            {inputLetter()}
          </div>
          <div className="hidden xl:block bg-[#186E7A] h-[25vh]  absolute w-[11vw] right-[22vw]  rounded-r-[60px] z-20 xl:h-full"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
