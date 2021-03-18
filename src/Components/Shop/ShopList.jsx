import { ShopItem } from './ShopItem';

export const ShopList = (props) => {
    const { goods = [] } = props;

    if (!goods.length) {
        return <h3>Nothing here</h3>;
    }

    return (
        <div className='shoop-items'>
            {goods.map((item) => (
                <ShopItem key={item.id} {...item} addOrder={props.addOrder} />
            ))}
        </div>
    );
};
