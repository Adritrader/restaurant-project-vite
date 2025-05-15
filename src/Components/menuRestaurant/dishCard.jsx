import React from 'react';
import { GiWheat, GiPeanut, GiMilkCarton, GiShrimp, GiChickenOven } from 'react-icons/gi';
import { MdEgg, MdNoFood } from 'react-icons/md';
import menuCSS from './menuRestaurant.module.css';

const allergenIcons = {
  gluten: <GiWheat title="Gluten" />,
  nuts: <GiPeanut title="Frutos secos" />,
  dairy: <GiMilkCarton title="Lácteos" />,
  seafood: <GiShrimp title="Mariscos" />,
  eggs: <MdEgg title="Huevos" />,
  poultry: <GiChickenOven title="Aves" />,
  none: <MdNoFood title="Sin alérgenos" />
};

const DishCard = ({ dish, view }) => {
  return (
    <div className={`${menuCSS.card} ${menuCSS[view]}`}>
      <div className={menuCSS.content}>
        <h3>{dish.name}</h3>
        <p>{dish.desc}</p>
        <span className={menuCSS.price}>{dish.price}</span>

        {dish.allergens && dish.allergens.length > 0 && (
          <div className={menuCSS.allergens}>
            {dish.allergens.map((icon, index) => (
              <img key={index} src={icon} alt="alergeno" className={menuCSS.allergenIcon} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DishCard;
