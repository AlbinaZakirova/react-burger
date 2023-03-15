import { useState, useMemo } from 'react';
import { ConstructorElement, Button, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import classnames from 'classnames';
import style from './BurgerConstructor.module.css';
import OrderDetails from '../OrderDetails/OrderDetails';




export const BurgerConstructor = ({constructorIngredients}) => {

  const buns = useMemo(() => constructorIngredients.find(data => data.type === 'bun'),[constructorIngredients]) ;
  const bunsLast = useMemo(() => constructorIngredients.findLast(data => data.type === 'bun'),[constructorIngredients]) ;
  const nobuns = useMemo(() =>  constructorIngredients.filter(data => data.type !== 'bun'),[constructorIngredients]) ;

  
  const [orderWindow, setOrderWindow] = useState(false);
  const closeModalWindow = () => {setOrderWindow(null)};

  return (
    <section className={classnames(style.section, 'mt-25')}>
      <div className={style.buns}>
      <ConstructorElement
        {...buns}
        type='top'
        thumbnail={buns?.image}
        key={buns?._id}
        text={buns?.name}
        isLocked={true}
        
      />
      </div>
      
    
      <div className={classnames(style.no_buns_ingredients, 'custom-scroll')}>
        {nobuns.map(data => 
          <div className={(style.element_item, 'mt-4', 'mb-4')}>
            <DragIcon type="primary" />  
            <ConstructorElement thumbnail={data.image} key={data._id} text={data.name} {...data}/>
          </div>
        )}
      </div>

      <div className={style.buns}>
      <ConstructorElement
        {...bunsLast} 
        type='bottom'
        thumbnail={bunsLast?.image}
        key={bunsLast?._id}
        text={bunsLast?.name}
        isLocked={true}
      />
      </div>
      

      <div className={style.counter_final}>
        <div className={style.sum_and_icon_block}>
          <p className="text text_type_digits-medium mr-2">000</p>
          <CurrencyIcon type="primary"/>
        </div>
        <Button htmlType="button" type="primary" size="large" onClick={() => setOrderWindow(true)}>
          Оформить заказ
        </Button>
        {orderWindow && <OrderDetails onClose={closeModalWindow} /> }
      </div>

    </section>
    )
}