import Image from "next/image";
import Text from "@/app/Pag/Text/page"
import React from 'react'
import Skill from "@/app/Pag/Skill/page"
//import List from "@/app/Pag/List/page"
import Skile from "@/app/Pag/Skile/page"
import Kalimat from "@/app/Pag/Kalimat/page"
import Khadamat from "@/app/Pag/Khadamat/page"
//import Projuct from "@/app/Projuct/page";
//import { Contact } from "@/app/Contact/page"; 
import Proj from "@/components/Proj/page"
import { Alfa_Slab_One, Averia_Serif_Libre, Merriweather } from 'next/font/google';
import Contact from "./contact/page";
//import Projuct from "@/app/Projuct/page";


const alfaSlab = Alfa_Slab_One({ weight: '400', subsets: ['latin'] });
const averiaSerif = Averia_Serif_Libre({ weight: ['300', '400', '700'], subsets: ['latin'] });
const merriweather = Merriweather({ weight: ['300', '400', '700', '900'], subsets: ['latin'] });






export default function Home() {
  return (
  <main>
<Text/>
<Skill />
<Skile />
<Kalimat />
<Khadamat />
<Contact />
<Proj />



  </main>
  );
}
