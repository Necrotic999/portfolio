"use client";

import Image from "next/image";
import photo from "/public/images/photo.jpg";
import Orb from "./Orb";
import { Typewriter } from "react-simple-typewriter";

import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { FaGitAlt } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";

const AboutPage = () => {
  const icons = [
    <FaReact key={1} className="w-[60px] h-[60px] fill-[#de0404]" />,
    <RiNextjsFill key={2} className="w-[60px] h-[60px] fill-[#de0404]" />,
    <SiTypescript key={3} className="w-[60px] h-[60px] fill-[#de0404]" />,
    <FaHtml5 key={4} className="w-[60px] h-[60px] fill-[#de0404]" />,
    <FaCss3 key={5} className="w-[60px] h-[60px] fill-[#de0404]" />,
    <SiTailwindcss key={6} className="w-[60px] h-[60px] fill-[#de0404]" />,
    <VscGithub key={7} className="w-[60px] h-[60px] fill-[#de0404]" />,
    <FaGitAlt key={8} className="w-[60px] h-[60px] fill-[#de0404]" />,
    <TbBrandRedux key={9} className="w-[60px] h-[60px] stroke-[#de0404]" />,
  ];
  return (
    <section id="about" className="flex flex-col gap-4 items-center px-10">
      <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white from-[-50px] to-red-700 w-[200px] mb-2">
        About Me
      </h2>
      <div className="flex mb-2 items-center">
        <div className="w-[300px] h-[300px] relative mr-7">
          <Orb
            hoverIntensity={0.2}
            rotateOnHover={true}
            hue={0}
            forceHoverState={false}
          />
          <Image
            src={photo}
            alt="photo"
            width={230}
            height={230}
            className="rounded-full absolute top-[35px] left-[35px] -z-[2]"
          />
        </div>
        <p className="text-[20px] max-w-[900px]">
          <Typewriter
            words={[
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora saepe cumque doloremque placeat temporibus non, ex possimus ducimus rem inventore nesciunt, doloribus natus! Assumenda hic reiciendis minima, mollitia rerum commodi? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab atque sit aspernatur. Temporibus quasi odio excepturi saepe, veniam molestiae maiores numquam maxime voluptatum eos hic provident earum quo minima vero! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti ab obcaecati sit asperiores autem fugit corrupti non eius, nesciunt fugiat. Doloremque ab nisi ducimus porro rem exercitationem delectus assumenda. Labore.",
            ]}
            typeSpeed={6}
          />
        </p>
      </div>
      <ul className="flex gap-7 mb-14">
        {icons.map((icon) => {
          return (
            <li className="hover:mt-[-5px] duration-200" key={icon.key}>
              {icon}
            </li>
          );
        })}
      </ul>
      <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white from-[-50px] to-red-700 mb-2">
        Education
      </h3>
      <ul className="w-[2px] h-[600px] bg-red-700 flex flex-col items-center justify-around">
        <li className="w-4 h-4 bg-red-600 rounded-full">
          <div className="w-[500px] h-[160px] bg-red-900 mt-[-70px] ml-[60px] rounded-[40px] flex flex-col gap-4 p-6 bg-gradient-to-r from-red-900 to-[#111111]">
            <p className="text-2xl font-bold text-red-600">2012-2023</p>
            <p>Kyiv school Dialog</p>
          </div>
        </li>
        <li className="w-4 h-4 bg-red-600 rounded-full">
          <div className="w-[500px] h-[160px] bg-red-900 mt-[-70px] ml-[-550px] rounded-[40px] flex flex-col gap-4 p-6 bg-gradient-to-r from-red-900 to-[#111111]">
            <p className="text-2xl font-bold text-red-600">2023-2024</p>
            <p>GoIT courses - fullstack developer</p>
          </div>
        </li>
        <li className="w-4 h-4 bg-red-600 rounded-full">
          <div className="w-[500px] h-[160px] bg-red-900 mt-[-70px] ml-[60px] rounded-[40px] flex flex-col gap-4 p-6 bg-gradient-to-r from-red-900 to-[#111111]">
            <p className="text-2xl font-bold text-red-600">2024-NOW</p>
            <p>
              Kyiv National Taras Shevchenko University - Faculty of Information
              Technologies
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default AboutPage;
