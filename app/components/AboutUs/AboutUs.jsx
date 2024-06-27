"use client"

import Image from 'next/image'
import separacion2 from "../../../public/assets/separacion2.png"
import diagonal from "../../../public/assets/diagonal.jpg"
import barco from "../../../public/assets/barco.jpg"
import agua from "../../../public/assets/agua.jpg"
import "./aboutUs.css"
import { comfortaa, poppins, sora } from '@/app/fonts'
import { useScroll, useTransform, motion, useInView, useAnimation } from 'framer-motion'
import { useEffect, useRef } from 'react'
const AboutUs = () => {

    const { scrollYProgress } = useScroll();
    const separacionY = useTransform(scrollYProgress, [0, 1], [0, -1600]);

    const ref = useRef()
    const controls = useAnimation();

    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        if (isInView) {

            controls.start("animate")
        }

    }, [isInView])


    return (
        <section className="aboutUsContainer">
            <motion.div
                style={{ y: separacionY }}
                className='separacionContainer2'>
                <Image
                    src={separacion2}
                    width={2500}
                    height={1700}
                    alt="separacion2"
                    className="separacion"
                    priority={true}
                />
            </motion.div>
            <motion.div
                className='backSeparacion'
                style={{ y: separacionY, position: "absolute", top: 0, left: 0, width: "100%", height: "25%" }}></motion.div>

            <div
                id='about'
                className='topAboutUsContainer'>

                <div className='aboutUsTextImage'>
                    <div className='aboutUsTextContainer'>
                        <motion.h2

                            variants={{

                                animate: { opacity: 1 }
                            }}
                            initial={{ opacity: 0 }}
                            animate={controls}
                            transition={{ duration: 0.4 }}
                            className={`${sora.className}`}>ABOUT US</motion.h2>
                        <motion.p
                            variants={{
                                animate: { opacity: 1 }
                            }}
                            initial={{ opacity: 0 }}
                            animate={controls}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            ref={ref}
                            className={`${comfortaa.className}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius numquam animi esse voluptatum suscipit tempora omnis? Beatae sunt ab sint quas est aliquid repudiandae quidem adipisci similique consequuntur. Beatae, aspernatur.</motion.p>
                        <motion.p
                            variants={{
                                animate: { opacity: 1 }
                            }}
                            initial={{ opacity: 0 }}
                            animate={controls}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            ref={ref}
                            className={`${comfortaa.className}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius numquam animi esse voluptatum suscipit tempora omnis? Beatae sunt ab sint quas est aliquid repudiandae quidem adipisci similique consequuntur. Beatae, aspernatur.</motion.p>
                        <motion.p
                            variants={{
                                animate: { opacity: 1 }
                            }}
                            initial={{ opacity: 0 }}
                            animate={controls}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            ref={ref}
                            className={`${comfortaa.className}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius numquam animi esse voluptatum suscipit tempora omnis? Beatae sunt ab sint quas est aliquid repudiandae quidem adipisci similique consequuntur. Beatae, aspernatur.</motion.p>
                    </div>
                    <div
                        className='backgroundImageEffect'>

                    </div>
                    <motion.div
                        variants={{
                            animate: { width: 0 }
                        }}
                        animate={controls}
                        transition={{ duration: 0.5 }}
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                            height: "55%",
                            width: "100%",
                            backgroundColor: "#003366",
                            zIndex: 998
                        }}>

                    </motion.div>
                    <div
                        className='imageDiagonalContainer'
                    >
                        <Image
                            src={diagonal}
                            width={2500}
                            height={2700}
                            alt="fotoDiagonal"
                            className="fotoAboutUs"
                        />
                    </div>
                </div>

                <div
                    className='barco'
                >
                    <div style={{
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                        height: "95%",
                        width: "96%",
                        backgroundColor: "#396CAA",
                        zIndex: 1
                    }}></div>
                    <motion.div
                        variants={{
                            animate: { width: 0 }
                        }}
                        animate={controls}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                            height: "100%",
                            width: "100%",
                            backgroundColor: "#003366",
                            zIndex: 3
                        }}></motion.div>

                    <div style={{
                        position: 'relative',
                        height: "100%",
                        width: "100%",
                        paddingRight: 20,
                        paddingBottom: 20,
                        zIndex: 2


                    }}>
                        <Image
                            src={barco}
                            width={2500}
                            height={2700}
                            alt="fotoBarco"
                            className="fotoAboutUs"
                        />

                    </div>
                </div>
            </div>

            <div
                className='aguaContainer'
            >
                <div
                    style={{
                        position: 'relative',
                        height: "100%",
                        width: "74%"
                    }}>
                    <div style={{
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                        height: "95%",
                        width: "98%",
                        backgroundColor: "white",
                    }}></div>
                    <motion.div
                        variants={{
                            animate: { width: 0 }
                        }}
                        animate={controls}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        style={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            height: "100%",
                            width: "100%",
                            backgroundColor: "#003366",
                            zIndex: 998
                        }}>

                    </motion.div>


                    <div style={{
                        position: 'relative',
                        height: "100%",
                        width: "100%",
                        paddingRight: 20,
                        paddingBottom: 20,
                        zIndex: 2
                    }}>

                        <Image
                            src={agua}
                            width={2500}
                            height={2700}
                            alt="agua"
                            className="fotoAboutUs"
                        />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default AboutUs
