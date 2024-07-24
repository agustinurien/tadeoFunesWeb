import Image from "next/image"
import "../equipamiento/equip.css"
import separacion from "../../../public/assets/separacionFooter2.png"
import barco from "../../../public/assets/bracoEquip.png"
import { comfortaa, sora } from "@/app/fonts"
const Equipamiento = () => {
    return (
        <div className="equipamientoSection">
            <h2 className={`${sora.className}`}>EQUIPAMIENTO</h2>
            <section className="equipamiento">
                <div className="dataEquipamiento">
                    <div className={`${sora.className} categoria`}>

                        <h3>Categoria</h3>

                        <p className={`${comfortaa.className}`}>El 49er es una clase internacional de embarcación a vela,
                            diseñada por el australiano Julian Bethwaite. Es clase olímpica
                            desde los Juegos Olímpicos de Sydney 2000. El 49er es un barco
                            inusual en el que ambos tripulantes controlan el trimado de las
                            velas conjuntamente, y desde el trapecio. El uso de las alas
                            sólidas, facilita el movimiento rápido a través del 49er durante
                            las maniobras. Y una gran velocidad de navegación.
                        </p>
                        <div className="categoriaSpan">
                            <span>Clase olímpica de dos navegantes
                                (2 male skiff)</span>
                            <span>Barco de alta velocidad</span>
                        </div>
                    </div>
                    <div className={`${sora.className} embarcacion`}>

                        <h3>Embarcacion</h3>
                        <span>Principales datos del barco</span>
                        <ul className={`${comfortaa.className}`}>
                            <li>
                                <strong>Tipo de Embarcación:</strong>
                                SKIFF
                            </li>
                            <li><strong>Diseñador:</strong> Julian Bethwaite</li>
                            <li><strong>Cantidad de Tripulantes:</strong> 2 personas</li>
                            <li><strong>Eslora:</strong> 499 cm.</li>
                            <li><strong>Manga:</strong> 290 cm.</li>
                            <li><strong>Superficies Mayor:</strong> 16.1 m2</li>
                            <li><strong>Superficie Foque:</strong> 5.1m2</li>
                            <li><strong>Superficie SPI:</strong> 38m2</li>
                            <li><strong>Peso:</strong> 70 Kg</li>
                            <li><strong>Pesoóptimo:</strong> 145165Kg</li>
                        </ul>
                    </div>
                </div>
                <div className="contenedorImageEquip">
                    <Image
                        src={barco}
                        width={3000}
                        height={3000}
                        alt="barco"
                        className="imageEquip"
                        priority={true}
                    />
                </div>
            </section>
            <div className="contenedorSeparacion">
                <Image
                    src={separacion}
                    width={1000}
                    height={1000}
                    alt="separacion"
                    className="separacion"
                    priority={true}
                />
            </div>
        </div>
    )
}

export default Equipamiento
