"use client"
import Image from "next/image"
import "./layout.css"
import logo from '../../../public/assets/galery/logo.png'

import { sora } from "@/app/fonts"
import { useEffect, useRef, useState } from "react"
import { useAnimation, motion, useInView } from "framer-motion"
import { usePathname } from "next/navigation"

const Navbar = () => {

    const pathname = usePathname();

    const ref = useRef()
    const controls = useAnimation();

    const isInView = useInView(ref, { once: true })

    const [scrolled, setScrolled] = useState(false);



    useEffect(() => {
        const pathIsMember = pathname !== "/";
        if (pathIsMember) {
            setScrolled(true);
        } else {

            const handleScroll = () => {

                if (window.scrollY <= 680) {
                    setScrolled(false);
                } else {
                    setScrolled(true);
                }
            };
            handleScroll();
            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);



    useEffect(() => {
        if (isInView) {
            controls.start("animate")
        }

    }, [isInView])

    return (
        <section
            ref={ref}
            className={`navBarContainer ${scrolled ? 'scrolled' : ''}`}>
            <div className="navBar">
                <ul className={`${sora.className}`}>

                    <motion.li
                        variants={{
                            animate: { opacity: 1, x: 0 }
                        }}
                        initial={{ opacity: 0, x: -100 }}
                        animate={controls}
                        transition={{ duration: 0.4 }}
                        className="donacionesHeader"
                    >
                        <a href="/" className="donacionesHeader">Donaciones</a>
                    </motion.li>

                    <motion.li
                        variants={{
                            animate: { opacity: 1, x: 0 }
                        }}
                        initial={{ opacity: 0, x: -100 }}
                        animate={controls}
                        transition={{ duration: 0.4 }}
                    >
                        <a href="/calendario" >Calendario</a>
                    </motion.li>

                    <motion.li
                        variants={{
                            animate: { opacity: 1, scale: 1 }
                        }}
                        initial={{ opacity: 0, scale: 0.7 }}
                        animate={controls}
                        transition={{ duration: 0.4 }}
                    ><a href="/"
                        className="contenedorLogo"
                    >
                            <Image
                                src={logo}
                                width={300}
                                height={300}
                                alt="logo"
                                className="logo"
                            />
                        </a></motion.li>

                    <motion.li
                        variants={{
                            animate: { opacity: 1, x: 0 }
                        }}
                        initial={{ opacity: 0, x: 100 }}
                        animate={controls}
                        transition={{ duration: 0.4 }}
                    >
                        <a href="/galeria">Galeria</a>
                    </motion.li>

                    <motion.li
                        className="market"
                        variants={{
                            animate: { opacity: 1, x: 0 }
                        }}
                        initial={{ opacity: 0, x: 100 }}
                        animate={controls}
                        transition={{ duration: 0.4, delay: 0.2 }}
                    >
                        <a className="market" href="/">Tienda</a>
                    </motion.li>
                </ul>
            </div>

        </section>
    )
}

export default Navbar
