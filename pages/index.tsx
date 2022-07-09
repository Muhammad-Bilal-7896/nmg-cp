import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { useRef } from "react";
import Business from "../components/Business";
import { useAnimation } from "framer-motion";

const Home: NextPage = () => {
  const containerRef = useRef(null);

  return (
    <div>
      <Head>
        <title>NMG Official Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
        }}
        watch={[]}
        containerRef={containerRef}
      >
        <main data-scroll-container ref={containerRef}>
          <Navbar />
          <div data-scroll-section>
            <Hero />
            <Business />
          </div>
        </main>
      </LocomotiveScrollProvider>
    </div>
  );
};

export default Home;
