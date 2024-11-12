import React from 'react'
import { motion } from "framer-motion"
import { div } from 'framer-motion/client'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
const Frame = () => {
    const [isVisible, setIsVisible] = useState(false);
    const leftRef = useRef(null);
    const rightRef = useRef(null);
    const centerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.1 }
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

    return (
        <div>
            <div style={{ height: "50vh" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptatibus
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique eaque repellendus ratione, molestiae perferendis recusandae saepe error exercitationem maiores ad. Perspiciatis voluptates doloremque sint sunt! Velit porro officiis aliquam deserunt?
                eveniet dignissimos dicta accusamus unde? Delectus reprehenderit vero ipsum labore reiciendis, quibusdam inventore modi nisi sapiente repellat assumenda rem a.
            </div>
            <div style={{ height: "50vh" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptatibus
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique eaque repellendus ratione, molestiae perferendis recusandae saepe error exercitationem maiores ad. Perspiciatis voluptates doloremque sint sunt! Velit porro officiis aliquam deserunt?
                eveniet dignissimos dicta accusamus unde? Delectus reprehenderit vero ipsum labore reiciendis, quibusdam inventore modi nisi sapiente repellat assumenda rem a.
            </div>
            <div style={{ height: "50vh" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptatibus
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique eaque repellendus ratione, molestiae perferendis recusandae saepe error exercitationem maiores ad. Perspiciatis voluptates doloremque sint sunt! Velit porro officiis aliquam deserunt?
                eveniet dignissimos dicta accusamus unde? Delectus reprehenderit vero ipsum labore reiciendis, quibusdam inventore modi nisi sapiente repellat assumenda rem a.
            </div>
            <div className='d-flex gap-4'>
                <motion.div
                    className='flex flex-col px-4'
                    initial={{ opacity: 0, x: 10 }} // Initial animation state
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}   // Animate only when visible
                    transition={{ duration: 0.4, delay: 0.4 }} // Duration and delay
                    ref={leftRef} // Ref to observe this content
                >
                    <div className='mb-6'>
                        <h1>
                            24-hour Customer Service
                        </h1>
                        <p>
                            We promise impeccable service by promptly addressing your queries and problems through our dedicated 24/7 customer support team.
                        </p>
                    </div>
                    <div className=''>
                        <h1>
                            ISO Certification
                        </h1>
                        <p >
                            We are an ISO 9001, ISO 14001 and ISO 45001 certified car rental company with 20+ years of service excellence in Nepal.
                        </p>
                    </div>
                </motion.div>
            </div >
        </div >
    )
}

export default Frame