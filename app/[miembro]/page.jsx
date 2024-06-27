"use client"
import jorge from "../../public/assets/jorge.jpg";
import tadeo from "../../public/assets/tadeo.jpg";
import hernan from "../../public/assets/jorge.jpg";
import ale from "../../public/assets/jorge.jpg";
import klaus from "../../public/assets/jorge.jpg";
import martin from "../../public/assets/jorge.jpg";

import { FaFacebook, FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter, FaSquareInstagram, FaXTwitter } from "react-icons/fa6";
import "../[miembro]/miembro.css";
import { useEffect, useState } from "react";
import { comfortaa, sora } from "../fonts";
import Image from "next/image";
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
                                <Image
                                    width={1000}
                                    height={1000}
                                    src={member.imgurl}
                                    alt={member.name}
                                    className="imageMember" />
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