import React from 'react'
import Filho from './Filho'

export default props => {
    const notificarSaida =
        lugar => alert(`Liberada para  ${lugar}`)

    return (
        <div>
            <Filho notificarSaida={notificarSaida} />
        </div>
    )
}
