"use client";
import { motion, Variants } from "framer-motion";

export function About ()
{
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const contentVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="about"
      className="min-h-screen flex items-center justify-center pt-20 bg-muted/50"
      initial="hidden"
      whileInView="visible"
      viewport={ { once: false, amount: 0.3 } }
      variants={ containerVariants }
    >
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            variants={ titleVariants }
          >
            About Me
          </motion.h2>

          <motion.div
            variants={ {
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.3 // Delay content after title
                }
              }
            } }
          >
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto pb-5"
              variants={ contentVariants }
            >
              Hello! I am Azhar, a Fullstack Developer who has a great interest in the world of web development and current technology. I am comfortable working on both the frontend and backend sides, and am always eager to learn new things, both in soft and hard skill development.
            </motion.p>
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto pb-5"
              variants={ contentVariants }
            >
              I graduated from one of the State Vocational High Schools in Tangerang City. When I was in school, I had the chance to work on several projects using stacks such as Laravel, Node.js, React (TypeScript), Express.js, and several others. From there, I began to understand how to create applications that not only run, but can also be used by people.
            </motion.p>
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto pb-5"
              variants={ contentVariants }
            >
              The 6-month internship experience also taught me a lot, especially after I continued to be a freelancer at the same company. There I learned teamwork, project communication, and what it feels like to develop real software for real needs.
            </motion.p>
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              variants={ contentVariants }
            >
              I am always open to new opportunities and collaborations, especially in projects that are challenging and have a positive impact.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}