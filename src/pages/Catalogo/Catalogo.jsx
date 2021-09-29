import React from 'react'
import { Productos } from '../../components/widgets/Productos'

const Catalogo = () => {
    return (
        <div className="catalogo">
            <Productos viewHeaderCounter={true}/>
        </div>
    )
}

export default Catalogo
