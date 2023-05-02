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
    title: "inactive",
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
