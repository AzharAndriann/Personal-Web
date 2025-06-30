"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

// 🔹 Animasi Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// 🔹 Komponen Icon Teknologi
const TechIcon = ({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) => {
  return (
    <motion.div variants={itemVariants}>
      <img
        src={src}
        alt={alt}
        className="w-[40px] h-[40px] object-contain hover:scale-110 transition-transform"
      />
    </motion.div>
  );
};

// 🔹 Komponen utama Skills
export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const techStacks = [
    { src: "/js.png", alt: "JavaScript" },
    { src: "/ts.png", alt: "TypeScript" },
    { src: "/php.png", alt: "PHP" },
    { src: "/node.png", alt: "Node.js" },
    { src: "/react.png", alt: "React" },
    { src: "/next.png", alt: "Next.js" },
    { src: "/ex.png", alt: "Express.js" },
    { src: "/laravel.png", alt: "Laravel" },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 scroll-mt-20 bg-background"
    >
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            variants={itemVariants}
          >
            Skills
          </motion.h2>

          <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
            <motion.p
              className="text-xl text-muted-foreground max-w-md lg:text-start text-center"
              variants={itemVariants}
            >
              I usually use several programming languages and technologies such as JavaScript,
              TypeScript, PHP, Node.js, React.js, Next.js, Express.js, and Laravel.
            </motion.p>

            <motion.div
              className="grid grid-cols-4 gap-11"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.3,
                  },
                },
              }}
            >
              {techStacks.map((tech) => (
                <TechIcon key={tech.alt} src={tech.src} alt={tech.alt} />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
