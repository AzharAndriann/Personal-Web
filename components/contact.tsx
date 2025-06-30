"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Send, CopyCheck } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import
{
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { motion, useAnimation, useInView, Variants } from "framer-motion"
export function Contact ()
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

  const contactVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.6
      }
    }
  };

  const contacts = [
    { icon: Mail, name: "Email", label: "azharandrianwork@gmail.com", href: "mailto:azharandrianwork@gmail.com", type: "visit", hover: "Visit email" },
    { icon: Phone, name: "Phone", label: "+62 813-9973-3451", href: "+62 813-9973-3451", type: "copy", hover: "Copy phone number" },
    { icon: MapPin, name: "Maps", label: "Tangerang, Banten, Indonesia", href: "https://maps.app.goo.gl/Qz3pnuvzK9VqeJ1o6", type: "visit", hover: "Visit maps" },
  ]

  const [ copied, setCopied ] = useState( false );

  const handleCopy = async ( text: string ) =>
  {
    try
    {
      await navigator.clipboard.writeText( text );
      setCopied( true );
      setTimeout( () => setCopied( false ), 5000 );
    } catch ( err )
    {
      console.error( "Failed to copy:", err );
    }
  };


  return (
    <motion.section
      ref={ ref }
      id="contact"
      className="pt-20 pb-96"
      initial="hidden"
      animate={ controls }
      variants={ containerVariants }
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <motion.div variants={ containerVariants }>
              <motion.h3 className="text-2xl font-semibold mb-6" variants={ itemVariants }>Contact Me</motion.h3>
              <motion.div className="space-y-4" variants={ contactVariants }>
                { contacts?.map( ( contact, index ) => (
                  <motion.div
                    className="flex items-center space-x-4"
                    key={ index }
                    variants={ itemVariants }
                  >
                    { contact?.type === "visit" ? (
                      <HoverCard>
                        <motion.div
                          whileHover={ { scale: 1.1 } }
                          whileTap={ { scale: 0.9 } }
                        >
                          <HoverCardTrigger>
                            <Button variant={ "standart" } className="bg-primary/10 p-3 rounded-full">
                              <a
                                href={ contact.href }
                                target="_blank"
                              >
                                <contact.icon className="h-5 w-5 text-primary" />
                              </a>
                            </Button>
                          </HoverCardTrigger>
                        </motion.div>
                        <HoverCardContent className="flex justify-center text-center text-xs w-28">
                          { contact?.hover }
                        </HoverCardContent>
                      </HoverCard>
                    ) :
                      (
                        <HoverCard>
                          <motion.div
                            whileHover={ { scale: 1.1 } }
                            whileTap={ { scale: 0.9 } }
                          >
                            <HoverCardTrigger>
                              <Button variant={ "standart" } onClick={ () => handleCopy( contact.label ) } disabled={ copied } className="bg-primary/10 p-3 rounded-full">
                                { copied === true ? <CopyCheck className="h-5 w-5 text-primary" /> : <contact.icon className="h-5 w-5 text-primary" /> }
                              </Button>
                            </HoverCardTrigger>
                          </motion.div>
                          <HoverCardContent className="flex justify-center text-center text-xs w-28">
                            { contact?.hover }
                          </HoverCardContent>
                        </HoverCard>
                      )
                    }
                    <div>
                      <div className="font-medium">{ contact?.name }</div>
                      <div className="text-muted-foreground">{ contact?.label }</div>
                    </div>
                  </motion.div>
                ) ) }
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
