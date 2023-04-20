import {forwardRef} from "react";
import classnames from 'classnames';
import style from './ProductCategory.module.css';
import BurgerIngredient from '../BurgerIngredient/BurgerIngredient';
import { setCurrentIngredient } from '../../services/reducers/currentIngredient';
import { useAppDispatch } from "../../utils/types/hooks";
import { TIngredientType } from "../../utils/types/types";

interface IProductCategory {
  title: string;
  id: string;
  ingredients: TIngredientType[];
}

const ProductCategory = forwardRef(({ title, id, ingredients}: IProductCategory, ref:any) => {
  const dispatch = useAppDispatch();
  
  const setIngredientInModalHandler = (ingredient: object) =>
    dispatch(setCurrentIngredient(ingredient))
  
  return (
    <>
      <h2 className='text text_type_main-medium' id={id} ref={ref}>{title}</h2>
      <div className={classnames(style.list, 'mb-10 mt-6')}>
        {ingredients?.map(data =>
          <BurgerIngredient
            key={data._id}
            onClick={() => {
                setIngredientInModalHandler(data);
            }}
            ingredient={data}
          />
        )}
      </div>
    </>
  )
})


export default ProductCategory;


