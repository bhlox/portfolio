import Head from "next/head";
import Image from "next/image";
import AboutMe from "../components/AboutMe";
import HeroBanner from "../components/HeroBanner";
import Projects from "../components/Projects";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hello you!</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <HeroBanner />
      <Projects />
      <AboutMe />
    </>
  );
}
