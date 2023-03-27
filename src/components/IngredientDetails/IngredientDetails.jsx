import classnames from 'classnames';
import PropTypes from 'prop-types';
import ingredientPropTypes from '../../utils/prop-types';
import style from './IngredientDetails.module.css';

const IngredientDetails = ({data}) => {
  return (
  <section>
    <h2 className={classnames(style.ingedientDetails__title, "text text_type_main-large")}>Детали ингредиента</h2>
    <div className={classnames(style.image_container, 'mr-25', 'ml-25')}>
      <img className={style.image} src={data.image_large} alt={data.alt}></img>
    </div>
    <p className={classnames(style.description, 'text text_type_main-medium', 'mt-4', 'mb-8')}>{data.name}</p>
    <div className={style.nutrition}>
      <ul className={classnames(style.nutrition_elements, 'mr-5')}>
        <li className={classnames('text text_type_main-default text_color_inactive', 'mb-2')}>Калории,ккал</li>
        <li className={classnames(style.nutrition_figure, 'text text_type_digits-medium text_color_inactive')}>{data.calories}</li>
      </ul>
      <ul className={classnames(style.nutrition_elements, 'mr-5')}>
        <li className={classnames('text text_type_main-default text_color_inactive', 'mb-2')}>Белки, г</li>
        <li className={classnames(style.nutrition_figure, 'text text_type_digits-medium text_color_inactive')}>{data.proteins}</li>
      </ul>
      <ul className={classnames(style.nutrition_elements, 'mr-5')}>
        <li className={classnames('text text_type_main-default text_color_inactive', 'mb-2')}>Жиры, г</li>
        <li className={classnames(style.nutrition_figure, 'text text_type_digits-medium text_color_inactive')}>{data.fat}</li>
      </ul>
      <ul className={style.nutrition_elements}>
        <li className={classnames('text text_type_main-default text_color_inactive', 'mb-2')}>Углеводы, г</li>
        <li className={classnames(style.nutrition_figure, 'text text_type_digits-medium text_color_inactive')}>{data.carbohydrates}</li>
      </ul>
    </div>
  </section>
  )
}

IngredientDetails.propTypes = {
  data: PropTypes.arrayOf(ingredientPropTypes.isRequired).isRequired
}

export default IngredientDetails;
