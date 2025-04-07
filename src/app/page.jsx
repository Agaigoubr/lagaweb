import Image from "next/image";
import Text from "@/app/Pag/Text/page"
import React from 'react'
import Skill from "@/app/Pag/Skill/page"
//import List from "@/app/Pag/List/page"
import Skile from "@/app/Pag/Skile/page"
import Kalimat from "@/app/Pag/Kalimat/page"
import Khadamat from "@/app/Pag/Khadamat/page"
<<<<<<< HEAD
//import Projuct from "@/app/Projuct/page";
import Contact from "./contact/page";
import Proj from "@/components/Proj/page"
=======
import Projuct from "@/app/Projuct/page";
import Contact from "./contact/page";

>>>>>>> 298d54213ecbe4cfcbff87677dd064be278d5a6c
import { Alfa_Slab_One, Averia_Serif_Libre, Merriweather } from 'next/font/google';

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
<<<<<<< HEAD
=======
<Projuct />
<Contact/>
>>>>>>> 298d54213ecbe4cfcbff87677dd064be278d5a6c

<Proj />
<Contact/>


  </main>
  );
}
