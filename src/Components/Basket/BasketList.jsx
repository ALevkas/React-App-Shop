import { Basket } from './Basket';

export const BasketList = (props) => {
    const { order = [] } = props;

    const totalPrice = order.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    return (
        <ul className='collection basket__list basket__list-show'>
            <li className='collection-item active'>Корзина</li>
            {order.length ? (
                order.map((elem) => (
                    <Basket
                        key={elem.id}
                        {...elem}
                        removeFromBasket={props.removeFromBasket}
                        changeQuntity={props.changeQuntity}
                    />
                ))
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
                onClick={() => props.handleBasketShow()}
            >
                clear
            </i>
        </ul>
    );
};
