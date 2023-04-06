import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import style from './MainPage.module.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import classnames from 'classnames';



const MainPage = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <h1 className={classnames(style.app__title, 'text text_type_main-large mt-10 mb-5')}>Соберите бургер</h1>
      <main className={style.main}>
        <BurgerIngredients />
        <BurgerConstructor />
      </main>
    </DndProvider>
  )
}  

export default MainPage;