export const Cart = (props) => {
    const { quantity } = props;
    console.log(quantity);
    return (
        <div
            className='cart blue darken-4 white-text'
            onClick={() => props.handleBasketShow()}
        >
            <i className='material-icons'>shopping_cart</i>
            {quantity ? (
                <span className='cart-quantity'>{quantity}</span>
            ) : null}
        </div>
    );
};
