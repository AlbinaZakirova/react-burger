import { useState,useMemo, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import classnames from 'classnames';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './BurgerIngredients.module.css';
import ProductCategory from '../ProductCategory/ProductCategory';
import { useAppSelector } from '../../utils/types/hooks';


const BurgerIngredients = () => {
  
  const [current, setCurrent] = useState('buns');
  const { data: ingredients, error, isLoading } = useAppSelector(state => state.ingredientsStore);
  const buns = useMemo(() => ingredients.filter((item: { type: string }) => item.type === 'bun'),[ingredients]) ;
  const main = useMemo(() => ingredients.filter((item: { type: string }) => item.type === 'main'),[ingredients]) ;
  const sauce = useMemo(() => ingredients.filter((item: { type: string }) => item.type === 'sauce'),[ingredients]) ;
  
  function handleClick(tab:string) {
    setCurrent(tab);
    const title = document.getElementById(tab);
    if (title) title.scrollIntoView({ behavior: "smooth" })
  }

  const [refBuns, inViewBuns] = useInView();
  const [refMain, inViewMain] = useInView();
  const [refSauce, inViewSauce] = useInView();

  useEffect(() => {
    if (inViewBuns) {
        setCurrent('buns')
    } else if (inViewSauce) {
        setCurrent('sauce')
    } else if (inViewMain) {
        setCurrent('main')
    }

  }, [inViewBuns, inViewSauce, inViewMain])
  
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
        <ProductCategory 
          title="Булки"
          id="buns"
          ingredients={buns}
          ref={refBuns}
        />
        <ProductCategory 
          title="Соусы"
          id="sauce"
          ingredients={sauce}
          ref={refSauce}
        />
        <ProductCategory 
          title="Начинки"
          id="main"
          ingredients={main}
          ref={refMain}
        />
      </div>
    </section>
  )
} 

export default BurgerIngredients;
