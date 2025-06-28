"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, Star } from "lucide-react";
import { motion, useAnimation, useInView, Variants } from "framer-motion";
import { useEffect, useRef } from "react";

export function Hero ()
{
  const controls = useAnimation();
  const ref = useRef( null );
  const isInView = useInView( ref, { amount: 0.3 } );

  useEffect( () =>
  {
    if ( isInView )
    {
      controls.start( "visible" );
    } else
    {
      controls.start( "hidden" );
    }
  }, [ isInView, controls ] );

  useEffect( () =>
  {
    const handleHashChange = () =>
    {
      if ( window.location.hash === "#home" )
      {
        controls.start( "visible" );
      }
    };

    window.addEventListener( "hashchange", handleHashChange );
    return () => window.removeEventListener( "hashchange", handleHashChange );
  }, [ controls ] );

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4
      }
    }
  };

  const socialVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.6
      }
    }
  };

  return (
    <motion.section
      ref={ ref }
      id="home"
      className="min-h-screen flex items-center justify-center pt-20"
      initial="hidden"
      animate={ controls }
      variants={ containerVariants }
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-start">
          <motion.div className="space-y-6" variants={ containerVariants }>
            {/* Title & Description */ }
            <motion.div className="space-y-4" variants={ containerVariants }>
              <motion.h1
                className="text-4xl md:text-6xl font-bold"
                variants={ itemVariants }
              >
                Hello, I'm <span className="text-primary">Azhar Dwi Andrian</span>
              </motion.h1>

              <motion.h2
                className="text-xl md:text-2xl text-muted-foreground"
                variants={ itemVariants }
              >
                Full Stack Developer
              </motion.h2>

              <motion.p
                className="text-lg text-muted-foreground max-w-lg"
                variants={ itemVariants }
              >

                Hello! I am Azhar, a Fullstack Developer who has a great interest in the world of web development and current technology.
              </motion.p>
            </motion.div>

            {/* Buttons */ }
            <motion.div
              className="flex flex-wrap gap-4"
              variants={ buttonVariants }
            >
              <motion.div variants={ itemVariants }>
                <Button asChild size="lg">
                  <a href="#portfolio">Lihat Portfolio</a>
                </Button>
              </motion.div>
              <motion.div variants={ itemVariants }>
                <Button asChild variant="outline" size="lg">
                  <a href="/cv-azhar.pdf" download className="flex">
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </a>
                </Button>

              </motion.div>
            </motion.div>

            {/* Social Icons */ }
            <motion.div
              className="flex space-x-4"
              variants={ socialVariants }
            >
              { [
                { icon: Github, label: "GitHub", href: "https://github.com/AzharAndriann" },
                { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/azhar-andrian/" },
                { icon: Mail, label: "Email", href: "mailto:azharandrianwork@gmail.com" },
              ].map( ( social, index ) => (
                <motion.div
                  key={ index }
                  variants={ itemVariants }
                  whileHover={ { scale: 1.1 } }
                  whileTap={ { scale: 0.9 } }
                >
                  <a
                    href={ social.href }
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={ social.label }
                  >
                    <Button variant="ghost" size="icon">
                      <social.icon className="h-5 w-5" />
                    </Button>
                  </a>
                </motion.div>
              ) ) }
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}