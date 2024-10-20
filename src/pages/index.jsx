import Headers from "../containers/barnav"
import imagen from "../img/cintillo_web_innovatech.jpg"

export default function Index() {

    return (
        <>
            <Headers />
            <Container1 />
            <Container2 />
        </>
    )
}


const Container1 = () => (
    <div className="sc-11eee2bc-0 jAwpjL" style={{
        marginTop: 120
    }}>
        <div className="sc-11eee2bc-2 cHPxBG">
            <div style={{
                width: 820, height: 250,
                backgroundImage: `url(${imagen})`,
                backgroundSize: "cover",
                display: "flex",
                alignItems: "center",
            }}>
                <button className="Button__StyledButton-sc-1gfts8g-0 gMZAES btn_loing" style={{
                    backgroundColor: "white",
                    marginTop: 140,
                    marginLeft: 105
                }}>
                    Inscripciones gratuitas
                </button>
            </div>
            <div className="sc-11eee2bc-3 eWHvSk p-16 p-tablet-24 p-laptop-40 d-flex flex-column flex-grow-1">
                <p className="Paragraph__StyledParagraph-sc-156wo7x-0 hQPBue">18-19-20 NOVIEMBRE 2024</p>
                <p className="Paragraph__StyledParagraph-sc-156wo7x-0 hQPBue">09H00 A 18H00</p>
                <p className="Paragraph__StyledParagraph-sc-156wo7x-0 hQPBue">Explanada - Aulas de
                    Posgrado/FabLab (Laboratorio de convención)</p>
            </div>
        </div>
    </div>
)

const Container2 = () => (
    <div className="sc-cb3e04ea-0 gxSeln">
        <div className="Card__Container-sc-10h519i-0 lokgCi sc-abc067c5-0 kqdPN">
            <h2 className="Heading__StyledHeading-sc-12q62of-0 kkNHpG sc-d34334de-2 jwJGzL mb-12 text-wrap">
                COORDINADORES DEL EVENTO
            </h2>
            <div className="sc-f7c6fa33-0 EVdKX">
                <p>GAD Portoviejo por parte del Centro de Emprendimiento, Tecnología e Innovación (CETI)</p>
                <p>Ministerio de Telecomunicaciones y de la Sociedad de la Información (MINTEL)</p>
                <p>Universidad Tecnológica Empresarial de Guayaquil (UTEG)</p>
            </div>
        </div>
        <div className="Card__Container-sc-10h519i-0 lokgCi sc-abc067c5-0 kqdPN">
            <h2 className="Heading__StyledHeading-sc-12q62of-0 kkNHpG sc-d34334de-2 jwJGzL mb-12 text-wrap">
                SPONSORS
            </h2>
            <div className="sc-f7c6fa33-0 EVdKX">
                <div className="sc-f7c6fa33-1 iVwNbe">
                    <img src={require("../img/LOGO-UTM.jpg")} alt="UTM-LOGO" width="350" className="sc-a28d35a8-0 fnqpil" />
                </div>
                <br />
                <div className="sc-f7c6fa33-1 iVwNbe">
                    <img src={require("../img/LOGO UTEG PNG2.png")} alt="UTEG-LOGO" width="200" />
                </div>
                <br />
                <div className="sc-f7c6fa33-1 iVwNbe">
                    <img src={require("../img/LOGO MINTEL .png")} alt="MINTEL-LOGO" width="550" />
                </div>
                <div className="sc-f7c6fa33-1 iVwNbe">
                    <img src={require("../img/escudo_vertical.png")} alt="ALCALDÍA DE PORTOVIEJO" width="550" className="sc-a28d35a8-0 fnqpil" />
                </div>
            </div>
        </div>
        <div className="Card__Container-sc-10h519i-0 lokgCi sc-abc067c5-0 kqdPN">
            <h2 className="Heading__StyledHeading-sc-12q62of-0 kkNHpG sc-d34334de-2 jwJGzL mb-12 text-wrap">
                OBJETIVOS
            </h2>
            <div className="sc-f7c6fa33-0">
                <p>
                    Promover la colaboración y el espíritu innovador entre los participantes a través de la
                    participación activa, fomentando el trabajo en equipo, la comunicación efectiva y el
                    desarrollo de habilidades estratégicas en todo momento.
                </p>
            </div>
        </div>
        <div className="Card__Container-sc-10h519i-0 lokgCi sc-abc067c5-0 kqdPN">
            <h2 className="Heading__StyledHeading-sc-12q62of-0 kkNHpG sc-d34334de-2 jwJGzL mb-12 text-wrap">
                COLABORADORES
            </h2>
            <p>
                Déjate llevar por la magia, la inmersión en el mundo de las tecnologías mediante la realidad
                virtual, inteligencias artificiales, impresión 3D e impresión laser, y de las creaciones de ideas
                innovadoras desde la academia para el mundo.
            </p>
            <p>
                Durante tres días podrás disfrutar en cualquier de nuestras actividades planificadas (IdeaTECH,
                GameTECH, ProtoTECH, OrganiCHEF II); cada una de ellas con escenarios adaptados a cada público, en
                el que se disfrutará de ciencia, tecnología, negocios, juegos inmersivos, y el diseño de cocina
                creativa con los productos autóctonos de nuestra campiña manabita. Las actividades planteadas buscan
                dar una visión de lo que depara el futuro y de cómo la academia lo está afrontando es así que:
            </p>
            <br />
            <div className="sc-f7c6fa33-0">
                <ul className="actividades">
                    <li>
                        <h4>IdeaTECH (Rompiendo esquemas)</h4>
                        <p>
                            Es un espacio para la generación de ideas y planes de negocios de base tecnológica, en el
                            cual los participantes en 3 días deberán desarrollar un prototipo de producto, poniendo en
                            juego su capacidad de resolver problemas trabajando en equipo.
                        </p>
                    </li>
                    <br />
                    <li>
                        <h4>GameTECH (Jugando con tu imaginación)</h4>
                        <p>
                            Gran campeonato de video juego League of Legends. Espacio para demostrar sus habilidades en
                            el campo de batalla virtual y se sumerjan en un ambiente de juego competitivo y trabajo en
                            equipo.
                        </p>
                    </li>
                    <br />
                    <li>
                        <h4>ProtoTECH (Rompiendo esquemas)</h4>
                        <p>
                            Espacia para aceleración de invenciones con productos terminados con capacidad de expansión
                            en mercados locales, para la solución de problemas con la aplicación de tecnología
                            disruptiva.
                        </p>
                    </li>
                    <br />
                    <li>
                        <h4>OrganiCHEF II (Sabores que transcienden)</h4>
                        <p>
                            Evento gastronómico, que busca el desarrollo creativo de los participantes con el
                            desarrollo de platos innovadores al paladar, basado en productos de la economía popular y
                            solidaria.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </div>

)


/**
 *    <div class="Card__Container-sc-10h519i-0 lokgCi sc-abc067c5-0 kqdPN">
                        <h2 class="Heading__StyledHeading-sc-12q62of-0 kkNHpG sc-d34334de-2 jwJGzL mb-12 text-wrap">
                            SPONSORS</h2>
                        <div class="sc-f7c6fa33-0 EVdKX">
                            <div class="sc-f7c6fa33-1 iVwNbe">
                                <img src="img/LOGO-UTM.jpg" alt="UTM-LOGO" width="350" class="sc-a28d35a8-0 fnqpil">
                            </div> <br>
                            <div class="sc-f7c6fa33-1 iVwNbe">
                                <img src="img/LOGO UTEG PNG2.png" alt="UTEG-LOGO" width="200">
                            </div> <br>
                            <div class="sc-f7c6fa33-1 iVwNbe">
                                <img src="img/LOGO MINTEL .png" alt="MINTEL-LOGO" width="550">
                            </div>
                            <div class="sc-f7c6fa33-1 iVwNbe">
                                <img src="img/escudo_vertical.png" alt="ALCALDÍA DE PORTOVIEJO" width="550" class="sc-a28d35a8-0 fnqpil">
                            </div>
                        </div>
                    </div>
 */
/**
 * 
 *    <div class="Card__Container-sc-10h519i-0 lokgCi sc-abc067c5-0 kqdPN">
                        <h2 class="Heading__StyledHeading-sc-12q62of-0 kkNHpG sc-d34334de-2 jwJGzL mb-12 text-wrap">
                            COORDINADORES DEL EVENTO</h2>
                        <div class="sc-f7c6fa33-0 EVdKX">
                            <p>GAD Portoviejo por parte del Centro de Emprendimiento, Tecnología e Innovación (CETI)</p>
                            <p>Ministerio de Telecomunicaciones y de la Sociedad de la Información (MINTEL)</p>
                            <p>Universidad Tecnológica Empresarial de Guayaquil (UTEG)</p>
                        </div>
                    </div>
                    <div class="Card__Container-sc-10h519i-0 lokgCi sc-abc067c5-0 kqdPN">
                        <h2 class="Heading__StyledHeading-sc-12q62of-0 kkNHpG sc-d34334de-2 jwJGzL mb-12 text-wrap">
                            SPONSORS</h2>
                        <div class="sc-f7c6fa33-0 EVdKX">
                            <div class="sc-f7c6fa33-1 iVwNbe">
                                <img src="img/LOGO-UTM.jpg" alt="UTM-LOGO" width="350" class="sc-a28d35a8-0 fnqpil">
                            </div> <br>
                            <div class="sc-f7c6fa33-1 iVwNbe">
                                <img src="img/LOGO UTEG PNG2.png" alt="UTEG-LOGO" width="200">
                            </div> <br>
                            <div class="sc-f7c6fa33-1 iVwNbe">
                                <img src="img/LOGO MINTEL .png" alt="MINTEL-LOGO" width="550">
                            </div>
                            <div class="sc-f7c6fa33-1 iVwNbe">
                                <img src="img/escudo_vertical.png" alt="ALCALDÍA DE PORTOVIEJO" width="550" class="sc-a28d35a8-0 fnqpil">
                            </div>
                        </div>
                    </div>
                    <div class="Card__Container-sc-10h519i-0 lokgCi sc-abc067c5-0 kqdPN">
                        <h2 class="Heading__StyledHeading-sc-12q62of-0 kkNHpG sc-d34334de-2 jwJGzL mb-12 text-wrap">
                            OBJETIVOS</h2>
                        <div class="sc-f7c6fa33-0">
                            <p>Promover la colaboración y el espíritu innovador entre los participantes a través de la
                                participación activa, fomentando el trabajo en equipo, la comunicación efectiva y el
                                desarrollo
                                de habilidades estratégicas en todo momento.</p>
                        </div>
                    </div>
                    <div class="Card__Container-sc-10h519i-0 lokgCi sc-abc067c5-0 kqdPN">
                        <h2 class="Heading__StyledHeading-sc-12q62of-0 kkNHpG sc-d34334de-2 jwJGzL mb-12 text-wrap">
                            COLABORADORES</h2>

                        <p>Déjate llevar por la magia, la inmersión en el mundo de las tecnologías mediante la realidad
                            virtual, inteligencias artificiales, impresión 3D e impresión laser, y de las creaciones de
                            ideas
                            innovadoras desde la academia para el mundo.</p>
                        <p>Durante tres días podrás disfrutar en cualquier de nuestras actividades planificadas
                            (IdeaTECH,
                            GameTECH, ProtoTECH, OrganiCHEF II); cada una de ellas con escenarios adaptados a cada
                            público, en el que se disfrutará de ciencia, tecnología, negocios, juegos inmersivos, y el
                            diseño
                            de cocina creativa con los productos autóctonos de nuestra campiña manabita. Las actividades
                            planteadas buscan dar una visión de lo que depara el futuro y de cómo la academia lo está
                            afrontando es así que:</p> <br>
                        <div class="sc-f7c6fa33-0">
                            <p></p>
                            <ul class="actividades">
                                <li>
                                    <h4>IdeaTECH (Rompiendo esquemas)</h4>
                                    <p>Es un espacio para la generación de ideas y planes
                                        de negocios de base tecnológica, en el cual los participantes en 3 días deberán
                                        desarrollar un prototipo de producto, poniendo en juego su capacidad de resolver
                                        problemas trabajando en equipo.</p>
                                </li> <br>
                                <li>
                                    <h4>GameTECH (Jugando con tu imaginación)</h4>
                                    <p>Gran campeonato de video juego League
                                        of Legends. Espacio para demostrar sus habilidades en el campo de batalla
                                        virtual y se
                                        sumerjan en un ambiente de juego competitivo y trabajo en equipo.</p>
                                </li><br>
                                <li>
                                    <h4>ProtoTECH (Rompiendo esquemas)</h4>
                                    <p>Espacia para aceleración de invenciones con
                                        productos terminados con capacidad de expansión en mercados locales, para la
                                        solución de problemas con la aplicación de tecnología disruptiva.</p>
                                </li><br>
                                <li>
                                    <h4>OrganiCHEF II (Sabores que transcienden)</h4>
                                    <p>Evento gastronómico, que busca el
                                        desarrollo creativo de los participantes con el desarrollo de platos innovadores
                                        al
                                        paladar, basado en productos de la economía popular y solidaria.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
 */