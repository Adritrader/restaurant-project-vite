import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import roomsCSS from '../Rooms/Rooms.module.css';
import 'swiper/swiper-bundle.css';

function Rooms() {
  const [activeRoom, setActiveRoom] = useState(null);

  // Función para obtener imágenes aleatorias sin repeticiones
  const getRandomImage = (images, usedImages) => {
    const availableImages = images.filter(image => !usedImages.includes(image));
    const randomImage = availableImages[Math.floor(Math.random() * availableImages.length)];
    usedImages.push(randomImage);  // Añadir la imagen seleccionada a las usadas
    return randomImage;
  };

  // Conjunto de imágenes disponibles para front y back
  const availableImages = [
    '/src/assets/images/suite-premium1.jpg',
    '/src/assets/images/suite-premium2.jpg',
    '/src/assets/images/suite-premium4.jpg',
    '/src/assets/images/suite-deluxe1.jpg',
    '/src/assets/images/suite-deluxe2.jpg',
    '/src/assets/images/suite-deluxe4.jpg',
    '/src/assets/images/suite-deluxe5.jpg',
    '/src/assets/images/suite-deluxe7.jpg',
    '/src/assets/images/suite-junior1.jpg',
    '/src/assets/images/suite-junior2.jpg',
    '/src/assets/images/home-hotel1.jpg',
    '/src/assets/images/home-hotel2.jpg',
    '/src/assets/images/home-hotel3.jpg'
  ];

  // Para asegurar que no se repiten las imágenes
  const usedImagesFront = [];
  const usedImagesBack = [];

  const roomData = {
    suites: [
      {
        name: 'Suite Premium',
        price: '450€ / Noche',
        features: ['Cama King Size', 'Jacuzzi', 'TV plasma 75"', 'Limpieza diaria'],
        frontStyle: getRandomImage(availableImages, usedImagesFront),
        backStyle: getRandomImage(availableImages, usedImagesBack),
        images: [
          '/src/assets/images/suite-premium2.jpg',
          '/src/assets/images/suite-premium4.jpg',
          '/src/assets/images/suite-premium6.jpg',
          '/src/assets/images/bath-room1.jpg'
        ]
      },
      {
        name: 'Suite Deluxe',
        price: '380€ / Noche',
        features: ['Cama Queen Size', 'Vista al mar', 'TV 60"', 'Servicio a la habitación'],
        frontStyle: getRandomImage(availableImages, usedImagesFront),
        backStyle: getRandomImage(availableImages, usedImagesBack),
        images: [
          '/src/assets/images/suite-deluxe1.jpg',
          '/src/assets/images/suite-deluxe2.jpg',
          '/src/assets/images/suite-deluxe4.jpg',
          '/src/assets/images/suite-deluxe5.jpg',
          '/src/assets/images/suite-deluxe6.jpg',
          '/src/assets/images/suite-deluxe7.jpg'
        ]
      },
      {
        name: 'Suite Junior',
        price: '380€ / Noche',
        features: ['Cama Queen Size', 'Vista al mar', 'TV 60"', 'Servicio a la habitación'],
        frontStyle: getRandomImage(availableImages, usedImagesFront),
        backStyle: getRandomImage(availableImages, usedImagesBack),
        images: [
          '/src/assets/images/suite-junior1.jpg',
          '/src/assets/images/suite-junior2.jpg'
        ]
      }
    ],

    rooms: [
      {
        name: 'Habitación Individual',
        price: '150€ / Noche',
        features: ['Cama Individual', 'Escritorio', 'TV 32"', 'Aire acondicionado'],
        frontStyle: getRandomImage(availableImages, usedImagesFront),
        backStyle: getRandomImage(availableImages, usedImagesBack),
        images: [
          '/src/assets/images/home-hotel1.jpg',
          '/src/assets/images/home-hotel2.jpg'
        ]
      },
      {
        name: 'Habitación Doble',
        price: '200€ / Noche',
        features: ['Cama Doble', 'Escritorio', 'TV 42"', 'Baño privado'],
        frontStyle: getRandomImage(availableImages, usedImagesFront),
        backStyle: getRandomImage(availableImages, usedImagesBack),
        images: [
          '/src/assets/images/home-hotel3.jpg',
          '/src/assets/images/home-hotel2.jpg'
        ]
      },
      {
        name: 'Habitación Twin',
        price: '180€ / Noche',
        features: ['Dos camas individuales', 'TV 40"', 'Escritorio', 'Aire acondicionado'],
        frontStyle: getRandomImage(availableImages, usedImagesFront),
        backStyle: getRandomImage(availableImages, usedImagesBack),
        images: [
          '/src/assets/images/home-hotel1.jpg',
          '/src/assets/images/home-hotel3.jpg'
        ]
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
      {/* Suites Section */}
      <small className='section__Heading'>Suites</small>
      <h2 className="section__Title">Nuestras mejores <span>Suites</span></h2>
      <div className={roomsCSS.cards}>
        {roomData.suites.map((room) => renderRoomCard(room))}
      </div>

      {/* Rooms Section */}
      <small className='section__Heading'>Habitaciones</small>
      <h2 className="section__Title">Nuestras mejores <span>Habitaciones</span></h2>
      <div className={roomsCSS.cards}>
        {roomData.rooms.map((room) => renderRoomCard(room))}
      </div>

      {/* Modal */}
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
