"use client";

import { Typography, Button } from "@material-tailwind/react";
import {
  ChartBarIcon,
  PuzzlePieceIcon,
  CursorArrowRaysIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import { ResumeItem } from "@/components";

const RESUME_ITEMS = [
  {
    icon: ChartBarIcon,
    children: "Diploma in Information Communication Technology ",
  },
  {
    icon: PuzzlePieceIcon,
    children: "Certified Web Developer ",
  },
  {
    icon: CursorArrowRaysIcon,
    children: "Frontend Framework Proficiency Certification",
  },
];

export function Resume() {
  return (
    <section id="resume" className="px-8 py-24 bg-[#FBEBE2]">
      <div className="container mx-auto w-full flex flex-col items-center text-center lg:text-left gap-16 lg:grid lg:grid-cols-2 lg:items-start">
        {/* Text Content */}
        <div className="w-full flex flex-col items-center lg:items-start">
          <Typography variant="h2" color="blue-gray">
            My Resume
          </Typography>
          <Typography className="mb-4 mt-3 w-full sm:w-10/12 font-normal !text-gray-500">
            I’m a passionate ICT student with a strong interest in technology and software development.
            I’ve worked on several personal projects, including web development, where
            I have honed my skills in coding, problem-solving, and creating user-friendly solutions.
            Always eager to learn and grow in the tech field.
          </Typography>
          <Button variant="text" color="gray" className="flex items-center gap-2">
            <a
              href="https://ke.linkedin.com/in/wanjiku-sofia-b87852345"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Download CV
              <ArrowRightIcon strokeWidth={3} className="h-3.5 w-3.5 text-gray-900" />
            </a>
          </Button>
        </div>

        {/* Resume Items */}
        <div className="w-full flex flex-col items-center lg:items-start gap-y-6 lg:ml-auto lg:pr-12 xl:pr-32">
          {RESUME_ITEMS.map((props, idx) => (
            <ResumeItem key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;
