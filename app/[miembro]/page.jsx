"use client"
import "../[miembro]/miembro.css";
import Image from "next/image";
import { comfortaa, sora } from "../fonts";
import { FaFacebook, FaInstagram } from "react-icons/fa";

import jorge from "../../public/assets/Jorge.jpg";
import tadeo from "../../public/assets/tadeo.jpg";
import hernan from "../../public/assets/Jorge.jpg";
import ale from "../../public/assets/galery/ale.png";
import klaus from "../../public/assets/galery/klaus.png";
import martin from "../../public/assets/Jorge.jpg";

import { useEffect, useState } from "react";
const Card = ({ params }) => {
    const name = decodeURIComponent(params.miembro.replace(/[\[\]']+/g, ''));
    const [member, setMember] = useState({});

    const miembros = [
        {
            name: "Jorge Gonzalez",
            description: "Description of Member 1",
            imgurl: jorge,
            longDescription: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
        },
        {
            name: "Tadeo Funes de Rioja",
            description: "Skipper",
            imgurl: tadeo,
            longDescription: "Comencé a competir en vela a los 8 años, de la mano del Yacht Club Argentino, Desde esa edad se convirtió en mi pasión, es un deporte que me dio una perspectiva única del mundo, y tuve el honor de representar a Argentina y a mi club en competencias tanto nacionales como internacionales. Mis primeros éxitos fueron en la Clase Optimist, donde obtuve varios torneos en el circuito nacional y así lograr la clasificación para un Mundial. A partir de ahí, me aventure en el Skiff 29er. En 2022 alcancé el Campeonato Mundial juvenil en La Haya y, como si fuera poco, dos semanas más tarde, el Mundial Open en Barcelona",
            longDescription2: "Me apasiona la naturaleza y creo profundamente, en la importancia de conservar los ecosistemas afectados. Soy un activista apasionado en campañas para descontaminar los ríos. He colaborado con Unplastify para contribuir a desplastificar el deporte. Me gradué del Colegio San Juan el Precursor, donde cultivé habilidades académicas y humanas sólidas. Actualmente, estoy persiguiendo mi vocación por el derecho y la justicia estudiando en la facultad de Derecho de la Universidad Austral. Mi sueño más grande es competir en los Juegos Olímpicos de Los Ángeles 2028 y representar a Argentina. Cada día, entreno con el objetivo de hacer realidad ese sueño"
        },
        {
            name: "Hernan Paulucci",
            description: "Description of Member 3",
            imgurl: hernan,
            longDescription: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
        },
        {
            name: "Alejandro Gherghi",
            description: "Description of Member 4",
            imgurl: ale,
            longDescription: "Soy Alejandro Gherghi y desde niño cuando conocí la vela, mi vida cambio para siempre. Fue un amor a primera vista. Siendo juvenil, pude representar varias veces a nuestro país y conseguir resultados destacados, lo que luego me impulso a transmitir con mucha pasión y compromiso esas experiencias a otros niños durante años. Ser parte del equipo de entrenadores de Tadeo y Hernan es un nuevo desafío para mí. Quiero acompañarlos en este proceso que con mucho profesionalismo y entusiasmo nos embarcamos,  para que puedan cumplir sus sueños deportivos."
        },
        {
            name: "Klaus Lange",
            description: "Description of Member 5",
            imgurl: klaus,
            longDescription: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
        },
        {
            name: "Martin Magiaterra",
            description: "Description of Member 6",
            imgurl: martin,
            longDescription: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
        }
    ]
    useEffect(() => {
        const member = miembros.find(member => member.name === name);
        if (member) {
            setMember(member)
        }
    }, [name]);

    return (
        <section className="sectionMember">
            {
                member &&
                <>

                    <div className="card">
                        <div className="bottomLinksContainer">

                            <div className="linksContainer">
                                <a href=""><FaInstagram /></a>
                                <a href=""><FaFacebook /></a>
                            </div>

                        </div>
                        <div className="bottomContainer">
                        </div>
                        <div className="top-section">
                            <div className="imageMemberContainer">
                                {
                                    member.imgurl &&
                                    <Image
                                        width={1000}
                                        height={1000}
                                        quality={100}
                                        priority={true}
                                        src={member.imgurl}
                                        alt="miembro"
                                        className="imageMember" />
                                }
                            </div>
                            <div className="info">
                                <h2 className={`${sora.className}`}>{member.name}</h2>
                                <p className={`${sora.className}`}>{member.description}</p>
                            </div>
                        </div>
                        <div className="long-description">
                            <div className="description-container">
                                <p className={`${comfortaa.className}`}>{member.longDescription}</p>
                                <p className={`${comfortaa.className}`}>{member.longDescription2}</p>

                            </div>
                        </div>
                    </div>
                </>
            }

        </section>
    );

};

export default Card;