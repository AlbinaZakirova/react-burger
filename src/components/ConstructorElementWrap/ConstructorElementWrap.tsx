import { FC, useRef } from 'react';
import { useDrop } from 'react-dnd/dist/hooks/useDrop';
import { useDrag } from 'react-dnd/dist/hooks/useDrag';
import { useDispatch } from 'react-redux';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'; 
import { moveElement, removeConstructor } from "../../services/reducers/constructor";
import { TConstructorElementWrap, TIngredientType } from '../../utils/types/types';


const ConstructorElementWrap: FC <TConstructorElementWrap> = ({ingredient, index}) => {
  const dispatch = useDispatch();
  const ref = useRef(null)
  const uuid = ingredient.uuid;

  const moveCard = (start: number | undefined, end: number | undefined) => {
    dispatch(moveElement([start,end]))
  }

  const [, drag] = useDrag({
    type: 'constructorElement',
    item: () => {
      return { uuid, index }
    },
  })

  const [, drop] = useDrop({
    accept: 'constructorElement',
    hover(item:any, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex: any = index
      if (dragIndex === hoverIndex) {
        return
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      const clientOffset: any = monitor.getClientOffset()
      const hoverClientY = clientOffset.y - hoverBoundingRect.top
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }
      moveCard(dragIndex, hoverIndex)
      item.index = hoverIndex
    },
  })

  drag(drop(ref));
  const removeIngredientBurger = (id:number) =>
    dispatch(removeConstructor(id))
  return (
    <div className={('mt-4 mb-4')}  key={ingredient.uuid} ref={ref}>
      <DragIcon type="primary"/>
      <ConstructorElement
        thumbnail={ingredient.image}
        text={ingredient.name}
        price={ingredient?.price}
        handleClose={() => removeIngredientBurger(ingredient.uuid)}
      />
    </div>
  )
}

export default ConstructorElementWrap;