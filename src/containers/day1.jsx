import { useEffect } from "react";
import { Events, Category } from "../components/componets"
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
                fontSize: 50, color: "#c1121f"
            }}>
                DIA 1 (18 Noviembre)
            </strong>
            <div style={{
                display: "flex", flexDirection: "row", gap: 12, alignItems: "center", padding: 12
            }}>
                <h3 style={{
                    fontSize: 25
                }}>
                    Inauguración Evento
                </h3>
                <span style={{
                    fontSize: 15, marginTop: 2
                }}>
                    Hora 9:00
                </span>
            </div>
            <div style={{
                display: "flex", flexDirection: "row", gap: 12, alignItems: "center", padding: 12
            }}>
                <span style={{ fontWeight: "600", fontSize: 18, maxWidth: "80%" }}>
                    Charla Magistral Innovación - Presencial
                    <strong>Industria, Innovación y Sostenibilidad</strong>
                    Fabiano Ferreira de Paula
                </span>
                <span>
                    Hora 9:00
                </span>
            </div>

            <div style={{
                display:"flex",flexDirection:"column",gap:30
            }}>
                <Games />
                <Ideacion />
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
                <Events evento={"2 Partidas 4 grupos"} hora={"11:00"} />
                <Events evento={"2 Partidas 4 grupos"} hora={"12:00"} />
                <Events evento={"2 Partidas 4 grupos"} hora={"13:00"} />
                <Events evento={"Almuerzo"} hora={"14:00"} />
                <Events evento={"2 Partidas 4 grupos"} hora={"15:00"} />
                <Events evento={"2 Partidas 4 grupos"} hora={"16:00"} />
            </div>
        </div>
      
    </div>
)


const Ideacion = () => (
    <div className="days day_inv">
        <div>
            <Category title={"Ideación"} url={"https://img.icons8.com/ios-filled/50/innovation.png"} />
            <div style={{
                display: "flex", flexDirection: "column", gap: 8,
            }}>
                <Events evento={"Conformación de Equipos"} hora={"11:00"} />
                <Events evento={"Capacitación motivación a la innovación"} hora={"12:00"} />
                <Events evento={"Capacitación pensamiento de diseño"} hora={"13:00"} />
                <Events evento={"Almuerzo"} hora={"14:00"} />
                <Events evento={"Preparación y presentación de idas"} hora={"15:00"} />
                <Events evento={"Preparación y presentación de idas"} hora={"16:00"} />
                <Events evento={"Capacitación estudio de mercadeo"} hora={"17:00"} />
                <Events evento={"Diseño y aplicación de instrumento de mercado mercadeo"} hora={"18:00"} />
            </div>
        </div>

     
    </div>
)

