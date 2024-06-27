"use client"
import { comfortaa, sora } from '@/app/fonts';
import CardsContainer from './CardsContainer';
import './team.css';
import { useAnimation, useInView, motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const Team = () => {

    const ref = useRef()
    const controls = useAnimation();

    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        if (isInView) {
            controls.start('animate')
        }
    }, [isInView])
    return (
        <section style={{ backgroundColor: "#003366" }}>
            <div
                id='team'
                className="separacionTeam" >
                <div className='teamTextContainer'>
                    <motion.h2
                        variants={{
                            animate: { opacity: 1, y: 0 }
                        }}
                        initial={{ opacity: 0, y: 100 }}
                        animate={controls}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className={`${sora.className}`}>TEAM</motion.h2>
                    <motion.p
                        ref={ref}
                        variants={{
                            animate: { opacity: 1 }
                        }}
                        initial={{ opacity: 0 }}
                        animate={controls}
                        transition={{ duration: 0.4, delay: 0.35 }}
                        className={`${comfortaa.className}`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis error consectetur pariatur ducimus odit aperiam cumque quae ab iste ad esse numquam rem, nisi, fugit ipsam perspiciatis eius labore id!</motion.p>
                </div>
            </div>
            <CardsContainer />

        </section>
    );
}

export default Team;