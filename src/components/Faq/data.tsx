import data from "../../assets/iconFaq/active/data.svg";
import guarantee from "../../assets/iconFaq/active/guarantee.svg";
import price from "../../assets/iconFaq/active/price.svg";
import sanitary from "../../assets/iconFaq/active/sanitary.svg";
import services from "../../assets/iconFaq/active/services.svg";
import sponsorship from "../../assets/iconFaq/active/sponsorship.svg";
import values from "../../assets/iconFaq/active/values.svg";

import dataInactive from "../../assets/iconFaq/inactive/data.svg";
import guaranteeInactive from "../../assets/iconFaq/inactive/guarantee.svg";
import priceInactive from "../../assets/iconFaq/inactive/price.svg";
import sanitaryInactive from "../../assets/iconFaq/inactive/sanitary.svg";
import servicesInactive from "../../assets/iconFaq/inactive/services.svg";
import sponsorshipInactive from "../../assets/iconFaq/inactive/sponsorship.svg";
import valuesInactive from "../../assets/iconFaq/inactive/values.svg";

export const categories = [
  {
    title: "services",
    label: "NOS SERVICES",
    active: services,
    inactive: servicesInactive,
  },
  {
    title: "price",
    label: "PRIX DE NOS SERVICES",
    active: price,
    inactive: priceInactive,
  },
  {
    title: "guarantee",
    label: "LA GARANTIE",
    active: guarantee,
    inactive: guaranteeInactive,
  },
  {
    title: "values",
    label: "NOS VALEURS: ÉCOLOGIQUE, HUMAINES, TRANSPARENCE",
    active: values,
    inactive: valuesInactive,
  },
  {
    title: "sponsorship",
    label: "PROGRAMME DE PARRAINAGE",
    active: sponsorship,
    inactive: sponsorshipInactive,
  },
  {
    title: "data",
    label: "LES DONNÉES PERSONNELLES",
    active: data,
    inactive: dataInactive,
  },
  {
    title: "sanitary",
    label: "MESURES SANITAIRES",
    active: sanitary,
    inactive: sanitaryInactive,
  },
];

export const faqWording = [
  {
    title: "Comment sont organisés les séminaires personnalisés ?",
    category: "services",
    content: (
      <p>
        Organiser un séminaire avec Meltrip est simple et efficace. Tout
        d'abord, la personne souhaitant organiser un séminaire pour son
        entreprise remplit un questionnaire rapide de moins de 10 minutes pour
        définir ses besoins. Ensuite, un quiz de personnalité est envoyé à cette
        personne pour que tous les participants puissent le réaliser. Cela
        permet de mieux cerner les besoins et les attentes de chaque
        participant. Une fois la demande de séminaire soumise, un collaborateur
        de Meltrip dédié à cette demande recontacte la personne sous 72 heures
        pour définir précisément sa demande et la confirmer. Les collaborateurs
        de Meltrip préparent alors trois propositions de séminaire adaptées aux
        besoins et aux objectifs définis. La personne souhaitant organiser le
        séminaire n'a ainsi plus qu'à choisir celle qui lui convient le mieux.
        Enfin, une fois le choix fait, il suffit de procéder au règlement de
        l'acompte pour recevoir tous les éléments nécessaires pour réaliser le
        séminaire.
      </p>
    ),
  },
  {
    title: "Comment évaluer le budget nécessaire pour un séminaire ?",
    category: "services",
    content: (
      <div>
        <p>
          L'évaluation du budget nécessaire pour un séminaire est un élément clé
          pour assurer le succès de l'événement.
        </p>
        <p>
          Il est important de définir clairement les objectifs du séminaire afin
          de déterminer les coûts liés aux activités, au transport et à
          l'hébergement. Il est également important de tenir compte des coûts
          liés à la nourriture et à la boisson, ainsi qu'à la location de salles
          de réunion ou d'autres espaces nécessaires pour le séminaire. Si vous
          décidez de passer par une agence événementielle comme Meltrip, il faut
          aussi prévoir la commission de ce type d’organisateur qui est au
          alentour de 25 %. À titre informatif, la commission que Meltrip prend
          est de 20 % sur l’organisation de séminaire personnalisé et de 15 %
          sur les séminaires prêts à l’emploi.
        </p>
      </div>
    ),
  },
  {
    title: "Quels sont les différents types de séminaire ?",
    category: "services",
    content: (
      <p>
        Meltrip propose une large gamme de séminaires pour répondre aux besoins
        de nos clients. Nous organisons des séminaires d'intégration pour aider
        les nouveaux employés à s'intégrer rapidement dans l'entreprise et à
        comprendre les valeurs et les normes de l'entreprise. Nous organisons
        également des séminaires de formation pour améliorer les compétences
        professionnelles des employés et les préparer à des tâches spécifiques.
        Pour les employés en management, nous proposons des séminaires pour
        développer les compétences de leadership et de gestion d'équipe. Nous
        organisons également des séminaires de vente et de commerce pour aider
        les employés à améliorer leurs compétences en matière de vente et de
        négociation. Enfin, nous proposons des séminaires de team building pour
        renforcer la cohésion d'équipe et la motivation des employés.
      </p>
    ),
  },
  {
    title: "Quel est le but d’un séminaire ?",
    category: "services",
    content: (
      <div>
        <p>
          Le but d'un séminaire est de rassembler un groupe de personnes,
          généralement des employés ou des membres d'une organisation, pour une
          période de temps déterminée afin de les former, de les sensibiliser,
          de les informer ou de les divertir.
        </p>
        <p>
          Les séminaires peuvent viser à améliorer les compétences
          professionnelles, à renforcer la communication au sein d'une équipe, à
          favoriser la résolution de problèmes ou à favoriser la mise en place
          de stratégies d'entreprise. Les séminaires peuvent également être
          utilisés pour renforcer la cohésion d'équipe ou pour favoriser la
          motivation et la satisfaction au travail. Les séminaires peuvent être
          organisés en interne ou en externe. En résumé, le but d'un séminaire
          est de développer les compétences, les connaissances et les
          comportements des participants pour améliorer les performances de
          l'entreprise ou d’une organisation.
        </p>
      </div>
    ),
  },
  {
    title: "Quelle est la durée idéale d’un séminaire ?",
    category: "services",
    content: (
      <div>
        <p>
          La durée idéale d'un séminaire dépend des objectifs et des besoins
          spécifiques de chaque groupe ou entreprise.
        </p>
        <p>
          Certaines formations ou séminaires de team building peuvent être
          réalisés en une journée alors que d'autres peuvent nécessiter
          plusieurs jours ou même une semaine pour obtenir les résultats
          escomptés.
        </p>
        <p>
          Les séminaires de formation professionnelle peuvent prendre plusieurs
          jours, voire plusieurs semaines pour couvrir tous les sujets et
          permettre une mise en pratique. Les séminaires de team building
          peuvent également prendre plusieurs jours, cela permet de créer une
          véritable dynamique de groupe et favorise la cohésion d'équipe. Il est
          important de considérer la durée du séminaire en fonction des
          objectifs et des besoins spécifiques de votre groupe pour s'assurer
          que la durée du séminaire est suffisante pour atteindre les résultats
          escomptés. Si vous hésitez encore, n’hésitez pas à nous contacter par
          mail sur l’adresse mail suivante:{" "}
          <a href="mailto:contact@melteip.fr" className="underline">
            contact@melteip.fr
          </a>{" "}
          ou par téléphone au numéro suivant:{" "}
          <a href="tel:06.32.07.10.64" className="underline">
            06.32.07.10.64
          </a>
          . Un de nos collaborateurs se fera une joie de vous aider pour
          élaborer un plan de séminaire adapté à vos besoins.
        </p>
      </div>
    ),
  },
  {
    title: "Comment choisir le séminaire adapté à vos objectifs ?",
    category: "services",
    content: (
      <div>
        <p>
          Choisir le séminaire adapté à ses objectifs est une étape importante
          pour obtenir les résultats escomptés. Il est important de définir
          clairement les objectifs que vous souhaitez atteindre à travers le
          séminaire. Si vous voulez améliorer les compétences professionnelles
          de vos employés, un séminaire de formation pourrait être adapté. Si
          vous voulez renforcer la cohésion d'équipe, un séminaire de team
          building pourrait être une meilleure option. Il est également
          important de tenir compte de la taille de votre groupe et de leurs
          besoins spécifiques. Il est important de considérer le budget
          disponible pour le séminaire et de choisir une offre qui correspond à
          vos besoins et à vos objectifs tout en étant abordable. Enfin, il est
          important de considérer la durée du séminaire et les activités
          proposées pour s'assurer qu'il correspond à vos attentes.
        </p>
        <p>
          Pour ne pas vous tromper, nous vous recommandons de consulter un
          expert Meltrip par mail sur l’adresse mail suivante:{" "}
          <a href="mailto:contact@melteip.fr" className="underline">
            contact@melteip.fr
          </a>{" "}
          ou par téléphone au numéro suivant:{" "}
          <a href="tel:06.32.07.10.64" className="underline">
            06.32.07.10.64
          </a>
          . Un de nos collaborateurs se fera une joie de vous aider.
        </p>
      </div>
    ),
  },
  {
    title: "Comment ont été sélectionnés les partenaires ?",
    category: "services",
    content: (
      <div>
        <p>
          Meltrip sélectionne ses partenaires avec soin pour garantir que nous
          travaillons avec des entreprises qui partagent nos valeurs et nos
          normes élevées en matière de qualité, de service et de respect de la
          vie privée.
        </p>
        <p>
          Nous effectuons une analyse détaillée des entreprises avant de les
          sélectionner comme partenaires pour nous assurer qu'ils ont une bonne
          réputation en matière d'impact environnemental (ex: consommation
          d'énergie, émissions de gaz à effet de serre ou encore de bruit).
        </p>
        <p>
          Nous prenons également en compte leur accessibilité pour les personnes
          en situation de handicap, leur durabilité et leur qualité de service.
          Nous nous engageons à privilégier des partenaires qui partagent notre
          vision d'une entreprise responsable et respectueuse de l'environnement
          pour vous offrir une expérience de qualité.
        </p>
      </div>
    ),
  },
  {
    title:
      "Pourquoi choisir un séminaire personnalisé par rapport à un séminaire prêt à l’emploi ?",
    category: "services",
    content: (
      <div>
        <p>
          Il existe de nombreux avantages à choisir un séminaire personnalisé
          par rapport à un séminaire prêt à l'emploi.
        </p>
        <p>
          Tout d'abord, un séminaire personnalisé est adapté aux besoins et aux
          objectifs spécifiques de votre entreprise. Il peut être conçu pour
          répondre aux problèmes spécifiques de votre entreprise et pour aider à
          atteindre les objectifs que vous vous êtes fixés.
        </p>
        <p>
          Enfin, un séminaire personnalisé permet également de mieux adapter le
          contenu des séminaires à la personnalité des participants grâce au
          quiz de personnalité. En somme, c’est un moyen efficace pour atteindre
          les objectifs de votre entreprise et pour améliorer les performances
          de vos employés.
        </p>
        <p>
          Toutefois, les séminaires prêts à l’emploi peuvent être une solution
          intéressante si vous avez un budget plus serré ou moins de temps pour
          l’organiser.
        </p>
        <p>
          Si vous hésitez encore, un collaborateur de Meltrip sera ravi de vous
          aider. Vous pouvez nous contacter sur l’adresse mail suivante:{" "}
          <a href="mailto:contact@melteip.fr" className="underline">
            contact@melteip.fr
          </a>{" "}
          ou par téléphone au numéro suivant:{" "}
          <a href="tel:06.32.07.10.64" className="underline">
            06.32.07.10.64
          </a>
        </p>
      </div>
    ),
  },
  {
    title: "Comment est calculé le prix des séminaires ?",
    category: "price",
    content: (
      <p>
        Le prix d'un séminaire Meltrip est calculé en prenant en compte
        plusieurs facteurs tels que les coûts des activités, des transports et
        des logements ainsi que la commission que nous prenons. Nous travaillons
        avec des partenaires sélectionnés avec soin pour offrir des activités de
        qualité, des transports confortables et des logements adaptés à vos
        besoins. Nous mettons également un point d'honneur à proposer des tarifs
        abordables pour nos clients. Nous comprenons que le budget est un
        facteur important pour nos clients, c'est pourquoi nous faisons tout
        notre possible pour offrir des séminaires à des prix compétitifs tout en
        garantissant une qualité de service irréprochable. Nous sommes
        convaincus que notre offre de qualité est un excellent rapport
        qualité-prix.
      </p>
    ),
  },
  {
    title:
      "Quelle est la différence de prix entre un séminaire personnalisé et un séminaire prêt à l’emploi ?",
    category: "price",
    content: (
      <div>
        <p>
          Meltrip propose deux services: l’organisation de séminaire
          ultra-personnalisé en fonction de votre besoin et de la personnalité
          des participants, mais aussi des séminaires prêts à l’emploi. La
          différence de prix s’explique dans la commission que Meltrip prend
          pour ces deux services. Cette différence s’explique par la quantité de
          travail fourni par les collaborateurs Meltrip. Ainsi, un séminaire
          personnalisé coûtera 5 % plus cher qu’un séminaire prêt à l’emploi.
        </p>

        <p>
          Si vous hésitez encore sur les bénéfices apportés par ces deux
          solutions, n’hésitez pas à nous contacter par mail sur l’adresse mail
          suivante:{" "}
          <a href="mailto:contact@melteip.fr" className="underline">
            contact@melteip.fr
          </a>{" "}
          ou par téléphone au numéro suivant:{" "}
          <a href="tel:06.32.07.10.64" className="underline">
            06.32.07.10.64
          </a>
          . Un de nos collaborateurs se fera une joie de vous aider.
        </p>
      </div>
    ),
  },
  {
    title: "Les séminaires disposent-ils d’une assurance ?",
    category: "guarantee",
    content: (
      <div>
        <p>
          Nous comprenons qu'il est important pour nos clients de se sentir en
          sécurité lorsqu'ils participent à nos séminaires. C'est pourquoi nous
          tenons à vous informer que, pour l'instant, nous ne proposons pas de
          garantie pour les événements que nous organisons.
        </p>
        <p>
          Cependant, nous sommes conscients de l'importance de cette question et
          nous travaillons actuellement sur des offres d'assurances pour couvrir
          les risques liés aux séminaires.
        </p>
        <p>
          Nous sommes engagés, dès la naissance de Meltrip, à vous offrir les
          meilleures solutions pour garantir votre satisfaction et votre
          sécurité lors de votre participation à nos séminaires. Nous vous
          tiendrons informés des développements futurs et nous espérons pouvoir
          vous proposer des options d'assurance dans un avenir proche.
        </p>
      </div>
    ),
  },
  {
    title: "Que faire si j’ai un souci pendant mon séminaire ?",
    category: "guarantee",
    content: (
      <div>
        <p>
          Nous comprenons qu'il peut y avoir des imprévus lors d'un séminaire et
          nous voulons nous assurer que tous les participants se sentent en
          sécurité et pris en charge en cas de besoin. C'est pourquoi nous avons
          mis en place un système de support pour gérer les soucis éventuels.
        </p>
        <p>
          Chaque séminaire a un interlocuteur Meltrip dédié qui est assigné à
          l'organisation du séminaire et qui est disponible pour répondre à
          toutes les demandes de renseignements et de support. Les participants
          peuvent contacter cet interlocuteur par mail ou message pour toutes
          les demandes de soutien. En cas d'urgence non vitale, tous les
          participants sont autorisés à contacter cet interlocuteur par
          téléphone. Nous nous engageons à répondre à toutes les demandes dans
          un délai d'une heure pendant les heures de bureau et dans un délai de
          4 heures durant la nuit. Nous sommes engagés à vous offrir le meilleur
          service possible et nous nous efforçons de garantir votre satisfaction
          et votre sécurité lors de votre participation à nos séminaires.
        </p>
      </div>
    ),
  },
  {
    title:
      "Comment sont déterminées la personnalité de chaque participant à un séminaire ?",
    category: "values",
    content: (
      <div>
        <p>
          Chez Meltrip, nous croyons que pour offrir une expérience de séminaire
          personnalisée et efficace, il est important de comprendre la
          personnalité de chaque participant. C'est pourquoi nous avons
          développé un quiz de personnalité ludique pour évaluer les traits de
          personnalité de chaque participant. Ce quiz a été conçu en
          collaboration avec des psychologues du travail et est basé sur des
          études scientifiques rigoureuses. Il permet de déterminer les forces
          et les défis de chaque participant, ainsi que de mieux comprendre leur
          mode de fonctionnement et leurs besoins en matière de développement
          personnel. Nous utilisons ces informations pour adapter notre approche
          pédagogique et les activités de groupe pour offrir une expérience de
          séminaire plus personnalisée et efficace pour chaque participant. Nous
          croyons que cette approche permet de maximiser les résultats pour
          chacun et de garantir une expérience de séminaire plus productive et
          enrichissante pour tous.
        </p>
        <ul>
          <li className="list-disc ml-10 mt-10">
            {" "}
            Quelle est la démarche RSE de Meltrip ?{" "}
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Quand sera lancé le programme de parrainage de Meltrip ?",
    category: "sponsorship",
    content: (
      <div>
        <p>
          Nous sommes heureux de vous annoncer que notre programme de parrainage
          sera lancé en janvier 2024 pour célébrer le premier trimestre de
          Meltrip.
        </p>
        <p>
          Ce programme permettra à nos clients actuels de bénéficier de
          réductions sur leurs prochains séminaires organisés avec Meltrip tout
          en aidant leurs amis ou collègues à organiser leur propre séminaire.
        </p>
        <p>
          Nous avons travaillé dur pour mettre en place ce programme et nous
          sommes impatients de voir les résultats qu'il apportera à nos clients.
        </p>
        <p>
          Nous espérons que vous serez aussi enthousiastes que nous à l'idée de
          ce programme et nous nous réjouissons de voir les résultats qu'il
          apportera.
        </p>
      </div>
    ),
  },
  {
    title: "Qu’est-ce que le programme de parrainage ?",
    category: "sponsorship",
    content: (
      <div>
        <p>
          Notre programme de parrainage sera un moyen pour nos clients de
          bénéficier de réductions sur leurs prochains séminaires organisés avec
          Meltrip tout en aidant leurs amis ou collègues à organiser leur propre
          séminaire.
        </p>
        <p>
          En parrainant, nos clients actuels peuvent bénéficier d'une réduction
          de 250 € TTC sur leur prochain événement organisé avec nous, tandis
          que leurs filleuls bénéficient eux-mêmes d'une réduction de 100 € TTC.
        </p>
        <p>
          Ce n'est pas tout, notre programme de parrainage dispose de paliers. À
          partir de 6 filleuls parrainés, le client parrain recevra 500 € TTC
          par nouveau filleul parrainé pour organiser son prochain séminaire et
          dès qu'il atteint 10 filleuls, il recevra 750 € TTC par nouveau
          filleul parrainé.
        </p>
        <p>
          En somme, notre programme de parrainage est un moyen pour nos clients
          de gagner de l'argent tout en aidant leurs amis ou collègues à
          organiser leur propre séminaire.
        </p>
      </div>
    ),
  },
  {
    title: "Qui peut participer au programme de parrainage ?",
    category: "sponsorship",
    content: (
      <div>
        <p>
          Notre programme de parrainage est conçu pour récompenser et remercier
          nos fidèles clients qui ont déjà organisé un séminaire avec Meltrip.
        </p>
        <p>
          Seuls les clients qui ont déjà organisé un séminaire avec nous sont
          éligibles à participer à ce programme.
        </p>
      </div>
    ),
  },
  {
    title:
      "Existe-t-il des restrictions géographiques relatives à la participation au programme ?",
    category: "sponsorship",
    content: (
      <div>
        <p>
          Notre programme de parrainage est actuellement limité à la France, car
          nous ne proposons pas encore de séminaires à l'étranger. Cependant,
          nous sommes conscients de l'intérêt pour des séminaires à
          l'international et nous travaillons actuellement sur cette thématique
          pour pouvoir proposer des séminaires à l'étranger à l'avenir. Nous
          voulons nous assurer que nous pouvons offrir les meilleures options
          pour nos clients avant de les proposer à l'international. Nous vous
          tiendrons informés des développements futurs et espérons pouvoir
          étendre notre programme de parrainage à l'étranger à l'avenir. Nous
          vous remercions pour votre patience et de votre confiance dans
          Meltrip.
        </p>
      </div>
    ),
  },
  {
    title: "Quel est le délai de réception d’une récompense de parrainage ?",
    category: "sponsorship",
    content: (
      <div>
        <p>
          Notre programme de parrainage offre des récompenses pour les parrains
          et les filleuls en les récompensant pour leur participation à notre
          programme.
        </p>
        <p>
          Cependant, il est important de noter que les récompenses ne seront
          remises que lorsque le filleul aura payé l'intégralité de son premier
          séminaire. Cela est nécessaire pour garantir que le filleul est
          effectivement engagé dans la participation au séminaire et pour éviter
          les abus de ce programme de parrainage. Dès que le filleul aura payé
          l'intégralité de son premier séminaire, le parrain et le filleul
          recevront leur récompense définitive. Nous nous excusons pour tout
          désagrément causé par ce délai et nous vous remercions pour votre
          compréhension et de votre participation à notre programme de
          parrainage.
        </p>
      </div>
    ),
  },
  {
    title: "Comment créer un compte ?",
    category: "data",
    content: (
      <div>
        <p>Pour créer un compte sur le site de Meltrip, c'est très simple !</p>
        <p>Il y a plusieurs options disponibles pour vous inscrire.</p>
        <p>
          La première option est de cliquer directement sur le bouton
          "inscription" situé en haut de toutes les pages du site. Cela vous
          dirigera vers une page où vous pourrez remplir les informations
          requises pour créer votre compte.
        </p>
        <p>
          L'autre option est de faire une demande de séminaire. Cela vous
          permettra de créer un compte lors de votre demande de séminaire et de
          suivre son avancement.{" "}
        </p>
      </div>
    ),
  },
  {
    title:
      "Comment supprimer son compte ou supprimer mes données personnelles ?",
    category: "data",
    content: (
      <div>
        <p>
          Il est possible de supprimer votre compte sur le site de Meltrip à
          tout moment. Il existe deux options pour supprimer votre compte : la
          première est de se rendre sur votre espace personnel et de suivre les
          étapes pour supprimer votre compte. La deuxième option est de faire
          une demande par email à l'adresse contact@meltrip.fr. Nous vous
          demanderons de fournir des informations pour vérifier votre identité
          et vous pourrez ensuite supprimer votre compte. S'il vous plaît noter
          que lorsque vous supprimez votre compte, toutes vos informations
          seront également supprimées de nos systèmes, il sera donc impossible
          de récupérer ces informations à nouveau. Nous vous remercions pour
          votre confiance en Meltrip et nous nous excusons pour tout
          inconvénient causé par la suppression de votre compte.
        </p>
      </div>
    ),
  },
  {
    title: "Quelles sont les données personnelles récoltées par Meltrip ?",
    category: "data",
    content: (
      <div>
        <p>
          Meltrip recueille des données nécessaires à l'organisation des
          séminaires.
        </p>
        <p>
          Ces données incluent les informations de contact du demandeur, comme
          le nom, le prénom, la fonction et l'entreprise, ainsi que les
          informations de contact des participants, comme le nom, le prénom et
          la fonction.
        </p>
        <p>
          Pour le paiement du séminaire, nous recueillons également les
          informations de paiement. Meltrip recueille également des données de
          navigation et d'utilisation lorsque les utilisateurs visitent notre
          site web ou utilisent nos services. Ces informations nous permettent
          de comprendre comment les utilisateurs interagissent avec notre site
          web et nos services, ce qui nous permet d'améliorer l'expérience
          utilisateur.
        </p>
        <p>
          Nous garantissons que ces données ne seront utilisées qu'à des fins
          d'organisation de séminaires et seront traitées de manière
          confidentielle.
        </p>
      </div>
    ),
  },
  {
    title: "Comment mes données personnelles sont-elles protégées ?",
    category: "data",
    content: (
      <div>
        <p>
          Meltrip prend la protection des données personnelles très au sérieux.
          Nous avons mis en place des mesures de sécurité pour protéger les
          données personnelles que nous recueillons contre toute perte,
          utilisation abusive, accès non autorisé, divulgation, altération ou
          destruction. Ces mesures incluent des contrôles d'accès physiques, des
          mécanismes de chiffrement, des politiques de mot de passe et des
          audits réguliers de nos systèmes de sécurité. Nous limitons également
          l'accès aux données personnelles uniquement aux employés qui en ont
          besoin pour remplir leur travail et ils sont tenus de respecter une
          confidentialité. Nous nous conformons aux réglementations en vigueur
          en matière de protection des données et mettons en place des
          procédures pour traiter les demandes d'accès, de rectification ou de
          suppression des données personnelles. Nous vous garantissons que vos
          données seront traitées de manière confidentielle et en toute
          sécurité.
        </p>
      </div>
    ),
  },
  {
    title:
      "Meltrip recourt-elle à des sous-traitants dans le traitement des données personnelles ?",
    category: "data",
    content: (
      <div>
        <p>
          Meltrip ne fait pas appel à des sous-traitants pour le traitement des
          données personnelles. Nous avons une équipe dédiée en interne qui
          s'occupe de la collecte, de la gestion et de la protection des données
          personnelles.
        </p>
        <p>
          Nous croyons que cela est la meilleure façon de garantir la
          confidentialité et la sécurité de vos données.
        </p>
        <p>
          Les collaborateurs de Meltrip qui travaillent avec vos données
          personnelles sont formés sur les meilleures pratiques en matière de
          protection des données et sont tenus de respecter des politiques
          strictes de confidentialité. Nous nous engageons à protéger vos
          données personnelles et à respecter vos droits en matière de
          protection des données. Vous pouvez donc être assuré que vos données
          seront traitées en toute sécurité et en toute confidentialité par nos
          collaborateurs.
        </p>
      </div>
    ),
  },
  {
    title: "Quelles sont les mesures sanitaires prises par Meltrip ?",
    category: "sanitary",
    content: (
      <div>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32.
        </p>
      </div>
    ),
  },
  {
    title: "Quelles sont les conditions d’annulation en période de Covid-19 ?",
    category: "sanitary",
    content: (
      <div>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </p>
      </div>
    ),
  },
];
