import { Events, Category } from "../components/componets"
import { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Days1() {

    useEffect(() => {
        AOS.init({
          duration: 1200, // Puedes personalizar la duración de las animaciones
        });
      }, []);

    return (
        <div  data-aos="fade-up">
            <strong style={{
                fontSize: 50, color: "#c1121f", marginBottom: 20
            }}>
                DIA 3 (20 Noviembre)
            </strong>
            <div style={{
                display: "flex", flexDirection: "column", gap: 30

            }}>
                <Games />
                <Prototipos />
                <Ideacion />
                <Conferencias />
            </div>

            <div style={{
                display: "flex", flexDirection: "row", gap: 12, alignItems: "center", padding: 12, marginTop:40
            }}>
                <span style={{ fontWeight: "600", fontSize: 18, maxWidth: "80%" }}>
                    PREMIACIÓN, Espacio artístico, Networking, Autoridades y Entrega de reconocimientos
                </span>
                <span>
                    Hora 15:00 a 18:00
                </span>
            </div>

        </div>
    )
}


const Games = () => (
    <div className="days">

        <div>
            <Category title={"Videojuegos"} url={"https://img.icons8.com/ios-filled/50/controller.png"} />
            <div style={{
                display: "flex", flexDirection: "column", gap: 8, flex: 1
            }}>
                <Events evento={"Final"} hora={"09:00 a 13:00"} />

            </div>
        </div>

    </div>
)

const Prototipos = () => (
    <div className="days day_inv">
        <div>
            <Category title={"Prototipo"} url={"https://img.icons8.com/ios-filled/50/design--v1.png"} />
            <div style={{
                display: "flex", flexDirection: "column", gap: 8, flex: 1
            }}>

                <Events evento={"Reuniones con inversores"} hora={"09:00 a 13:00"} />
            </div>
        </div>

    </div>
)

const Ideacion = () => (
    <div className="days ">
        <div>
            <Category title={"Ideación"} url={"https://img.icons8.com/ios-filled/50/innovation.png"} />
            <div style={{
                display: "flex", flexDirection: "column", gap: 8,
            }}>
                <Events evento={"Ajustes de Pitch"} hora={"09:00 a 13:00"} />

            </div>
        </div>


    </div>
)


const Conferencias = () => (
    <div className="days day_inv">
        <div>
            <Category title={"Conferencias y Negocios"} url={"https://img.icons8.com/ios-filled/50/omnichannel.png"} />
            <div style={{
                display: "flex", flexDirection: "column", gap: 8,
            }}>
                <Events evento={"Mesa Redonda 2 Virtual-Internacional (UCO- UCAM)+ 2 Presencial-Nacional Tema:Relación universidad EmpresaPara: Responsables de TT,"} hora={"11:00 a 12:00"} />


            </div>
        </div>

    </div>
)