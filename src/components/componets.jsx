export const Events = ({ evento, hora }) => (
    <div style={{
        display:"flex",flexDirection:"row",gap:12
    }}>
        <span style={{
            fontSize:18,fontWeight:"600"
        }}>
            {evento}
        </span>
        <span style={{
        }}>
            hora {hora}
        </span>
    </div>
)

export const Category = ({ title, url }) => (
    <div style={{
        display: "flex", flexDirection: "row", gap: 10, alignItems: "center",marginBottom:8, 
    }}>
        <h3 style={{
            fontSize:26,fontWeight:"bold"
        }}>
            {title}
        </h3>
        <img width="50" height="50" src={url} alt={`icon-${title}`} />
    </div>
)