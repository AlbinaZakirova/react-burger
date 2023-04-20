import classnames from 'classnames';
import style from './IngredientsIdPage.module.css';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAppSelector } from '../../utils/types/hooks';

const IngredientsIdPage = () => { 
  const {idIngredient} = useParams();
  const ingredients = useAppSelector(state => state.ingredientsStore.data)
  const currentIngredient = ingredients.find(item => item._id === idIngredient)
  return (
  <section>
    <h2 className={classnames(style.ingedientDetails__title, "text text_type_main-large")}>Детали ингредиента</h2>
    <div className={classnames(style.image_container, 'mr-25', 'ml-25')}>
      <img className={style.image} src={currentIngredient?.image_large} alt={currentIngredient?.name}></img>
    </div>
    <p className={classnames(style.description, 'text text_type_main-medium', 'mt-4', 'mb-8')}>{currentIngredient?.name}</p>
    <div className={style.nutrition}>
      <ul className={classnames(style.nutrition_elements, 'mr-5')}>
        <li className={classnames('text text_type_main-default text_color_inactive', 'mb-2')}>Калории,ккал</li>
        <li className={classnames(style.nutrition_figure, 'text text_type_digits-medium text_color_inactive')}>{currentIngredient?.calories}</li>
      </ul>
      <ul className={classnames(style.nutrition_elements, 'mr-5')}>
        <li className={classnames('text text_type_main-default text_color_inactive', 'mb-2')}>Белки, г</li>
        <li className={classnames(style.nutrition_figure, 'text text_type_digits-medium text_color_inactive')}>{currentIngredient?.proteins}</li>
      </ul>
      <ul className={classnames(style.nutrition_elements, 'mr-5')}>
        <li className={classnames('text text_type_main-default text_color_inactive', 'mb-2')}>Жиры, г</li>
        <li className={classnames(style.nutrition_figure, 'text text_type_digits-medium text_color_inactive')}>{currentIngredient?.fat}</li>
      </ul>
      <ul className={style.nutrition_elements}>
        <li className={classnames('text text_type_main-default text_color_inactive', 'mb-2')}>Углеводы, г</li>
        <li className={classnames(style.nutrition_figure, 'text text_type_digits-medium text_color_inactive')}>{currentIngredient?.carbohydrates}</li>
      </ul>
    </div>
  </section>
  )
}


export default IngredientsIdPage; 
