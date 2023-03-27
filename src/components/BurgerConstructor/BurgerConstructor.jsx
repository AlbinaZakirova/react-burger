import { useState, useMemo } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { ConstructorElement, Button, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import classnames from 'classnames';
import PropTypes from 'prop-types';
import style from './BurgerConstructor.module.css';
import OrderDetails from '../OrderDetails/OrderDetails';
import ingredientPropTypes from '../../utils/prop-types';
import Modal from '../Modal/Modal';




const BurgerConstructor = () => {

  const { bun, ingredients } = useSelector(state => state.constructorStore);
  

  const [orderWindow, setOrderWindow] = useState(null);
  const closeModalWindow = () => {
    setOrderWindow(null);
  };
  return (
    <section className={classnames(style.section, 'mt-25')}>
      <div className={style.buns}>
      <ConstructorElement 
        {...bun}
        type='top'
        thumbnail={bun?.image}
        key={bun?.uuid} 
        text={`${bun?.name} (верх)`}
        isLocked={true}
        
      />
      </div>
      <div className={classnames(style.no_buns_ingredients, 'custom-scroll')}>
        {ingredients.map(data => 
          <div className={(style.element_item, 'mt-4', 'mb-4')} key ={data.uuid}>
            <DragIcon type="primary" />  
            <ConstructorElement thumbnail={data.image} text={data.name} {...data}/>
          </div>
        )}
      </div>

      <div className={style.buns}>
      <ConstructorElement
        {...bun} 
        type='bottom'
        thumbnail={bun?.image}
        key={bun?.uuid}
        text={`${bun?.name} (низ)`}
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
        {orderWindow && (
        <Modal onClose={closeModalWindow}>
          <OrderDetails data={orderWindow} />
        </Modal>
      )}
      </div>

    </section>
    )
}


export default BurgerConstructor;