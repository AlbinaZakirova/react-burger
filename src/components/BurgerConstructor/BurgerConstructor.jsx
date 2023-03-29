import { useState, useMemo } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { ConstructorElement, Button, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import classnames from 'classnames';
import PropTypes from 'prop-types';
import style from './BurgerConstructor.module.css';
import OrderDetails from '../OrderDetails/OrderDetails';
import ingredientPropTypes from '../../utils/prop-types';
import Modal from '../Modal/Modal';
import {addConstructor, removeConstructor} from "../../services/reducers/constructor";
import {useDispatch} from "react-redux/es/hooks/useDispatch";
import { makeOrder } from '../../utils/api';
import { sendOrder } from '../../services/reducers/order';
import { useDrop } from 'react-dnd/dist/hooks/useDrop';




const BurgerConstructor = () => {
  const dispatch = useDispatch();

  const { bun, ingredients } = useSelector(state => state.constructorStore);
  
  const [orderWindow, setOrderWindow] = useState(null);
  const {orderData} = useSelector(state => state.orderStore)
  
  const sum = useMemo(() => {
    const priceBun = bun?.price * 2 || 0
    const ingredientsSum = ingredients.length > 0
      ? ingredients.reduce((acc, ingredient) => acc += ingredient.price, 0)
      : 0
    return priceBun + ingredientsSum
  }, [bun?.price, ingredients.length])

  const closeModalWindow = () => {
    setOrderWindow(null);
  };

  const removeIngredientBurger = id =>
    dispatch(removeConstructor(id))
 
  const makeOrderHandler = () => {
    setOrderWindow(true)
    dispatch(sendOrder([bun._id, ...ingredients.map(i => i._id)]))
  }

  const [{ isHover }, dropTarget] = useDrop({
    accept: 'ingredient',
    drop(itemId, monitor) {
        dispatch(addConstructor(itemId));
    },
    collect: monitor => ({
        isHover: monitor.isOver()
    })
})

  return (
    <section className={classnames(style.section, 'mt-25')} ref={dropTarget}>
      <div className={style.buns}>
      <ConstructorElement 
        {...bun}
        type='top'
        thumbnail={bun?.image}
        text={`${bun ? bun.name : ''} (верх)`}
        price={bun?.price}
        isLocked={true}
        
      />
      </div>
      <div className={classnames(style.no_buns_ingredients, 'custom-scroll')}>
        {ingredients.map(data => 
          <div className={(style.element_item, 'mt-4', 'mb-4')} key ={data.uuid}>
            <DragIcon type="primary" />  
            <ConstructorElement 
            thumbnail={data.image} 
            text={data.name} 
            price={data.price}
            handleClose={() => removeIngredientBurger(data.uuid)}
            />
          </div>
        )}
      </div>

      <div className={style.buns}>
      <ConstructorElement
        {...bun} 
        type='bottom'
        thumbnail={bun?.image}
        text={`${bun ? bun.name : ''} (верх)`}
        price={bun?.price}
        isLocked={true}
      />
      </div>


      <div className={style.counter_final}>
        <div className={style.sum_and_icon_block}>
          <p className="text text_type_digits-medium mr-2">{sum}</p>
          <CurrencyIcon type="primary"/>
        </div>
        <Button htmlType="button" type="primary" size="large" onClick={makeOrderHandler}>
          Оформить заказ
        </Button>
        {orderWindow && (
        <Modal onClose={closeModalWindow}>
          <OrderDetails number={orderData?.order?.number}/>
        </Modal>
      )}
      </div>

    </section>
    )
}


export default BurgerConstructor;