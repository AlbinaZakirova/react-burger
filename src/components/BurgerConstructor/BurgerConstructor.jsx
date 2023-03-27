import { useState, useMemo } from 'react';
import { ConstructorElement, Button, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import classnames from 'classnames';
import PropTypes from 'prop-types';
import style from './BurgerConstructor.module.css';
import OrderDetails from '../OrderDetails/OrderDetails';
import ingredientPropTypes from '../../utils/prop-types';
import Modal from '../Modal/Modal';




const BurgerConstructor = ({constructorIngredients}) => {

  const buns = useMemo(() => constructorIngredients.find(data => data.type === 'bun'),[constructorIngredients]) ;
  const nobuns = useMemo(() =>  constructorIngredients.filter(data => data.type !== 'bun'),[constructorIngredients]) ;

  const [orderWindow, setOrderWindow] = useState(null);
  const closeModalWindow = () => {
    setOrderWindow(null);
  };
  return (
    <section className={classnames(style.section, 'mt-25')}>
      <div className={style.buns}>
      <ConstructorElement 
        {...buns}
        type='top'
        thumbnail={buns?.image}
        key={buns?._id} 
        text={`${buns?.name} (верх)`}
        isLocked={true}
        
      />
      </div>
      <div className={classnames(style.no_buns_ingredients, 'custom-scroll')}>
        {nobuns.map(data => 
          <div className={(style.element_item, 'mt-4', 'mb-4')} key ={data._id}>
            <DragIcon type="primary" />  
            <ConstructorElement thumbnail={data.image} key={data._id} text={data.name} {...data}/>
          </div>
        )}
      </div>

      <div className={style.buns}>
      <ConstructorElement
        {...buns} 
        type='bottom'
        thumbnail={buns?.image}
        key={buns?._id}
        text={`${buns?.name} (низ)`}
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

BurgerConstructor.propTypes = {
  constructorIngredients: PropTypes.arrayOf(ingredientPropTypes.isRequired).isRequired
}

export default BurgerConstructor;