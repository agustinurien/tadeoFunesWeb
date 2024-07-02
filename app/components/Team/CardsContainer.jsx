

import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import jorge from "../../../public/assets/Jorge.jpg"
import tadeo from "../../../public/assets/tadeo.jpg"

import { sora } from '@/app/fonts'
import { useAnimation, useInView, motion, useTransform, useScroll } from 'framer-motion'

const CardsContainer = () => {
    const Jorge = "Jorge Gonzalez"
    const Tadeo = " Tadeo Funes de Rioja"
    const Hernan = "Hernan Paulucci"
    const Ale = "Alejandro Gherghi"
    const Klaus = "Klaus Lange"
    const Martin = "Martin Magiaterra"

    const ref = useRef()
    const controls = useAnimation();
    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        if (isInView) {
            controls.start('animate')
        }
    }, [isInView])

    const redirect = (value) => {
        if (value === Jorge) {
            window.location.href = `${Jorge}`
        }
        if (value === Tadeo) {
            window.location.href = `${Tadeo}`
        }
        if (value === Hernan) {
            window.location.href = `${Hernan}`
        }
        if (value === Ale) {
            window.location.href = `${Ale}`
        }
        if (value === Klaus) {
            window.location.href = `${Klaus}`
        }
        if (value === Martin) {
            window.location.href = `${Martin}`
        } else {
            return
        }

    }


    return (
        <section ref={ref} className='teamSection'>

            <div className={`${sora.className} teamContainer`}>

                <motion.div

                    onClick={() => redirect(Jorge)}
                    variants={{
                        animate: { opacity: 1, y: 0 }
                    }}
                    initial={{ opacity: 0, y: 100 }}
                    animate={controls}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className='cardContainer'>
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        className='imageTeamContainer'>

                        <div
                            className='shadowEffect'></div>

                        <Image
                            src={jorge}
                            width={1200}
                            height={1200}
                            quality={100}
                            priority={true}
                            alt='jorge'
                            className='imagenTeam'
                        />
                    </motion.div>
                    <div className='teamName'>
                        <h4>Jorge Gonzalez</h4>
                        <span>Prep. Fisico</span>
                    </div>
                </motion.div>

                <motion.div
                    onClick={() => redirect(Tadeo)}
                    variants={{
                        animate: { opacity: 1, y: 0 }
                    }}
                    initial={{ opacity: 0, y: 100 }}
                    animate={controls}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className='cardContainer'>
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        className='imageTeamContainer'>
                        <div className='shadowEffect'></div>
                        <Image
                            src={tadeo}
                            width={1200}
                            height={1200}
                            quality={100}
                            priority={true}
                            alt='jorge'
                            className='imagenTeam2'
                        />
                    </motion.div>
                    <div className='teamName'>
                        <h4>Tadeo Funes de Rioja</h4>
                        <span>Skiper</span>
                    </div>
                </motion.div>

                <motion.div
                    onClick={() => redirect(Hernan)}
                    variants={{
                        animate: { opacity: 1, y: 0 }
                    }}
                    initial={{ opacity: 0, y: 100 }}
                    animate={controls}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className='cardContainer'>
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        className='imageTeamContainer'>
                        <div className='shadowEffect3'></div>
                        <Image
                            src={jorge}
                            width={1200}
                            height={1200}
                            quality={100}
                            priority={true}
                            alt='jorge'
                            className='imagenTeam3'
                        />
                    </motion.div>
                    <div className='teamName'>
                        <h4>Hernan Paulucci</h4>
                        <span>Crew</span>
                    </div>
                </motion.div>

                <motion.div
                    onClick={() => redirect(Ale)}
                    variants={{
                        animate: { opacity: 1, y: 0 }
                    }}
                    initial={{ opacity: 0, y: 100 }}
                    animate={controls}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className='cardContainer'>
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        className='imageTeamContainer'>
                        <div className='shadowEffect'></div>
                        <Image
                            src={jorge}
                            width={1200}
                            height={1200}
                            quality={100}
                            priority={true}
                            alt='jorge'
                            className='imagenTeam'
                        />
                    </motion.div>
                    <div className='teamName'>
                        <h4>Alejandro Gherghi </h4>
                        <span>Coach</span>
                    </div>
                </motion.div>

                <motion.div
                    onClick={() => redirect(Klaus)}
                    variants={{
                        animate: { opacity: 1, y: 0 }
                    }}
                    initial={{ opacity: 0, y: 100 }}
                    animate={controls}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    className='cardContainer'>
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        className='imageTeamContainer'>
                        <div className='shadowEffect'></div>
                        <Image
                            src={jorge}
                            width={1200}
                            height={1200}
                            quality={100}
                            priority={true}
                            alt='jorge'
                            className='imagenTeam2'
                        />
                    </motion.div>
                    <div className='teamName'>
                        <h4>Klaus Lange</h4>
                        <span>Coach</span>
                    </div>
                </motion.div>

                <motion.div
                    onClick={() => redirect(Martin)}
                    variants={{
                        animate: { opacity: 1, y: 0 }
                    }}
                    initial={{ opacity: 0, y: 100 }}
                    animate={controls}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    className='cardContainer'>
                    <motion.div
                        whileHover={{ scale: 1.03 }} className='imageTeamContainer'>
                        <div className='shadowEffect3'></div>
                        <Image
                            src={jorge}
                            width={1200}
                            height={1200}
                            quality={100}
                            priority={true}
                            alt='jorge'
                            className='imagenTeam3'
                        />
                    </motion.div>
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
