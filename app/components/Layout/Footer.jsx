import '../Layout/layout.css'
import fondoFooter from '../../../public/assets/fondo.jpg'
import separacion from '../../../public/assets/separacionFooter.png'
import Image from 'next/image'
import FormFooter from './FormFooter'
import { comfortaa, sora } from '@/app/fonts'
import { FaFacebook, FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter, FaSquareInstagram, FaXTwitter } from "react-icons/fa6";
const Footer = () => {
    return (

        <section className='sectionFooter'>
            <div className='footerSeparacion'>
                <Image
                    src={separacion}
                    width={3000}
                    height={3000}
                    alt='separacion'
                    className='separacion'
                />
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
                        <span className={`${comfortaa.className}`}>agus.urien2@gmail.com</span>
                    </div>
                    <div className='contacto'>
                        <h3 className={`${sora.className}`}>Contacto.</h3>
                        <span className={`${comfortaa.className}`}>agus.urien2@gmail.com</span>
                        <span className={`${comfortaa.className}`}>11 4149-1827</span>
                    </div>
                    <div className='redes'>
                        <h3 className={`${sora.className}`}>Redes.</h3>
                        <div className='logosRedes'>
                            <a href="/"><FaInstagram /></a>
                            <a href="/"><FaFacebook /></a>
                            <a href="/"><FaXTwitter /></a>
                        </div>
                    </div>
                </div>
            </div>
            <FormFooter />

        </section>

    )
}

export default Footer
