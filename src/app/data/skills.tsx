import { Skill } from "@/app/types";
import { FaReact, FaPython, FaJs, FaJava } from "react-icons/fa";
import {
  SiKotlin,
  SiSwift,
  SiMongodb,
  SiFirebase,
  SiMysql,
  SiNextdotjs,
  SiSpringboot,
  SiFlask,
} from "react-icons/si";

export const skillsData: Skill[] = [
  { name: "JavaScript", icon: <FaJs />, level: 90 },
  { name: "React", icon: <FaReact />, level: 85 },
  { name: "Python", icon: <FaPython />, level: 80 },
  { name: "Java", icon: <FaJava />, level: 75 },
  { name: "OOP", icon: <FaJava />, level: 85 },
  { name: "Algorithms", icon: <FaJs />, level: 70 },
  { name: "Kotlin", icon: <SiKotlin />, level: 65 },
  { name: "Swift", icon: <SiSwift />, level: 60 },
  { name: "MongoDB", icon: <SiMongodb />, level: 80 },
  { name: "Firebase", icon: <SiFirebase />, level: 75 },
  { name: "MySQL", icon: <SiMysql />, level: 70 },
  { name: "Next.js", icon: <SiNextdotjs />, level: 70 },
  { name: "Flask", icon: <SiFlask />, level: 30 },
  { name: "SpringBoot", icon: <SiSpringboot />, level: 50 },
  { name: "Composer for Kotlin", icon: <SiKotlin />, level: 50 },
];
