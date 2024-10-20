import Headers from "../containers/barnav"
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function () {

    useEffect(() => {
        AOS.init({
          duration: 1200, // Puedes personalizar la duración de las animaciones
        });
      }, []);


    return (
        <>
            <Headers />
            <div style={{
                marginTop: 200, backgroundColor: "#ffffff", gap: 40, paddingBlock: 20, paddingInline: 100,marginInline:120,display:"flex",flexDirection:"column"
            }}>
                <Container1
                    title={"Seguridad"} index={"01"}
                    descipcion={"Soluciones relacionadas con: Ciberseguridad urbana, alertas tempranas, vigilancia inteligente, y Seguridad Ciudadana con tecnología disruptiva."}

                />
                <Container1
                    title={"Empleo"} index={"02"}
                    descipcion={"Soluciones en el campo de la economía digital, en la cual al uso de las tecnologías de la información mejore los procesos  de producción de bienes y servicios, así como en su comercialización y consumo"}

                />
                <Container1
                    title={"Salud"} index={"03"}
                    descipcion={"Soluciones para dinamizar la transformación digital y ooptimizar los proceso de atención de salud de los prestadores de servicio público y/o privado"}

                />
                <Container1
                    title={"Arquitectura"} index={"04"}
                    descipcion={"Soluciones de agricultura y/o ganadería, en el marco de que mejora productiva en las zonas de influencia."}

                />
            </div>

        </>
    )
}

const Container1 = ({ title, descipcion, index }) => (
    <div data-aos="fade-right" style={{
        display: "flex", flexDirection: "row", gap: 12,alignItems:"center",
        border:"1px solid", borderRadius:20, paddingBlock:30,paddingInline:40
    }}>
        <div style={{
            display: "flex", flexDirection: "column", gap: 8,alignItems:"center",
            minWidth:350
        }}>
            <label style={{
                fontSize: 50
            }}>
                {index}
            </label>
            <h3 style={{
                fontWeight: "bold", fontSize: 35
            }}>
                {title}
            </h3>
        </div>
        <label style={{
        
        }}>
            {descipcion}
        </label>
    </div>
)