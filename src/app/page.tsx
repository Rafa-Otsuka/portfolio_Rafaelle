import Image from "next/image";
import styles from "./page.module.css";
import { HomeSession } from "./sessions/home";
import { AboutSession } from "./sessions/about";
import { SkillsSession } from "./sessions/skills";

export default function Home() {
  return (
    <>
      <HomeSession />
      <AboutSession />
      <SkillsSession/>
    </>
  );
}
