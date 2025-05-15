import React from 'react';


import menuCSS from './MenuRestaurant.module.css';

//Appetizers

import accras from '../../assets/images/Restaurant/appetizers/accras-bacalao.jpg';
import conch from '../../assets/images/Restaurant/appetizers/conch-fritters.jpg';
import plantain from '../../assets/images/Restaurant/appetizers/plantain-chips.jpg';
import ceviche from '../../assets/images/Restaurant/appetizers/ceviche-caribino.png';
import tostones from '../../assets/images/Restaurant/appetizers/Tostones-ajo.jpg';
import ensalada from '../../assets/images/Restaurant/appetizers/ensalada-aguacate.jpg';
import empanada from '../../assets/images/Restaurant/appetizers/empanada-caribena.jpg';
import sopa from '../../assets/images/Restaurant/appetizers/sopa-calabaza.jpg';

//Mains

import ropa from '../../assets/images/Restaurant/mains/ropa-vieja.jpg';
import jerk from '../../assets/images/Restaurant/mains/jerk-chicken.jpg';
import langosta from '../../assets/images/Restaurant/mains/langosta-parrilla.jpg';
import pescado from '../../assets/images/Restaurant/mains/pescado-escalfado.jpg';
import arroz from '../../assets/images/Restaurant/mains/arroz-gandules.jpg';
import curry from '../../assets/images/Restaurant/mains/curry-camarones.png';
import mofongo from '../../assets/images/Restaurant/mains/mofongo.jpg';
import estofado from '../../assets/images/Restaurant/mains/estofado-cabra.jpg';


const menuData = {
  appetizers: [
    { name: 'Accras de Bacalao', desc: 'Deliciosas croquetas de bacalao con especias caribeñas.', price: '$8', img: accras},
    { name: 'Conch Fritters', desc: 'Buñuelos de caracol marino con salsa picante.', price: '$9', img: conch },
    { name: 'Plantain Chips', desc: 'Crujientes chips de plátano con sal marina.', price: '$6', img: plantain },
    { name: 'Ceviche Caribeño', desc: 'Pescado fresco marinado en cítricos y especias.', price: '$12', img: ceviche },
    { name: 'Sopa de Calabaza', desc: 'Crema suave de calabaza con toques de coco.', price: '$7', img: sopa },
    { name: 'Tostones con Ajo', desc: 'Plátanos verdes fritos con salsa de ajo.', price: '$7', img: tostones },
    { name: 'Ensalada de Aguacate', desc: 'Fresca ensalada con aguacate y tomates.', price: '$8', img: ensalada },
    { name: 'Empanadas Caribeñas', desc: 'Empanadas rellenas de carne o pescado.', price: '$9', img: empanada },
  ],
  mains: [
    { name: 'Ropa Vieja', desc: 'Carne deshebrada en salsa de tomate con especias.', price: '$18', img: ropa },
    { name: 'Jerk Chicken', desc: 'Pollo marinado al estilo jamaicano con especias ahumadas.', price: '$20', img: jerk },
    { name: 'Langosta a la Parrilla', desc: 'Langosta fresca con mantequilla de ajo y limón.', price: '$35', img: langosta },
    { name: 'Pescado Escalfado', desc: 'Pescado local cocido en salsa criolla.', price: '$22', img: pescado },
    { name: 'Arroz con Gandules', desc: 'Arroz con guisantes, especias y carne de cerdo.', price: '$16', img: arroz },
    { name: 'Curry de Camarones', desc: 'Camarones en salsa de curry con coco y especias.', price: '$24', img: curry},
    { name: 'Mofongo', desc: 'Plátano macho machacado con ajo y chicharrón.', price: '$19', img: mofongo },
    { name: 'Estofado de Cabra', desc: 'Carne de cabra cocida lentamente con hierbas.', price: '$21', img: estofado },
  ],
  desserts: [
    { name: 'Rum Cake', desc: 'Bizcocho húmedo con sabor a ron y especias.', price: '$7' },
    { name: 'Tropical Fruit Salad', desc: 'Ensalada fresca con frutas locales del Caribe.', price: '$6' },
    { name: 'Flan de Coco', desc: 'Flan tradicional con esencia de coco.', price: '$7' },
    { name: 'Helado de Guayaba', desc: 'Helado cremoso hecho con guayaba natural.', price: '$5' },
    { name: 'Pudin de Pan', desc: 'Postre de pan dulce con especias y caramelo.', price: '$6' },
    { name: 'Dulce de Tamarindo', desc: 'Dulce típico con sabor a tamarindo.', price: '$6' },
    { name: 'Pastel de Yuca', desc: 'Pastel tradicional hecho con yuca y queso.', price: '$7' },
    { name: 'Helado de Coco', desc: 'Helado cremoso con sabor a coco natural.', price: '$5' },
  ],
  drinks: [
    { name: 'Ti Punch', desc: 'Cóctel tradicional con ron, lima y azúcar.', price: '$10' },
    { name: 'Sorrel Drink', desc: 'Bebida refrescante de flor de jamaica y especias.', price: '$8' },
    { name: 'Piña Colada', desc: 'Cóctel cremoso de piña, coco y ron.', price: '$12' },
    { name: 'Agua de Coco Natural', desc: 'Agua fresca directamente del coco.', price: '$5' },
    { name: 'Mojito Caribeño', desc: 'Ron, hierbabuena, lima y azúcar.', price: '$11' },
    { name: 'Punch de Frutas', desc: 'Mezcla tropical de jugos con ron.', price: '$9' },
    { name: 'Café Caribeño', desc: 'Café con especias y un toque de ron.', price: '$6' },
    { name: 'Batido de Mango', desc: 'Batido fresco de mango natural.', price: '$7' },
  ],
};

const MenuRestaurant = () => {
  return (
    <section className={`${menuCSS.menu_container} section`}>
      <small className='section__Heading'>Menú Caribeño</small>
      <h2 className="section__Title">Sabores de <span>Santa Lucía & St. Martin</span></h2>

      {Object.entries(menuData).map(([category, dishes]) => (
        <div key={category} className={menuCSS.menu_category}>
          <h3 className={menuCSS.category_title}>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
          <div className={menuCSS.dishes_grid}>
            {dishes.map(({ name, desc, price, img }, index) => (
              <div key={index} className={menuCSS.dish_card}>
                <div className={menuCSS.dish_image_wrapper}>
                  <img src={img} alt={name} className={menuCSS.dish_image} />
                </div>
                
                <div className={menuCSS.dish_info}>
                  <h4 className={menuCSS.dish_name}>{name}</h4>
                  <p className={menuCSS.dish_desc}>{desc}</p>
                  <span className={menuCSS.dish_price}>{price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default MenuRestaurant;
