"use client";

import Image from "next/image";
import photo from "/public/images/photo.jpg";
import Orb from "./Orb";
import { Typewriter } from "react-simple-typewriter";

// import { FaReact } from "react-icons/fa";
// import { RiNextjsFill } from "react-icons/ri";
// import { SiTypescript } from "react-icons/si";
// import { FaHtml5 } from "react-icons/fa";
// import { FaCss3 } from "react-icons/fa";
// import { SiTailwindcss } from "react-icons/si";
// import { VscGithub } from "react-icons/vsc";
// import { FaGitAlt } from "react-icons/fa";
// import { TbBrandRedux } from "react-icons/tb";

const AboutPage = () => {
  //   const icons = [<FaReact />, <RiNextjsFill />];
  return (
    <section className="flex flex-col gap-4 items-center px-10">
      <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white from-[-20px] to-red-700 w-[160px]">
        About Me
      </h2>
      <div className="flex">
        <div className="w-[300px] h-[300px] relative">
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
        <p className="text-[20px]">
          <Typewriter
            words={[
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora saepe cumque doloremque placeat temporibus non, ex possimus ducimus rem inventore nesciunt, doloribus natus! Assumenda hic reiciendis minima, mollitia rerum commodi? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab atque sit aspernatur. Temporibus quasi odio excepturi saepe, veniam molestiae maiores numquam maxime voluptatum eos hic provident earum quo minima vero! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti ab obcaecati sit asperiores autem fugit corrupti non eius, nesciunt fugiat. Doloremque ab nisi ducimus porro rem exercitationem delectus assumenda. Labore.",
            ]}
            typeSpeed={6}
          />
        </p>
      </div>
      <ul>
        {/* {icons.map((icon, index) => {
          return <li key={index}>{icon}</li>;
        })} */}
      </ul>
    </section>
  );
};

export default AboutPage;
