"use client"
import "../[miembro]/miembro.css";
import Image from "next/image";
import { comfortaa, sora } from "../fonts";
import { FaFacebook, FaInstagram } from "react-icons/fa";

import jorge from "../../public/assets/Jorge.jpg";
import tadeo from "../../public/assets/tadeo.jpg";
import hernan from "../../public/assets/Jorge.jpg";
import ale from "../../public/assets/Jorge.jpg";
import klaus from "../../public/assets/Jorge.jpg";
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
            longDescription: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
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
            longDescription: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
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
                                <p className={`${comfortaa.className}`}>{member.longDescription}</p>
                                <p className={`${comfortaa.className}`}>{member.longDescription}</p>
                                <p className={`${comfortaa.className}`}>{member.longDescription}</p>
                                <p className={`${comfortaa.className}`}>{member.longDescription}</p>
                                <p className={`${comfortaa.className}`}>{member.longDescription}</p>
                                <p className={`${comfortaa.className}`}>{member.longDescription}</p>
                                <p className={`${comfortaa.className}`}>{member.longDescription}</p>
                            </div>
                        </div>
                    </div>
                </>
            }

        </section>
    );

};

export default Card;