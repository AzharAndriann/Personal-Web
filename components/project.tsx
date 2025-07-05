"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CircleEllipsis, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import
{
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import
  {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

export function Project ()
{
  const [ visibleProjects, setVisibleProjects ] = useState( 3 );
  const [ animationKey, setAnimationKey ] = useState( 0 );
  const ref = useRef( null );
  const isInView = useInView( ref, { once: false, amount: 0.1 } );

  const projects = [
    {
      title: "Fiems Logistics",
      type: "Client Project",
      description: "A web platform to make it easier for logistics companies to manage and record operational activities efficiently.",
      image: "./fiemsLogistics.png",
      technologies: [ "React", "Node.js", "Express.js", "MySQL" ],
      liveUrl: null,
      githubUrl: null,
    },
    {
      title: "J4bSeeker",
      type: "Academic Project",
      description:
        "A job search platform that connects alumni of SMK Negeri 4 Tangerang with companies that need workers.",
      image: "/j4bseeker.png",
      technologies: [ "Bootstrap", "Laravel", "MySQL" ],
      liveUrl: null,
      githubUrl: "https://github.com/kafipratama11/bursa-kerja-khusus.git",
    },
    {
      title: "Inventory Web",
      type: "Academic Project",
      description: "A website designed to help a CV manage inventory data efficiently and in a structured manner.",
      image: "/inventory.png",
      technologies: [ "Tailwind", "Laravel", "MySQL" ],
      liveUrl: null,
      githubUrl: "https://github.com/AzharAndriann/inventaris-app.git",
    },
    {
      title: "The Best Food Delivered",
      type: "Personal Project",
      description: "A landing page designed to make it easier for customers to view menus and place delivery orders at fast food stores.",
      image: "/theBestFood.png",
      technologies: [ "React", "Tailwind" ],
      liveUrl: "https://thebestfood.vercel.app/",
      githubUrl: "https://github.com/AzharAndriann/TheBestEats.git",
    },
    {
      title: "Trigonometri",
      type: "Academic Project",
      description: "An interactive website for calculating and visually displaying graphs of sine functions.",
      image: "/trigonometri.png",
      technologies: [ "Tailwind", "JavaScript" ],
      liveUrl: "https://grafik-sinus.vercel.app/",
      githubUrl: "https://github.com/AzharAndriann/trigonometri.git",
    },
    {
      title: "Notes App",
      type: "Personal Project",
      description: "A website for storing and managing digital diaries.",
      image: "/noteApp.png",
      technologies: [ "React", "Tailwind" ],
      liveUrl: "https://notes-app-tau-five.vercel.app/",
      githubUrl: "https://github.com/AzharAndriann/NotesApp.git",
    },
  ];

  useEffect( () =>
  {
    if ( isInView )
    {
      setAnimationKey( ( prev ) => prev + 1 );
    }
  }, [ isInView ] );

  const loadMoreProjects = () =>
  {
    setVisibleProjects( ( prev ) => prev + 3 );
  };

  return (
    <section id="projects" className="py-20 bg-muted/50 scroll-mt-20" ref={ ref }>
      <div className="container mx-auto px-4">
        <motion.div
          initial={ { opacity: 0, y: 20 } }
          animate={ isInView ? { opacity: 1, y: 0 } : {} }
          transition={ { duration: 0.5 } }
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I have worked on, ranging from landing pages to management systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" key={ animationKey }>
          <AnimatePresence>
            { projects.slice( 0, visibleProjects ).map( ( project, index ) => (
              <motion.div
                key={ `${ index }-${ animationKey }` }
                initial={ { opacity: 0, x: -50 } }
                animate={ isInView ? { opacity: 1, x: 0 } : {} }
                transition={ {
                  delay: Math.min( index, 9 ) * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                } }
                className="relative group overflow-hidden rounded-lg"
                whileHover={ { scale: 1.03 } }
              >
                {/* Image */ }
                <div className="relative h-64 w-fullj">
                  <Image
                    src={ project.image || "/placeholder.svg" }
                    alt={ project.title }
                    fill
                    className="lg:object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Hover Overlay */ }
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <motion.div
                    initial={ { y: 20 } }
                    whileHover={ { y: 0 } }
                    transition={ { duration: 0.3 } }
                  >
                    <h3 className="text-xl font-bold text-white">{ project.title }</h3>
                    <h2 className="text-md font-bold text-white">{ project.type }</h2>

                    {/* Technologies */ }
                    <div className="flex flex-wrap gap-2 mt-3">
                      { project.technologies.map( ( tech, techIndex ) => (
                        <Badge
                          key={ techIndex }
                          variant="standart"
                          className="text-xs bg-white/10 text-white border-white/20"
                        >
                          { tech }
                        </Badge>
                      ) ) }
                    </div>

                    {/* Action Buttons */ }
                    <div className="flex gap-2 mt-4">
                      <Dialog>
                        <DialogTrigger className="flex w-full bg-white hover:bg-white/60 text-primary rounded-md" asChild>
                          <Button size="sm" className="flex w-full bg-white text-primary hover:bg-white/60">
                            <CircleEllipsis className="mr-2 h-4 w-4" />
                            Description
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <motion.div
                            initial={ { opacity: 0, y: -20 } }
                            animate={ { opacity: 1, y: 0 } }
                            exit={ { opacity: 0, y: 20 } }
                            transition={ { duration: 0.2 } }
                            className="mx-4 w-full max-w-lg rounded-lg bg-white"
                          >
                            <DialogHeader>
                              <DialogTitle className="text-xl font-bold">
                                { project.title }
                              </DialogTitle>
                              <DialogDescription className="mt-2 text-gray-700">
                                {/* <Carousel className="w-full max-w-xs">
                                  <CarouselContent>
                                    { Array.from( { length: 5 } ).map( ( _, index ) => (
                                      <CarouselItem key={ index }>
                                        <div className="p-1">
                                          <Card>
                                            <CardContent className="flex aspect-square items-center justify-center p-6">
                                              <span className="text-4xl font-semibold">{ index + 1 }</span>
                                            </CardContent>
                                          </Card>
                                        </div>
                                      </CarouselItem>
                                    ) ) }
                                  </CarouselContent>
                                  <CarouselPrevious />
                                  <CarouselNext />
                                </Carousel> */}
                                { project.description }
                              </DialogDescription>
                            </DialogHeader>
                          </motion.div>
                        </DialogContent>
                      </Dialog>
                      { project.githubUrl && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-white text-primary hover:bg-white/70"
                          onClick={ () => window.open( project.githubUrl, "_blank" ) }
                        >
                          <Github className="h-4 w-4" />
                        </Button>
                      ) }
                      { project.liveUrl && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-white text-primary hover:bg-white/70"
                          onClick={ () => window.open( project.liveUrl, "_blank" ) }
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      ) }
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ) ) }
          </AnimatePresence>
        </div>

        { visibleProjects < projects.length && (
          <motion.div
            initial={ { opacity: 0 } }
            animate={ isInView ? { opacity: 1 } : {} }
            transition={ { delay: 0.5 } }
            className="text-center mt-8"
          >
            <Button onClick={ loadMoreProjects } variant="outline">
              Show More Projects
            </Button>
          </motion.div>
        ) }
      </div>
    </section>
  );
}