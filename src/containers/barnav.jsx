import {useNavigate} from "react-router-dom"

import Headers from "./headers"


export default function BarrNav() {

    const navigate = useNavigate()

    return (
        <div>
            <Headers />
            <div className="sc-33f09716-0 gtMYgZ">
                <div className="TabGroup__Container-sc-1k1eo94-0 eIWsfq w-100">
                    <div className="TabGroup__Wrapper-sc-1k1eo94-1 YAXmj">
                        <a className="TabLink__TabAnchor-sc-e9hfzw-0 bATmFG text-uppercase px-24 px-tablet-40" tabindex="0" onClick={() => navigate('/')}>
                            Inicio
                        </a>
                        <a className="TabLink__TabAnchor-sc-e9hfzw-0 bATmFG text-uppercase px-24 px-tablet-40" tabindex="0" onClick={() => navigate('/actividades')}>
                            Actividades
                        </a>
                        <a className="TabLink__TabAnchor-sc-e9hfzw-0 bATmFG text-uppercase px-24 px-tablet-40" tabindex="0" onClick={() =>navigate('/retos')}>
                            Retos
                        </a>
                    </div>
                </div>
            </div>

        </div>

    )
}


