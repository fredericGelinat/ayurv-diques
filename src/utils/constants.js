import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'Galerie.2.0',
    text:
      " A travers un parcours sensible, rassemblant mon travail de plusieurs centaines d'oeuvres aussi bien en peintures, qu’en aquarelles et en vidéos, ce site fonctionne comme une galerie et vous invite à découvrir les délices du monde numérique, de la création artistique, et des nouveaux médias",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'Vision',
    text:
      "Rendre visible l’invisible en donnant à chaque matière leur identité et en extraire l’essentiel. L’univers digital est, dans mon processus de création, un langage familier qui me propose de contraster, d’incruster, de filigraner tout en jonglant avec une palette aux millions de couleurs! "
,
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'Création',
    text:
      " Acrylique et huile sur  papier Canson, pastel écrasée sur papier kraft, encre sur buvard, papier bulle, tissus velours ou cuir conjugués avec les circuits imprimés, puces électroniques et diode décortiqués de mon premier PC amstrad, je zoome dans «l’échantillon de matière», afin d’éxacerber son identité.",
  },
]

export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`
