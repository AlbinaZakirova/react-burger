import { useState } from 'react';
import classnames from 'classnames';
import { BurgerIngredient } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import style from './ProduktCategory.module.css';
import Modal from '../Modal/Modal';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import ingredientPropTypes from '../../utils/prop-types';
import { addConstructor } from '../../services/reducers/constructor';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { useSelector } from 'react-redux';
import { removeCurrentIngredient, setCurrentIngredient } from '../../services/reducers/currentIngredient';



const ProduktCategory = ({ title, id, ingredients}) => {
  const dispatch = useDispatch();
  const {currentIngredient} = useSelector(state => state.currentIngredientStore);
  const setIngredientInModalHandler = ingredient =>
    dispatch(setCurrentIngredient(ingredient))
  
  const removeCurrentIngredientInModalHandler = () =>
    dispatch(removeCurrentIngredient())

  // const [ingredientModal, setIngredientModal] = useState(null)
  // const closeModalIngredient = () => {setIngredientModal (null)}
  return (
    <>
      <h2 className='text text_type_main-medium' id={id}>{title}</h2>
      <div className={classnames(style.list, 'mb-10 mt-6')}>
        {ingredients?.map(data => 
        <BurgerIngredient 
          key ={data._id} 
          {...data} 
          count={1} 
          onClick={() => {
            dispatch(addConstructor(data));
            setIngredientInModalHandler(data);
        }}
        />)}
      </div>
      {currentIngredient && <Modal title="Детали игредиента" onClose={removeCurrentIngredientInModalHandler}><IngredientDetails data={currentIngredient} /></Modal>}
    </>
  )
}

ProduktCategory.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(ingredientPropTypes.isRequired).isRequired
}

export default ProduktCategory;

