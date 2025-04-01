'use client';
import Image from "next/image";
import { useEffect, useState } from "react";
import Scene from "@/components/com/Scene";
import Projects from "@/components/com/Projects";
import Lenis from 'lenis'
export default function Nahara() {

  const [activeMenu, setActiveMenu] = useState(null)
  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main>
      <Projects setActiveMenu={setActiveMenu}/>
      <Scene activeMenu={activeMenu}/>
    </main>
  );
}