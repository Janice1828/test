import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
const Lorem = () => {
    const [isVisible, setIsVisible] = useState(false);
    const leftRef = useRef(null);
    const rightRef = useRef(null);
    const centerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsVisible(true); // Start the animation when visible
                    }
                });
            },
            { threshold: 0.1 } // Trigger when 10% of the content is visible
        );

        if (leftRef.current) observer.observe(leftRef.current);
        if (rightRef.current) observer.observe(rightRef.current);
        if (centerRef.current) observer.observe(centerRef.current);

        return () => {
            if (leftRef.current) observer.unobserve(leftRef.current);
            if (rightRef.current) observer.unobserve(rightRef.current);
            if (centerRef.current) observer.unobserve(centerRef.current);
        };
    }, []);
    // const responsive = {
    //     superLargeDesktop: {
    //         breakpoint: { max: 4000, min: 3000 },
    //         items: 5
    //     },
    //     desktop: {
    //         breakpoint: { max: 3000, min: 1024 },
    //         items: 3
    //     },
    //     tablet: {
    //         breakpoint: { max: 1024, min: 464 },
    //         items: 2
    //     },
    //     mobile: {
    //         breakpoint: { max: 464, min: 0 },
    //         items: 1
    //     }
    // };
    return (
        <div>
            {/* <Carousel responsive={responsive} infinite={true} autoPlay={true}
            >
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
                <div>Item 4</div>
                <div>Item 4</div>
                <div>Item 4</div>
                <div>Item 4</div>
            </Carousel>; */}
            <motion.div
                className=''
                initial={{ opacity: 0, x: 10 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}   // Animate only when visible
                transition={{ duration: 0.4, delay: 1 }} // Duration and delay
                ref={leftRef} // Ref to observe this content
            >   
                <div className='mb-6'>
                    <h1>Jenish</h1>
                    <p>Lorem ipsum do</p></div>
                <div className=''>
                    <h1>Jenish</h1>
                    <p>Jenish</p>
                </div>
            </motion.div>
        </div>
    )
}

export default Lorem