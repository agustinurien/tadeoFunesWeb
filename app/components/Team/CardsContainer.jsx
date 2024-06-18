

import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import jorge from "../../../public/assets/Jorge.jpg"
import tadeo from "../../../public/assets/tadeo.jpg"

import { sora } from '@/app/fonts'
import { useAnimation, useInView, motion, useTransform, useScroll } from 'framer-motion'

const CardsContainer = () => {

    const ref = useRef()
    const controls = useAnimation();
    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        if (isInView) {
            controls.start('animate')
        }
    }, [isInView])


    return (
        <section ref={ref} className='teamSection'>
            <div className={`${sora.className} teamContainer`}>
                <motion.div
                    variants={{
                        animate: { opacity: 1, y: 0 }
                    }}
                    initial={{ opacity: 0, y: 100 }}
                    animate={controls}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className='cardContainer'>
                    <div className='imageTeamContainer'>
                        <div
                            className='shadowEffect'></div>

                        <Image
                            src={jorge}
                            width={1200}
                            height={1200}
                            alt='jorge'
                            className='imagenTeam'
                        />
                    </div>
                    <div className='teamName'>
                        <h4>Jorge Gonzalez</h4>
                        <span>Prep. Fisico</span>
                    </div>
                </motion.div>

                <motion.div
                    variants={{
                        animate: { opacity: 1, y: 0 }
                    }}
                    initial={{ opacity: 0, y: 100 }}
                    animate={controls}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className='cardContainer'>
                    <div className='imageTeamContainer'>
                        <div className='shadowEffect'></div>
                        <Image
                            src={tadeo}
                            width={1200}
                            height={1200}
                            alt='jorge'
                            className='imagenTeam2'
                        />
                    </div>
                    <div className='teamName'>
                        <h4>Tadeo Funes de Rioja</h4>
                        <span>Skiper</span>
                    </div>
                </motion.div>

                <motion.div
                    variants={{
                        animate: { opacity: 1, y: 0 }
                    }}
                    initial={{ opacity: 0, y: 100 }}
                    animate={controls}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className='cardContainer'>
                    <div className='imageTeamContainer'>
                        <div className='shadowEffect3'></div>
                        <Image
                            src={jorge}
                            width={1200}
                            height={1200}
                            alt='jorge'
                            className='imagenTeam3'
                        />
                    </div>
                    <div className='teamName'>
                        <h4>Hernan Paulucci</h4>
                        <span>Crew</span>
                    </div>
                </motion.div>

                <motion.div
                    variants={{
                        animate: { opacity: 1, y: 0 }
                    }}
                    initial={{ opacity: 0, y: 100 }}
                    animate={controls}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className='cardContainer'>
                    <div className='imageTeamContainer'>
                        <div className='shadowEffect'></div>
                        <Image
                            src={jorge}
                            width={1200}
                            height={1200}
                            alt='jorge'
                            className='imagenTeam'
                        />
                    </div>
                    <div className='teamName'>
                        <h4>Alejandro Gherghi </h4>
                        <span>Coach</span>
                    </div>
                </motion.div>

                <motion.div
                    variants={{
                        animate: { opacity: 1, y: 0 }
                    }}
                    initial={{ opacity: 0, y: 100 }}
                    animate={controls}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    className='cardContainer'>
                    <div className='imageTeamContainer'>
                        <div className='shadowEffect'></div>
                        <Image
                            src={jorge}
                            width={1200}
                            height={1200}
                            alt='jorge'
                            className='imagenTeam2'
                        />
                    </div>
                    <div className='teamName'>
                        <h4>Klaus Lange</h4>
                        <span>Coach</span>
                    </div>
                </motion.div>

                <motion.div
                    variants={{
                        animate: { opacity: 1, y: 0 }
                    }}
                    initial={{ opacity: 0, y: 100 }}
                    animate={controls}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    className='cardContainer'>
                    <div className='imageTeamContainer'>
                        <div className='shadowEffect3'></div>
                        <Image
                            src={jorge}
                            width={1200}
                            height={1200}
                            alt='jorge'
                            className='imagenTeam3'
                        />
                    </div>
                    <div className='teamName'>
                        <h4>Martín Magiaterra</h4>
                        <span>Fisio</span>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default CardsContainer
