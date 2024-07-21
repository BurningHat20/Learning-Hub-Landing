import React from "react";
import { testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import { FaReact, FaPython, FaJs, FaNodeJs, FaAws } from "react-icons/fa";
import { SiTensorflow, SiScikitlearn, SiWireshark } from "react-icons/si";

const technologies = [
  { id: 1, name: "React", icon: FaReact, color: "#61DAFB" },
  { id: 2, name: "Python", icon: FaPython, color: "#3776AB" },
  { id: 3, name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { id: 4, name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { id: 5, name: "AWS", icon: FaAws, color: "#FF9900" },
  { id: 6, name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
  { id: 7, name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
  { id: 8, name: "Wireshark", icon: SiWireshark, color: "#1679A7" },
];

const Clients = () => {
  return (
    <section id="testimonials" className="py-20 ">
      <h1 className="heading text-center mb-10">
        What Our <span className="text-purple">Students Say</span>
      </h1>

      <div className="container mx-auto px-4">
        <div className="h-[40vh] md:h-[30rem] rounded-md flex flex-col items-center justify-center relative overflow-hidden mb-16">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        <h2 className="heading text-center mb-10">
          Master <span className="text-purple">Modern Technologies</span>
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-8">
          {technologies.map((tech) => (
            <div
              key={tech.id}
              className="flex flex-col items-center p-4  rounded-lg shadow-md transition-transform hover:scale-105"
            >
              <tech.icon
                className="w-16 h-16 mb-2"
                style={{ color: tech.color }}
              />
              <span className="text-lg font-semibold">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
