import {useMemo} from "react";
import {useSelector} from "react-redux";
import { useDrag } from "react-dnd/dist/hooks";
import PropTypes from "prop-types";
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import style from './BurgerIngredient.module.css'
import ingredientPropType from '../../utils/prop-types';

const BurgerIngredient = ({ingredient, onClick}) => {
  const {bun, ingredients: constructorIngredients} = useSelector(state => state.constructorStore);

  const countIngredient = useMemo(() => id =>
    [bun, ...constructorIngredients, bun]?.filter(ingredient => ingredient?._id === id).length, [bun, constructorIngredients])

  const [{ isDrag }, drag, dragPreview] = useDrag({
    type: 'ingredient',
    item: ingredient,
    collect: monitor => ({
      isDrag: monitor.isDragging()
    })
  });
  
  return (
    <div className={style.ingredient__wrap} onClick={onClick} ref={drag}>
      <img className={style.ingredient__image} src={ingredient.image} alt={ingredient.name}/>
      {countIngredient(ingredient._id) !== 0 &&
        <Counter count={countIngredient(ingredient._id)} size='default' className={style.counter}/>}
      <div className={style.ingredient__price}>
        <p className="text text_type_digits-default">{ingredient.price}</p>
        <CurrencyIcon type='primary'/>
      </div>
      <p className={`${style.ingredient__name} text text_type_main-default`}>
        {ingredient.name}
      </p>
    </div>
  )
}

BurgerIngredient.propTypes = {
  ingredient: ingredientPropType.isRequired,
  onClick: PropTypes.func
};

export default BurgerIngredient;  




