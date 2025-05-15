import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import roomsCSS from '../Rooms/Rooms.module.css';
import 'swiper/swiper-bundle.css';

// Importación individual de imágenes
import suitePremium1 from '/src/assets/images/suite-premium1.jpg';
import suitePremium2 from '/src/assets/images/suite-premium2.jpg';
import suitePremium4 from '/src/assets/images/suite-premium4.jpg';
import suitePremium6 from '/src/assets/images/suite-premium6.jpg';
import suiteDeluxe1 from '/src/assets/images/suite-deluxe1.jpg';
import suiteDeluxe2 from '/src/assets/images/suite-deluxe2.jpg';
import suiteDeluxe4 from '/src/assets/images/suite-deluxe4.jpg';
import suiteDeluxe5 from '/src/assets/images/suite-deluxe5.jpg';
import suiteDeluxe6 from '/src/assets/images/suite-deluxe6.jpg';
import suiteDeluxe7 from '/src/assets/images/suite-deluxe7.jpg';
import suiteJunior1 from '/src/assets/images/suite-junior1.jpg';
import suiteJunior2 from '/src/assets/images/suite-junior2.jpg';
import bathRoom1 from '/src/assets/images/bath-room1.jpg';
import bathRoom2 from '/src/assets/images/bath-room2.jpg';
import simpleRoom1 from '/src/assets/images/simple-room1.jpg';
import simpleRoom2 from '/src/assets/images/simple-room2.jpg';
import suiteExecutive from '/src/assets/images/suite-executive1.jpg';


function Rooms() {
  const [activeRoom, setActiveRoom] = useState(null);

  const availableImages = [
    suitePremium1, suitePremium2, suitePremium4, suiteDeluxe1, suiteDeluxe2,
    suiteDeluxe4, suiteDeluxe5, suiteDeluxe7, suiteJunior1, suiteJunior2, simpleRoom1, simpleRoom2, suiteExecutive
    
  ];

  const usedImagesFront = [];
  const usedImagesBack = [];

  const getRandomImage = (images, usedImages) => {
    const available = images.filter(img => !usedImages.includes(img));
    const random = available[Math.floor(Math.random() * available.length)];
    usedImages.push(random);
    return random;
  };

  const roomData = {
    suites: [
      {
        name: 'Suite Premium',
        price: '450€ / Noche',
        features: ['Cama King Size', 'Jacuzzi', 'TV plasma 75"', 'Limpieza diaria'],
        frontStyle: getRandomImage(availableImages, usedImagesFront),
        backStyle: getRandomImage(availableImages, usedImagesBack),
        images: [suitePremium2, suitePremium4, suitePremium6, bathRoom1]
      },
      {
        name: 'Suite Deluxe',
        price: '380€ / Noche',
        features: ['Cama Queen Size', 'Vista al mar', 'TV 60"', 'Servicio a la habitación'],
        frontStyle: getRandomImage(availableImages, usedImagesFront),
        backStyle: getRandomImage(availableImages, usedImagesBack),
        images: [suiteDeluxe1, suiteDeluxe2, suiteDeluxe4, suiteDeluxe5, suiteDeluxe6, suiteDeluxe7]
      },
      {
        name: 'Suite Junior',
        price: '380€ / Noche',
        features: ['Cama Queen Size', 'Vista al mar', 'TV 60"', 'Servicio a la habitación'],
        frontStyle: getRandomImage(availableImages, usedImagesFront),
        backStyle: getRandomImage(availableImages, usedImagesBack),
        images: [suiteJunior1, suiteJunior2, bathRoom2]
      }
    ],
    rooms: [
      {
        name: 'Habitación Individual',
        price: '150€ / Noche',
        features: ['Cama Individual', 'Escritorio', 'TV 32"', 'Aire acondicionado'],
        frontStyle: getRandomImage(availableImages, usedImagesFront),
        backStyle: getRandomImage(availableImages, usedImagesBack),
        images: [simpleRoom1, simpleRoom2]
      },
      {
        name: 'Habitación Doble',
        price: '200€ / Noche',
        features: ['Cama Doble', 'Escritorio', 'TV 42"', 'Baño privado'],
        frontStyle: getRandomImage(availableImages, usedImagesFront),
        backStyle: getRandomImage(availableImages, usedImagesBack),
        images: [suiteDeluxe1, suiteDeluxe2, suiteDeluxe4, suiteDeluxe5, bathRoom2]
      },
      {
        name: 'Habitación Twin',
        price: '180€ / Noche',
        features: ['Dos camas individuales', 'TV 40"', 'Escritorio', 'Aire acondicionado'],
        frontStyle: getRandomImage(availableImages, usedImagesFront),
        backStyle: getRandomImage(availableImages, usedImagesBack),
        images: [suiteExecutive, bathRoom1]
      }
    ]
  };

  const renderRoomCard = (room) => (
    <div className={roomsCSS.card_Container} key={room.name}>
      <div className={roomsCSS.card}>
        <div className={`${roomsCSS.Card_front}`} style={{ backgroundImage: `url(${room.frontStyle})` }}>
          <h3>{room.name}</h3>
        </div>
        <div className={roomsCSS.Card_back} style={{ backgroundImage: `url(${room.backStyle})` }}>
          <div className={roomsCSS.price}>
            <h3>{room.price}</h3>
          </div>
          <div className={roomsCSS.Card_content}>
            <h3>{room.name}</h3>
            {room.features.map((feature, index) => <p key={index}>{feature}</p>)}
            <button
              className={roomsCSS.viewMoreBtn}
              onClick={() => setActiveRoom(room)}
            >
              Ver más
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`${roomsCSS.Rooms_container} section`}>
      <small className='section__Heading'>Suites</small>
      <h2 className="section__Title">Nuestras mejores <span>Suites</span></h2>
      <div className={roomsCSS.cards}>
        {roomData.suites.map((room) => renderRoomCard(room))}
      </div>

      <small className='section__Heading'>Habitaciones</small>
      <h2 className="section__Title">Nuestras mejores <span>Habitaciones</span></h2>
      <div className={roomsCSS.cards}>
        {roomData.rooms.map((room) => renderRoomCard(room))}
      </div>

      {activeRoom && (
        <div className={roomsCSS.modalOverlay} onClick={() => setActiveRoom(null)}>
          <div className={roomsCSS.modalContent} onClick={(event) => event.stopPropagation()}>
            <h2>{activeRoom.name}</h2>
            <Swiper spaceBetween={20} slidesPerView={1}>
              {activeRoom.images.map((source, index) => (
                <SwiperSlide key={index}>
                  <img src={source} alt={`Foto ${index}`} />
                </SwiperSlide>
              ))}
            </Swiper>
            <button className={roomsCSS.closeModal} onClick={() => setActiveRoom(null)}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Rooms;
