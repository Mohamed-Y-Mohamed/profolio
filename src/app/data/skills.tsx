import { Skill } from "@/app/types";
import { FaReact, FaPython, FaJs, FaJava } from "react-icons/fa";
import {
  SiKotlin,
  SiSwift,
  SiMongodb,
  SiFirebase,
  SiMysql,
} from "react-icons/si";

export const skillsData: Skill[] = [
  { name: "JavaScript", icon: <FaJs size={28} color="#f7df1e" />, level: 90 },
  { name: "React", icon: <FaReact size={28} color="#61dafb" />, level: 85 },
  { name: "Python", icon: <FaPython size={28} color="#3BC4C4" />, level: 80 },
  { name: "Java", icon: <FaJava size={28} color="#f89820" />, level: 75 },
  { name: "OOP", icon: <FaJava size={28} color="#f89820" />, level: 85 },
  { name: "Algorithms", icon: <FaJava size={28} color="#f89820" />, level: 70 },
  { name: "Kotlin", icon: <SiKotlin size={28} color="#7963fc" />, level: 65 },
  { name: "Swift", icon: <SiSwift size={28} color="#f05138" />, level: 60 },
  { name: "MongoDB", icon: <SiMongodb size={28} color="#4DB33D" />, level: 80 },
  {
    name: "Firebase",
    icon: <SiFirebase size={28} color="#FFCA28" />,
    level: 75,
  },
  { name: "MySQL", icon: <SiMysql size={28} color="#00758F" />, level: 70 },
];
