import React, { useRef, useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { AiOutlineRight } from "react-icons/ai";
import { HiOutlineArrowCircleRight } from "react-icons/hi";

const Home = () => {
  const fadeRef = useRef<any>(null);

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
        <img alt="image" src={image} />
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
    let title = "font-bold text-[30px] ";
    let desc = "font-medium text-[25px] text-[#757575] ";
    const left = (feed: any, index: number) => {
      return (
        <div className="flex gap-10 justify-end " ref={fadeRef}>
          {imageFeed(feed.image, index)}
          <div className="flex flex-col gap-5 w-[30vw] ">
            <p className={title}>{feed.title.toUpperCase()}</p>
            <p className={desc}>{feed.description}</p>
          </div>
        </div>
      );
    };
    const right = (feed: any, index: number) => {
      return (
        <div className="flex gap-10 justify-start " ref={fadeRef}>
          <div className="flex flex-col gap-5 w-[30vw]">
            <p className={title}>{feed.title.toUpperCase()}</p>
            <p className={desc}>{feed.description}</p>
          </div>
          {imageFeed(feed.image, index)}
        </div>
      );
    };
    const end = (feed: any, index: number) => {
      return (
        <div className="flex gap-10 justify-center pt-20 ">
          <div className="flex flex-col gap-5 w-[35vw]">
            <p className={title}>{feed.title.toUpperCase()}</p>
            <p className={desc}>{feed.description}</p>
          </div>
          {imageFeed(feed.image, index)}
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
          className="flex flex-col h-full w-[30vw] gap-10 justify-around"
        >
          <div className="flex justify-center  h-[35vh] object-cover object-center ">
            <img
              alt={des.title}
              // viewBox="0 0 430 299"
              // xmlns="http://www.w3.org/2000/svg"
              // dangerouslySetInnerHTML={{ __html: des.logo }}
              src={des.logo}
            />
          </div>
          <p className="font-bold h-[20vh] text-[30px]">
            {des.bold.toUpperCase()}
          </p>
          <p className="font-medium text-[25px] text-[#757575]">
            {des.regular}
          </p>
        </div>
      );
    });
  };

  const returnImage = (pos: number) => {
    return (
      <div className="w-[17vw] relative">
        <img alt={grids[pos].title} src={grids[pos].image} />
        <div className="flex justify-between items-center px-5 w-[17vw] absolute bottom-5 left-0 h-auto">
          <p className="font-bold text-white text-[1vw] ">
            {grids[pos].title.toUpperCase()}
          </p>
          <HiOutlineArrowCircleRight className="text-white text-[4vw]" />
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col w-full justify-between gap-[30vh] pt-[80vh] static">
      <div className="inline-block xl:inline-block md:hidden sm:hidden ">
        <img
          alt="back1"
          className=" absolute left-[55vw] top-[135vh]"
          src={require("../assets/back1.png")}
        />
        <img
          alt="back2"
          className=" absolute left-[30vw] top-[195vh]"
          src={require("../assets/back2.png")}
        />
        <img
          alt="back3"
          className=" absolute left-[0vw] top-[170vh]"
          src={require("../assets/back3.png")}
        />
        <img
          alt="back4"
          className=" absolute w-[15vw] left-[15vw] top-[320vh] rotate-90"
          src={require("../assets/back4.png")}
        />
        <img
          alt="backFigL"
          className=" absolute  left-[0vw] top-[330vh] "
          src={require("../assets/backFigL.png")}
        />
        <img
          alt="back2"
          className=" absolute w-[15vw] left-[40vw] top-[360vh] rotate-12 "
          src={require("../assets/back4.png")}
        />
        <img
          alt="back2"
          className=" absolute w-[15vw] right-[10vw] top-[425vh] rotate-[123deg]"
          src={require("../assets/back4.png")}
        />
        <img
          alt="back2"
          className=" absolute left-[55vw] top-[500vh] "
          src={require("../assets/back7.png")}
        />
        <img
          alt="backFigR"
          className=" absolute  right-[0vw] top-[460vh]  "
          src={require("../assets/backFigR.png")}
        />

        <img
          alt="back2"
          className=" absolute w-[15vw] left-[40vw] top-[495vh] rotate-[9deg]"
          src={require("../assets/back4.png")}
        />
        <img
          alt="back2"
          className=" absolute  left-[10vw] top-[565vh] rotate-[]"
          src={require("../assets/back7.png")}
        />
        <img
          alt="backFigL"
          className=" absolute  left-[0vw] top-[570vh] "
          src={require("../assets/backFigL.png")}
        />
        <img
          alt="back2"
          className=" absolute  left-[23vw] top-[563vh] rotate-[115deg]"
          src={require("../assets/back4.png")}
        />
        <img
          alt="back2"
          className=" absolute  left-[49vw] top-[635vh]  -rotate-[4deg]"
          src={require("../assets/back4.png")}
        />
        <img
          alt="scoop"
          className=" absolute  left-[48vw] top-[735vh] "
          src={require("../assets/scoop.png")}
        />
        <img
          alt="back5"
          className=" absolute left-[40vw] top-[755vh] "
          src={require("../assets/back5.png")}
        />
      </div>
      <Navbar />
      {/* Image div */}
      <div
        className="flex flex-col justify-end h-[100vh] w-full absolute top-0 left-0 bg-no-repeat bg-center bg-cover gap-28 pb-5"
        style={{
          backgroundImage: `url(${require("../assets/HomeBackground.png")})`,
        }}
      >
        <div className="flex flex-col justify-center gap-3">
          <p className="text-center text-[71px] font-bold text-white">
            {"votre séminaire sur mesure".toUpperCase()}
          </p>
          <p className="text-center text-[32px] font-semibold text-white">
            Soyez vous, jusqu’au bout !
          </p>
        </div>
        <div className="flex flex-col items-center gap-5">
          <button className="text-center text-[36px] font-bold bg-[#CE5729] px-10 py-5 text-white">
            CRÉONS VOTRE SÉMINAIRE
          </button>
          <a title="down" href="#discover">
            <AiOutlineRight className=" text-[50px] rotate-90 text-white" />
          </a>
        </div>
      </div>
      {/* Image div */}
      <div className="flex flex-col items-center  w-full  bg-no-repeat bg-center bg-cover gap-40  pb-5">
        <img
          className="w-[13vw]"
          alt="logo meltrip"
          src={require("../assets/meltripvdefdefdef-2.png")}
        />
        <p id="discover" className="font-bold text-[40px] text-[#CE5729]">
          Un séminaire avec Meltrip c’est...
        </p>
        <div className="xl:flex flex-row gap-20  justify-around w-[90vw] relative ">
          {mapDes()}
        </div>
        <p className="font-bold text-[40px] text-[#CE5729]">
          Comment ça marche ?
        </p>
        <div className="flex flex-col gap-32 pt-[15vh] px-10">{mapFeed()}</div>
        {/* <div className="columns-4 ">{mapGrid()}</div> */}
        <div className="flex flex-col gap-20 h-[135vh] relative pt-[45vh]">
          <div className="flex gap-20 items-start">
            {returnImage(0)}
            <div className="flex flex-col justify-start gap-20 w-[38vw] ">
              <p className="font-bold text-[40px] text-[#CE5729] text-center">
                Vous voulez un séminaire prêt- à l’emploi ?
              </p>
              <p className="font-medium text-[25px] text-[#757575] ">
                Conscient de notre impact, nous voulons aussi vous aider en vous
                informant des émissions GES que vous avez réalisées pendant ce
                séminaire.
              </p>
              <p className="underline underline-offset-1 text-medium text-[20px] text-[#448B7B] ">
                Voir plus de séminaire Meltrip Now
              </p>
            </div>
            {returnImage(1)}
          </div>
          <div className="flex gap-20 items-center absolute pt-[50vh] ">
            {returnImage(2)}
            <div className="flex flex-col gap-20">
              {returnImage(3)}
              {returnImage(6)}
            </div>
            {returnImage(4)}
            {returnImage(5)}
          </div>
        </div>
        <div className="flex flex-col w-full items-center pt-[30vh] gap-32">
          <p className="font-bold text-[40px] text-[#CE5729]">NOS GARANTIES</p>
          <div className="flex w-full justify-around px-10 ">
            <div className="flex flex-col items-center gap-10">
              <img
                className="w-[5vw]"
                alt="star"
                src={require("../assets/star.png")}
              />
              <p className="font-regular text-[20px] w-[20vw] text-center">
                Des séminaires sur mésure
              </p>
            </div>
            <div className="flex flex-col items-center gap-10">
              <img
                className="w-[5vw]"
                alt="step"
                src={require("../assets/step.png")}
              />
              <p className="font-regular text-[20px] w-[20vw] text-center">
                Calcul de votre empreinte carbone et sélection d’un de nos
                partenaires pour vous aider à les compenser
              </p>
            </div>
            <div className="flex flex-col items-center gap-10 text-center">
              <img
                className="w-[15vw]"
                alt="card"
                src={require("../assets/card.png")}
              />
              <p className="font-regular text-[20px] w-[20vw]">
                Paiement sécurisé
              </p>
            </div>
          </div>
        </div>

        <p className="font-bold text-[50px] text-[#CE5729]">
          {"Envie d’en savoir plus et d’être au courant des nouveautés ?".toUpperCase()}
        </p>
        <div className="flex h-[20vh] w-full px-[20vw] relative">
          <img
            className="w-[7vw] absolute top-[14vh] left-[18vw]"
            alt="rectangle"
            src={require("../assets/newsLetterRectangle.png")}
          />
          <div className=" flex flex-col justify-center items-start bg-[#CE5729] h-[25vh] w-[55vw] p-10 rounded-[60px] z-10 gap-4">
            <p className="font-bold text-white text-[30px] w-[25vw] ">
              Abonnez-vous à notre Newsletter
            </p>
            <p className="font-medium text-white text-[20px]  w-[25vw]">
              En m’abonnant, j’accepte de recevoir cette newsletter et je
              comprends que je peux me désabonner facilement à tout moment.
            </p>
          </div>
          <div className="flex bg-[#186E7A] h-[25vh]  absolute w-[20vw] right-[25vw]  justify-center items-center rounded-full pr-20 z-30">
            <div className="flex justify-between items-center bg-white rounded-full  p-3 gap-20 ">
              <input type="text" placeholder="Entrez votre adresse email " />
              <button className="bg-[#CE5729] rounded-full p-3 px-6 text-white ">
                S'abonner
              </button>
            </div>
          </div>
          <div className=" bg-[#186E7A] h-[25vh]  absolute w-[10vw] right-[22vw]  rounded-r-[60px] z-20"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
