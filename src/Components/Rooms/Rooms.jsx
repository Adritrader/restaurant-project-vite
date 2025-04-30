import React from 'react'
import roomsCSS from '../Rooms/Rooms.module.css'

function Rooms() {
  return (
    <div className={`${roomsCSS.Rooms_container} section`}>

        <small className='secation__Heading'>Suites</small>
        <h2 className="section__Title">Nuestras mejores <span>Suites</span></h2>

        <div className={roomsCSS.cards}>

            <div className={roomsCSS.card_Container}>
                <div className={roomsCSS.card}>
                    <div className={`${roomsCSS.Card_front} ${roomsCSS.Card_front1}`}>

                        <button>Suite</button>

                    </div>
                    <div className={roomsCSS.Card_back}>
                        <div className={roomsCSS.price}>

                            <h3>450€ / Noche</h3>


                        </div>
                        <div className={roomsCSS.Card_content}>
                            <h3>Suite</h3>
                            <p>Cama King Size</p>
                            <p>Jacuzzi</p>
                            <p>TV plasma 75"</p>
                            <p>Limpieza diaria</p>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Rooms
