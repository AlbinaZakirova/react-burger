import {useParams} from 'react-router-dom';
import {FC} from 'react';
import classnames from 'classnames';
import {useAppSelector} from '../../utils/hooks';
import style from './IngredientDetails.module.css';
import {v4 as uuidv4} from "uuid";

const IngredientDetails: FC = () => {
    const {idIngredient} = useParams();
    const ingredients = useAppSelector(state => state.ingredientsStore.data)
    const currentIngredient = ingredients.find(item => item._id === idIngredient)

    const infoArray = [
        {
            title: 'Калории, ккал',
            value: currentIngredient?.calories
        },
        {
            title: 'Белки, г',
            value: currentIngredient?.proteins
        },
        {
            title: 'Жиры, г',
            value: currentIngredient?.fat
        },
        {
            title: 'Углеводы, г',
            value: currentIngredient?.carbohydrates
        }
    ]

    return (
        <section>
            <h2 className={classnames(style.ingredientDetails__title, "text text_type_main-large")}>Детали
                ингредиента</h2>
            <div className={classnames(style.image_container, 'mr-25', 'ml-25')}>
                <img className={style.image} src={currentIngredient?.image_large} alt={currentIngredient?.name}></img>
            </div>
            <p className={classnames(style.description, 'text text_type_main-medium', 'mt-4', 'mb-8')}>{currentIngredient?.name}</p>
            <div className={style.nutrition}>
                {
                    infoArray.map(({title, value}) =>
                        <ul className={style.nutrition_elements} key={uuidv4()}>
                            <li className={classnames('text text_type_main-default text_color_inactive', 'mb-2')}>{title}</li>
                            <li className={classnames(style.nutrition_figure, 'text text_type_digits-medium text_color_inactive')}>{value}</li>
                        </ul>
                    )
                }
            </div>
        </section>
    )
}


export default IngredientDetails; 

