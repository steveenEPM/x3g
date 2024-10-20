import Headers from "../containers/barnav"
import Days1 from "../containers/day1"
import Days2 from "../containers/day2"
import Days3 from "../containers/day3"


import imagen from "../img/cintillo_web_innovatech.jpg"



export default function () {

    return (
        <>
            <Headers />
            <Container1 />
            <Container2 />
            <Container3/>
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

    <div className="Card__Container-sc-10h519i-0 lokgCi sc-abc067c5-0 kqdPN" style={{
        marginLeft:120
    }}>
        <h2 className="Heading__StyledHeading-sc-12q62of-0 kkNHpG sc-d34334de-2 jwJGzL mb-12 text-wrap">
            ACTIVIDADES
        </h2>
        <p>
            Déjate llevar por la magia, la inmersión en el mundo de las tecnologías mediante la realidad
            virtual, inteligencias artificiales, impresión 3D e impresión laser, y de las creaciones de
            ideas
            innovadoras desde la academia para el mundo.
        </p>
        <p>
            Durante tres días podrás disfrutar en cualquier de nuestras actividades planificadas
            (IdeaTECH,
            GameTECH, ProtoTECH, OrganiCHEF II); cada una de ellas con escenarios adaptados a cada
            público, en el que se disfrutará de ciencia, tecnología, negocios, juegos inmersivos, y el
            diseño
            de cocina creativa con los productos autóctonos de nuestra campiña manabita. Las actividades
            planteadas buscan dar una visión de lo que depara el futuro y de cómo la academia lo está
            afrontando es así que:
        </p>
    </div>
)


const Container3 = ()=> (
    <div className="Card__Container-sc-10h519i-0 lokgCi sc-abc067c5-0 kqdPN" style={{
        marginLeft:120, marginTop:40,display:"flex",flexDirection:"column",gap:100
    }}> 
        <Days1/>
        <Days2/>
        <Days3/>
    </div>
)