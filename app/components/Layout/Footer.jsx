"use client"

import '../Layout/layout.css'
import fondoFooter from '../../../public/assets/fondo.jpg'
import separacion from '../../../public/assets/separacionFooter.png'
import separacion2 from '../../../public/assets/separacionFooterAlt.png'
import Image from 'next/image'
import FormFooter from './FormFooter'
import { comfortaa, sora } from '@/app/fonts'
import { FaFacebook, FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter, FaSquareInstagram, FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { CiCircleChevRight } from "react-icons/ci";
import { usePathname } from 'next/navigation'
const Footer = () => {
    const pathname = usePathname();

    const pathIsMember = pathname !== "/";

    return (

        <section className='sectionFooter'>

            <div className='footerSeparacion'>
                {
                    pathIsMember ?
                        <Image
                            style={{
                                marginTop: -10
                            }}
                            src={separacion2}
                            width={3000}
                            height={3000}
                            alt='separacion'
                            className='separacion'
                        />
                        :
                        <Image
                            src={separacion}
                            width={3000}
                            height={3000}
                            alt='separacion'
                            className='separacion'
                        />
                }
            </div>

            <div className='footerTextImage'>
                <div className='footerImageContainer'>
                    <Image
                        src={fondoFooter}
                        width={3000}
                        height={3000}
                        alt='fondoFooter'
                        className='footerImage'
                    />
                    <div className='effectFondoFooter'></div>
                </div>

                <div className='socials'>
                    <div className='donaciones'>
                        <h3 className={`${sora.className}`}>Donaciones.</h3>
                        <a style={{ display: "flex", alignItems: "center" }} className={`${comfortaa.className} donacionesBoton`} href="/">Apoyanos <CiCircleChevRight style={{ marginLeft: 5 }} /></a>
                    </div>
                    <div className='contacto'>
                        <h3 className={`${sora.className}`}>Contacto.</h3>
                        <span style={{ display: "flex", alignItems: "center" }} className={`${comfortaa.className}`}><MdOutlineEmail style={{ marginRight: 5 }} />Tade.funess@gmail.com</span>
                        <span style={{ display: "flex", alignItems: "center" }} className={`${comfortaa.className}`}><MdOutlinePhone style={{ marginRight: 5 }} />+ 54 9 11 3208 6274</span>
                    </div>
                    <div className='redes'>
                        <h3 className={`${sora.className}`}>Redes.</h3>
                        <div className='logosRedes'>
                            <a href="https://www.instagram.com/p/C8nQ2RZpQhC/"><FaInstagram /></a>
                            <a href="https://web.facebook.com/"><FaFacebook /></a>
                            <a href="https://x.com/"><FaXTwitter /></a>
                        </div>
                    </div>
                </div>
            </div>
            <FormFooter />

        </section >

    )
}

export default Footer
