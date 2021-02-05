import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface AnimateWhenVisibleProps {
    children: React.ReactNode
}

export const AnimateWhenVisible = ({children}: AnimateWhenVisibleProps) => {
    const [currentAnimation, setCurrentAnimation] = useState("hidden");
    const [ref, inView] = useInView();

    useEffect(() => {
        console.log(inView);
        if (inView) {
            setCurrentAnimation("visible");
        } else {
            setCurrentAnimation("hidden");
        }
        return () => {
        }
      }, [inView])

    return (<motion.div ref={ref} animate={currentAnimation} initial="hidden">
        {children}
    </motion.div>)
}