import {useState, useMemo} from 'react';
import {useSelector} from 'react-redux/es/hooks/useSelector';
import {useDispatch} from "react-redux/es/hooks/useDispatch";
import {useDrop} from 'react-dnd/dist/hooks/useDrop';
import classnames from 'classnames';
import { Button, ConstructorElement, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import style from './BurgerConstructor.module.css';
import OrderDetails from '../OrderDetails/OrderDetails';
import Modal from '../Modal/Modal';
import ConstructorElementWrap from '../ConstructorElementWrap/ConstructorElementWrap';
import {addConstructor, clearConstructor} from "../../services/reducers/constructor";
import {sendOrder} from '../../services/reducers/order';
import { useNavigate } from 'react-router-dom';

const BurgerConstructor = () => {
  const urlImageLoader = 'https://stellarburgers.nomoreparties.site/static/media/loading.89540200.svg'
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {isAuth} = useSelector(state => state.userStore);

  const {bun, ingredients} = useSelector(state => state.constructorStore);

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

  const makeOrderHandler = () => {
    if (!isAuth) {
      return navigate('/login', {replace: true})
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

  return (
    <section className={classnames(style.section, 'mt-25')} ref={dropTarget}>
      <div className={style.buns}>
        {bun
          ? <ConstructorElement
            {...bun}
            type='top'
            thumbnail={bun?.image}
            text={`${bun ? bun.name : ''} (верх)`}
            price={bun?.price}
            isLocked={true}
          />
          : <ConstructorElement
            type='top'
            thumbnail={urlImageLoader}
            text={'Выберите булку'}
            isLocked={true}
          />}
      </div>
      <div className={classnames(style.no_buns_ingredients, 'custom-scroll')}>
        {ingredients.map((data, index) =>
          <ConstructorElementWrap
            key={data.uuid}
            ingredient={data}
            index={index}
          />
        )}
      </div>
      <div className={style.buns}>
        {bun
          ? <ConstructorElement
          {...bun}
          type='bottom'
          thumbnail={bun?.image}
          text={`${bun ? bun.name : ''} (низ)`}
          price={bun?.price}
          isLocked={true}
        />
        : <ConstructorElement
            type='bottom'
            thumbnail={urlImageLoader}
            text={'Выберите булку'}
            isLocked={true}
          />}
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