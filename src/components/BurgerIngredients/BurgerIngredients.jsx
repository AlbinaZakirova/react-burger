import { useState,useMemo } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import classnames from 'classnames';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './BurgerIngredients.module.css';
import ProduktCategory from '../ProduktCategory/ProduktCategory';


const BurgerIngredients = () => {
  
  const [current, setCurrent] = useState('buns');
  const { data: ingredients, error, isLoading } = useSelector(state => state.ingredientsStore);
  const buns = useMemo(() => ingredients.filter(item => item.type === 'bun'),[ingredients]) ;
  const main = useMemo(() => ingredients.filter(item => item.type === 'main'),[ingredients]) ;
  const sauce = useMemo(() => ingredients.filter(item => item.type === 'sauce'),[ingredients]) ;
  
  function handleClick(tab) {
    setCurrent(tab);
    const title = document.getElementById(tab);
    console.log(title);
    if (title) title.scrollIntoView({ behavior: "smooth" })
  }
  
  if (isLoading) return <div>Загрузка...</div>

  return (
    <section className={style.menu}>
      <div className={style.produkt}>
        <Tab value="buns" active={current === 'buns'} onClick={handleClick}>
          Булки
        </Tab>
        <Tab value="sauce" active={current === 'sauce'} onClick={handleClick}>
          Соусы
        </Tab>
        <Tab value="main" active={current === 'main'} onClick={handleClick}>
          Начинки
        </Tab>
      </div>

      <div className={classnames(style.scroll, 'custom-scroll')}>
        <ProduktCategory 
          title="Булки"
          id="buns"
          ingredients={buns}
        />
        <ProduktCategory 
          title="Соусы"
          id="sauce"
          ingredients={sauce}
        />
        <ProduktCategory 
          title="Начинки"
          id="main"
          ingredients={main}
        />
      </div>
    </section>
  )
} 

export default BurgerIngredients;
