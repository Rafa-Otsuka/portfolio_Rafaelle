import Image from "next/image";
import styles from "./page.module.css";
import { HomeSession } from "./sessions/home";
import { AboutSession } from "./sessions/about";
import { SkillsSession } from "./sessions/skills";
import { ProjectsSession } from "./sessions/projects";

export default function Home() {
  return (
    <>
      <HomeSession />
      <AboutSession />
      <SkillsSession/>
      <ProjectsSession/>
    </>
  );
}
