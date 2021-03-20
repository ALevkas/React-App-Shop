import { useContext } from 'react';
import { ShopContext } from '../../context';

import { Basket } from './Basket';

export const BasketList = () => {
    const { order, handleBasketShow } = useContext(ShopContext);

    const totalPrice = order.reduce((acc, item) => {
        return acc + item.price * item.quantity;
    }, 0);

    return (
        <ul className='collection basket__list basket__list-show'>
            <li className='collection-item active'>Корзина</li>
            {order.length ? (
                order.map((elem) => <Basket key={elem.id} {...elem} />)
            ) : (
                <li className='collection-item'>Упс, здесь пока пусто</li>
            )}
            <li className='collection-item active'>
                Общая стоимость: {totalPrice} v-bucks.
            </li>
            <li className='collection-item'>
                <button className='btn-small'>Оформить</button>
            </li>
            <i
                className='material-icons basket__close'
                onClick={() => handleBasketShow()}
            >
                clear
            </i>
        </ul>
    );
};
