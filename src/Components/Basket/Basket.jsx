export const Basket = (props) => {
    const { id, name, price, quantity } = props;
    return (
        <li className='collection-item'>
            {name}
            <span>
                <i
                    className='material-icons basket__quantity'
                    onClick={() => props.changeQuntity(id, 'increment')}
                >
                    add
                </i>
            </span>{' '}
            x{quantity}{' '}
            <span>
                <i
                    className='material-icons basket__quantity'
                    onClick={() => props.changeQuntity(id, 'decrement')}
                >
                    remove
                </i>
            </span>
            = {price * quantity}
            <span className='secondary-content'>
                <i
                    className='material-icons basket__delete'
                    onClick={() => props.removeFromBasket(id)}
                >
                    remove_shopping_cart
                </i>
            </span>
        </li>
    );
};
