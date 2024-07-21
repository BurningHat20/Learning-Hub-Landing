"use client";

import { IconType } from "react-icons";
import {
  FaGraduationCap,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaCode,
} from "react-icons/fa";
import { SiRedux, SiExpress, SiMongodb } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { IoLogoApple, IoLogoAndroid } from "react-icons/io";
import { MdDevices, MdApi } from "react-icons/md";

import { PinContainer } from "./ui/Pin";

interface Skill {
  name: string;
  icon: IconType;
}

interface Course {
  id: number;
  title: string;
  description: string;
  backgroundImg: string;
  skills: Skill[];
}

const featuredCourses: Course[] = [
  {
    id: 1,
    title: "Web Development Fundamentals",
    description:
      "Learn the basics of HTML, CSS, and JavaScript to build responsive websites.",
    backgroundImg:
      "https://i.ibb.co/k6DzKtx/Web-Developer-Course-You-Tube-Thumbnail.png",
    skills: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
      { name: "Responsive Design", icon: MdDevices },
    ],
  },
  {
    id: 2,
    title: "Advanced JavaScript and React",
    description:
      "Master JavaScript and learn to build dynamic web applications with React.",
    backgroundImg:
      "https://i.ibb.co/k6DzKtx/Web-Developer-Course-You-Tube-Thumbnail.png",
    skills: [
      { name: "JavaScript", icon: FaJs },
      { name: "React", icon: FaReact },
      { name: "Redux", icon: SiRedux },
      { name: "ES6+", icon: FaJs },
    ],
  },
  {
    id: 3,
    title: "Full-Stack Development with Node.js",
    description:
      "Learn to build complete web applications with Node.js, Express, and MongoDB.",
    backgroundImg:
      "https://i.ibb.co/k6DzKtx/Web-Developer-Course-You-Tube-Thumbnail.png",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "RESTful APIs", icon: MdApi },
    ],
  },
  {
    id: 4,
    title: "Mobile App Development with React Native",
    description:
      "Create cross-platform mobile apps for iOS and Android using React Native.",
    backgroundImg:
      "https://i.ibb.co/k6DzKtx/Web-Developer-Course-You-Tube-Thumbnail.png",
    skills: [
      { name: "React Native", icon: TbBrandReactNative },
      { name: "JavaScript", icon: FaJs },
      { name: "iOS", icon: IoLogoApple },
      { name: "Android", icon: IoLogoAndroid },
    ],
  },
];

const RecentProjects = () => {
  const getIconComponent = (IconComponent: IconType | undefined) => {
    return IconComponent ? (
      <IconComponent className="w-6 h-6 text-white" />
    ) : (
      <FaCode className="w-6 h-6 text-white" />
    );
  };

  return (
    <div id="courses" className="py-20">
      <h1 className="heading">
        Our <span className="text-purple">Featured Courses</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {featuredCourses.map((course) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={course.id}
          >
            <PinContainer
              title="thelearninghub.com"
              href={`/courses/${course.id}`}
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{
                    backgroundImage: `url('${course.backgroundImg}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {course.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {course.description}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {course.skills.map((skill, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      {getIconComponent(skill.icon)}
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Enroll Now
                  </p>
                  <FaGraduationCap className="ms-3 w-6 h-6" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
