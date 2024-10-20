import { useEffect } from "react";

import { Events, Category } from "../components/componets"
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Days2() {

    useEffect(() => {
        AOS.init({
          duration: 1200, // Puedes personalizar la duración de las animaciones
        });
      }, []);

    return (
        <div  data-aos="fade-up">
            <strong style={{
                fontSize: 50, color: "#c1121f",marginBottom:20
            }}>
                DIA 2 (19 Noviembre)
            </strong>
            <div style={{
                display: "flex", flexDirection: "column", gap: 30

            }}>
                <Games />
                <Prototipos />
                <Ideacion />
                <Conferencias />
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
                <Events evento={"2 Partidas 4 grupos"} hora={"09:00"} />
                <Events evento={"2 Partidas 4 grupos"} hora={"10:00"} />
                <Events evento={"2 Partidas 4 grupos"} hora={"11:00"} />
                <Events evento={"2 Partidas 4 grupos"} hora={"12:00"} />
                <Events evento={"2 Partidas 4 grupos"} hora={"13:00"} />
                <Events evento={"Semifinal"} hora={"15:00 a 18:00"} />

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
                <Events evento={"Ubicación en Stand"} hora={"09:00"} />
                <Events evento={"Presentación de inventos / Evaluación"} hora={"10:00 a 13:00"} />
                <Events evento={"Reuniones con inversores"} hora={"15:00 a 18:00"} />
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
                <Events evento={"Modelado de idea"} hora={"09:00 a 13:00"} />
                <Events evento={"Capacitacion en costos"} hora={"15:00"} />
                <Events evento={"Arma tu Pitch-Capacitación"} hora={"16:00"} />
                <Events evento={"Memoria para el model de negocio"} hora={"17:00"} />
                <Events evento={"Mentoria para el modelo de negocio"} hora={"18:00"} />
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
                <Events evento={"Mesa Redonda 2 Virtual - Internacional (UMA,UGR)+ 2 Presencial - Nacional Tema: Acreditación internacional incubadoras"} hora={"11:00 a 12:00"} />
                <Events evento={"Conferencia la IA en el desarrollo de la Innovación"} hora={"16:00"} />
                <Events evento={"La incidencia de la IA en la seguridad jurídica de las personas - Ing. Lorena Mahecha, Msc"} hora={"17:00"} />

            </div>
        </div>

    </div>
)