import React from 'react'
import {motion, useInView, useAnimation} from "framer-motion"
import { useEffect, useRef } from 'react';

export const Reveal = ({children, delay=0}) => {
    const ref = useRef(null)
  const isInView = useInView(ref, {once: true})
   const mainControls = useAnimation()

  useEffect(()=>{
    console.log(isInView)
    if(isInView){
      mainControls.start("visible")
    }
  }, [isInView]);

  return (
      <div ref={ref}>
          <motion.div
              variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 }
              }}
            
              initial="hidden"
              animate={mainControls}
              transition={{ duration: .7, delay}}
              ref={ref}
          >
              {children}
          </motion.div>
      </div>
  )
}
