export const ShopItem = (props) => {
    const { id, name, description, price, full_background } = props;

    return (
        <div className='card card-shop' id={id}>
            <div className='card-image'>
                <img src={full_background} alt={name} />
            </div>
            <div className='card-content card-content-shop'>
                <span className='card-title'>{name}</span>
                <p>{description}</p>
            </div>
            <div className='card-action card-action-shop'>
                <button
                    className='btn'
                    onClick={() => {
                        props.addOrder({ id, name, price });
                    }}
                >
                    Купить
                </button>
                <span className='right' style={{ fontSize: '1.2rem' }}>
                    {price} v-bucks.
                </span>
            </div>
        </div>
    );
};
