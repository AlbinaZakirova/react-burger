import {forwardRef} from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import classnames from 'classnames';
import PropTypes from "prop-types";
import style from './ProductCategory.module.css';
import BurgerIngredient from '../BurgerIngredient/BurgerIngredient';
import { setCurrentIngredient } from '../../services/reducers/currentIngredient';
import ingredientPropType from '../../utils/prop-types';

const ProductCategory = forwardRef(({ title, id, ingredients}, ref) => {
  const dispatch = useDispatch();
  
  const setIngredientInModalHandler = ingredient =>
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

ProductCategory.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired
}

export default ProductCategory;


