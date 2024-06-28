"use client"
import Image from "next/image"
import "./layout.css"
import logo from '../../../public/assets/yca3.png'

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

    const scrollTo = (event, value) => {
        const pathIsMember = pathname !== "/";
        if (pathIsMember) {
            window.location.href = `/#${value}`;
        } else {
            event.preventDefault();
            const section = document.getElementById(value);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        };
    }


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
                        transition={{ duration: 0.4, delay: 0.2 }}
                    >
                        <a href="#" onClick={(e) => scrollTo(e, "about")} >About Us</a>
                    </motion.li>

                    <motion.li
                        variants={{
                            animate: { opacity: 1, x: 0 }
                        }}
                        initial={{ opacity: 0, x: -100 }}
                        animate={controls}
                        transition={{ duration: 0.4, delay: 0.1 }}
                    >
                        <a href="#" onClick={(e) => scrollTo(e, "team")}>Team</a>
                    </motion.li>

                    <motion.li
                        variants={{
                            animate: { opacity: 1, x: 0 }
                        }}
                        initial={{ opacity: 0, x: -100 }}
                        animate={controls}
                        transition={{ duration: 0.4 }}
                    >
                        <a href="#" onClick={(e) => scrollTo(e, "calendar")}>Calendar</a>
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
                        <a href="/galeria">Galery</a>
                    </motion.li>

                    <motion.li
                        variants={{
                            animate: { opacity: 1, x: 0 }
                        }}
                        initial={{ opacity: 0, x: 100 }}
                        animate={controls}
                        transition={{ duration: 0.4, delay: 0.1 }}
                    >
                        <a href="#" onClick={(e) => scrollTo(e, "sponsors")}>Sponsors</a>
                    </motion.li>

                    <motion.li
                        variants={{
                            animate: { opacity: 1, x: 0 }
                        }}
                        initial={{ opacity: 0, x: 100 }}
                        animate={controls}
                        transition={{ duration: 0.4, delay: 0.2 }}
                    >
                        <a href="">Market</a>
                    </motion.li>
                </ul>
            </div>

        </section>
    )
}

export default Navbar
