import type { IconType } from "react-icons";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTailwindcss,
  SiDaisyui,
  SiFirebase,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiC,
  SiCplusplus,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

interface SkillItem {
  name: string;
  icon: IconType;
  color: string;
}

interface SkillCategory {
  label: string;
  skills: SkillItem[];
}

const CATEGORIES: SkillCategory[] = [
  {
    label: "Frontend",
    skills: [
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "DaisyUI", icon: SiDaisyui, color: "#1AD1A5" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#FFFFFF" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    ],
  },
  {
    label: "Databases",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "SQL", icon: SiMysql, color: "#4479A1" },
    ],
  },
  {
    label: "Languages",
    skills: [
      { name: "Java", icon: FaJava, color: "#EA2D2E" },
      { name: "C", icon: SiC, color: "#A8B9CC" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-navy text-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
          02 — Skills
        </p>
        <h2 className="font-display text-3xl font-extrabold sm:text-4xl">My Skills</h2>

        <div className="mt-14 space-y-12">
          {CATEGORIES.map((category) => (
            <div key={category.label}>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
                {category.label}
              </h3>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="group flex flex-col items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-slate-300 hover:bg-white/10"
                    >
                      <Icon
                        className="text-4xl transition group-hover:scale-110"
                        style={{ color: skill.color }}
                      />
                      <span className="text-sm font-semibold text-white">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}