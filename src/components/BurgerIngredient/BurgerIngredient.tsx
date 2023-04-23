import {useMemo, FC} from "react";
import { useDrag } from "react-dnd/dist/hooks";
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import style from './BurgerIngredient.module.css'
import { Link, useLocation } from "react-router-dom";
import { useAppSelector } from "../../utils/hooks";
import { TBurgerIngredient } from "../../utils/types/types";

const BurgerIngredient: FC <TBurgerIngredient>  = ({ingredient, onClick}) => {

  const location = useLocation();
  const {bun, ingredients: constructorIngredients} = useAppSelector(state => state.constructorStore);

  const countIngredient = useMemo(() => (id: string) =>
    [bun, ...constructorIngredients, bun]?.filter(ingredient => ingredient?._id === id).length, [bun, constructorIngredients]) 

  const [{ isDrag }, drag, dragPreview] = useDrag({
    type: 'ingredient',
    item: ingredient,
    collect: monitor => ({
      isDrag: monitor.isDragging()
    })
  });
  
  return (
    <Link 
      to={`/ingredient/${ingredient._id}`} 
      state={{background: location}} 
      replace={true} 
      className={style.ingredient__wrap} 
      onClick={onClick} 
      ref={drag}>

    <
      img className={style.ingredient__image} 
      src={ingredient.image} 
      alt={ingredient.name}
    />

      {countIngredient(ingredient._id) !== 0 &&
        <Counter 
        count={countIngredient(ingredient._id)} 
        size='default' 
        extraClass={style.counter}
      />}

      <div className={style.ingredient__price}>
        <p className="text text_type_digits-default">{ingredient.price}</p>
        <CurrencyIcon type='primary'/>
      </div>

      <p className={`${style.ingredient__name} text text_type_main-default`}>
        {ingredient.name}
      </p>

    </Link>
  )
}

export default BurgerIngredient;  
