import {useState, useMemo} from 'react';
import {useDrop} from 'react-dnd/dist/hooks/useDrop';
import { useNavigate } from 'react-router-dom';
import { Button, ConstructorElement, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import classnames from 'classnames';
import style from './BurgerConstructor.module.css';
import OrderDetails from '../OrderDetails/OrderDetails';
import Modal from '../Modal/Modal';
import ConstructorElementWrap from '../ConstructorElementWrap/ConstructorElementWrap';
import {addConstructor, clearConstructor} from "../../services/reducers/constructor";
import {sendOrder} from '../../services/reducers/order';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';

const BurgerConstructor = () => {
  const urlImageLoader = 'https://stellarburgers.nomoreparties.site/static/media/loading.89540200.svg'
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {isAuth} = useAppSelector(state => state.userStore);

  const {bun, ingredients} = useAppSelector(state => state.constructorStore);

  const [orderWindow, setOrderWindow] = useState(false);
  const {orderData} = useAppSelector(state => state.orderStore)

  const sum = useMemo(() => {
    const priceBun = bun?.price ? bun.price * 2 : 0;
    const ingredientsSum = ingredients.length > 0
      ? ingredients.reduce((acc, ingredient) => acc += ingredient.price, 0)
      : 0
    return priceBun + ingredientsSum
  }, [bun?.price, ingredients.length])

  const closeModalWindow = () => {
    setOrderWindow(false);
  };

  const makeOrderHandler = () => {
    if (!isAuth) {
      return navigate('/login', {replace: true})
    }
    if (!bun) {
      return;
    }
    setOrderWindow(true)
    dispatch(sendOrder([bun._id, ...ingredients.map(i => i._id)]))   
    dispatch(clearConstructor())
  }

  
  const [{isHover}, dropTarget] = useDrop({
    accept: 'ingredient',
    drop(itemId, monitor) {
      dispatch(addConstructor(itemId));
    },
    collect: monitor => ({
      isHover: monitor.isOver()
    })
  }) 

  const bunsElement = (isTop: boolean) =>
      bun
          ? <ConstructorElement
              {...bun}
              type={isTop ? 'top' : 'bottom'}
              thumbnail={bun?.image}
              text={`${bun ? bun.name : ''} (${isTop ? 'верх' : 'низ'})`}
              price={bun?.price}
              isLocked={true}
          />
          : <ConstructorElement
              type={isTop ? 'top' : 'bottom'}
              thumbnail={urlImageLoader}
              text={'Выберите булку'}
              isLocked={true}
              price={0}
          />

  return (
    <section className={classnames(style.section, 'mt-25')} ref={dropTarget}>
      <div className={style.buns}>
        {bunsElement(true)}
      </div>
      <div id='noBun' className={classnames(style.no_buns_ingredients, 'custom-scroll')}>
        {ingredients.map((data: any, index: number) =>
          <ConstructorElementWrap
            key={data.uuid}
            ingredient={data}
            index={index}
            text={'Выберите начинку'}
          />
        )}
      </div>
      <div className={style.buns}>
        {bunsElement(false)}
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