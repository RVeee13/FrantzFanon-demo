import React from 'react'
import {motion, useInView, useAnimation} from "framer-motion"
import { useEffect, useRef } from 'react';

export const Reveal2 = ({children, delay=0}) => {
    const ref = useRef(null)
  const isInView = useInView(ref, {once: true})
   const mainControls = useAnimation()

  useEffect(()=>{
    if(isInView){
      mainControls.start("visible")
    }
  }, [isInView]);

  return (
      <div ref={ref}>
          <motion.div
              variants={{
                  hidden: { opacity: 0},
                  visible: { opacity: 1}
              }}
            
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 1, delay}}
              ref={ref}
          >
              {children}
          </motion.div>
      </div>
  )
}

