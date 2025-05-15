import React, { useState } from 'react';
import menuCSS from './MenuRestaurant.module.css';

import { GiWheat, GiPeanut, GiMilkCarton, GiShrimp, GiChickenOven } from 'react-icons/gi';
import { MdEgg, MdNoFood } from 'react-icons/md';

import accras from '../../assets/images/Restaurant/appetizers/accras-bacalao.jpg';
import conch from '../../assets/images/Restaurant/appetizers/conch-fritters.jpg';
import plantain from '../../assets/images/Restaurant/appetizers/plantain-chips.jpg';
import ceviche from '../../assets/images/Restaurant/appetizers/ceviche-caribino.png';
import tostones from '../../assets/images/Restaurant/appetizers/Tostones-ajo.jpg';
import ensalada from '../../assets/images/Restaurant/appetizers/ensalada-aguacate.jpg';
import empanada from '../../assets/images/Restaurant/appetizers/empanada-caribena.jpg';
import sopa from '../../assets/images/Restaurant/appetizers/sopa-calabaza.jpg';

import ropa from '../../assets/images/Restaurant/mains/ropa-vieja.jpg';
import jerk from '../../assets/images/Restaurant/mains/jerk-chicken.jpg';
import langosta from '../../assets/images/Restaurant/mains/langosta-parrilla.jpg';
import pescado from '../../assets/images/Restaurant/mains/pescado-escalfado.jpg';
import arroz from '../../assets/images/Restaurant/mains/arroz-gandules.jpg';
import curry from '../../assets/images/Restaurant/mains/curry-camarones.png';
import mofongo from '../../assets/images/Restaurant/mains/mofongo.jpg';
import estofado from '../../assets/images/Restaurant/mains/estofado-cabra.jpg';

const allergenIcons = {
  gluten: <GiWheat title="Gluten" />,
  nuts: <GiPeanut title="Frutos secos" />,
  dairy: <GiMilkCarton title="Lácteos" />,
  seafood: <GiShrimp title="Mariscos" />,
  eggs: <MdEgg title="Huevos" />,
  poultry: <GiChickenOven title="Aves" />,
  none: <MdNoFood title="Sin alérgenos" />
};

const menuData = [
  // Appetizers
  { category: 'Appetizers', name: 'Accras de Bacalao', desc: 'Deliciosas croquetas de bacalao con especias caribeñas.', price: '$8', img: accras, allergens: ['gluten', 'seafood'] },
  { category: 'Appetizers', name: 'Conch Fritters', desc: 'Buñuelos de caracol marino con salsa picante.', price: '$9', img: conch, allergens: ['gluten', 'seafood'] },
  { category: 'Appetizers', name: 'Plantain Chips', desc: 'Crujientes chips de plátano con sal marina.', price: '$6', img: plantain, allergens: [] },
  { category: 'Appetizers', name: 'Ceviche Caribeño', desc: 'Pescado fresco marinado en cítricos y especias.', price: '$12', img: ceviche, allergens: ['seafood'] },
  { category: 'Appetizers', name: 'Sopa de Calabaza', desc: 'Crema suave de calabaza con toques de coco.', price: '$7', img: sopa, allergens: ['dairy'] },
  { category: 'Appetizers', name: 'Tostones con Ajo', desc: 'Plátanos verdes fritos con salsa de ajo.', price: '$7', img: tostones, allergens: [] },
  { category: 'Appetizers', name: 'Ensalada de Aguacate', desc: 'Fresca ensalada con aguacate y tomates.', price: '$8', img: ensalada, allergens: [] },
  { category: 'Appetizers', name: 'Empanadas Caribeñas', desc: 'Empanadas rellenas de carne o pescado.', price: '$9', img: empanada, allergens: ['gluten', 'eggs'] },
  // Mains
  { category: 'Mains', name: 'Ropa Vieja', desc: 'Carne deshebrada con especias tradicionales.', price: '$15', img: ropa, allergens: [] },
  { category: 'Mains', name: 'Jerk Chicken', desc: 'Pollo marinado con especias jamaicanas y asado.', price: '$14', img: jerk, allergens: ['poultry'] },
  { category: 'Mains', name: 'Langosta a la Parrilla', desc: 'Langosta fresca con mantequilla de ajo.', price: '$25', img: langosta, allergens: ['seafood', 'dairy'] },
  { category: 'Mains', name: 'Pescado Escalfado', desc: 'Pescado cocinado suavemente con hierbas.', price: '$18', img: pescado, allergens: ['seafood'] },
  { category: 'Mains', name: 'Arroz con Gandules', desc: 'Arroz tradicional con guisantes y especias.', price: '$10', img: arroz, allergens: [] },
  { category: 'Mains', name: 'Curry de Camarones', desc: 'Camarones en salsa de curry cremosa.', price: '$20', img: curry, allergens: ['seafood', 'dairy'] },
  { category: 'Mains', name: 'Mofongo', desc: 'Purée de plátano con ajo y chicharrón.', price: '$12', img: mofongo, allergens: [] },
  { category: 'Mains', name: 'Estofado de Cabra', desc: 'Carne de cabra cocinada lentamente con verduras.', price: '$22', img: estofado, allergens: [] },
];

const RestaurantMenu = () => {
  const [viewMode, setViewMode] = useState('grid');

  const groupedMenu = menuData.reduce((acc, dish) => {
    acc[dish.category] = acc[dish.category] || [];
    acc[dish.category].push(dish);
    return acc;
  }, {});

  return (
    <section className={`section ${menuCSS.menuSection}`}>
      <h2 className={menuCSS.title}>Menú del Caribe</h2>

      <div className={menuCSS.viewToggle}>
        <button
          className={`${menuCSS.toggleBtn} ${viewMode === 'grid' ? menuCSS.active : ''}`}
          onClick={() => setViewMode('grid')}
          aria-label="Vista en cuadrícula"
        >
          &#x25a6;
        </button>
        <button
          className={`${menuCSS.toggleBtn} ${viewMode === 'list' ? menuCSS.active : ''}`}
          onClick={() => setViewMode('list')}
          aria-label="Vista en lista"
        >
          &#x2630;
        </button>
      </div>

      {Object.entries(groupedMenu).map(([category, dishes]) => (
        <div key={category} className={menuCSS.categorySection}>
          <h3 className={menuCSS.categoryTitle}>{category}</h3>
          <div className={`${menuCSS.menuContainer} ${viewMode === 'grid' ? menuCSS.grid : menuCSS.list}`}>
            {dishes.map((dish, i) => (
              <div key={i} className={menuCSS.dishCard}>
                {viewMode === 'grid' && (
                  <>
                    <img src={dish.img} alt={dish.name} className={menuCSS.dishImage} />
                    <h4 className={menuCSS.dishName}>{dish.name}</h4>
                    <p className={menuCSS.dishDesc}>{dish.desc}</p>
                    <p className={menuCSS.dishPrice}>{dish.price}</p>
                    {dish.allergens.length > 0 && (
                      <div className={menuCSS.allergens}>
                        {dish.allergens.map((a, idx) => (
                          <span key={idx} title={a} className={menuCSS.allergenIcon}>
                            {allergenIcons[a]}
                          </span>
                        ))}
                      </div>
                    )}
                  </>
                )}
                {viewMode === 'list' && (
                  <div className={menuCSS.listLine}>
                    <span className={menuCSS.dishName}>{dish.name}</span> -{' '}
                    <span className={menuCSS.dishDesc}>{dish.desc}</span> -{' '}
                    <span className={menuCSS.dishPrice}>{dish.price}</span>
                    {dish.allergens.length > 0 && (
                      <span className={menuCSS.allergensList}>
                        {dish.allergens.map((a, idx) => (
                          <span key={idx} title={a} className={menuCSS.allergenIconList}>
                            {allergenIcons[a]}
                          </span>
                        ))}
                      </span>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default RestaurantMenu;
