import { useContext } from 'react';
import { ShopContext } from '../../context';
import { ShopItem } from './ShopItem';

export const ShopList = () => {
    const { goods = [] } = useContext(ShopContext);

    if (!goods.length) {
        return <h3>Nothing here</h3>;
    }

    return (
        <div className='shoop-items'>
            {goods.map((item) => (
                <ShopItem key={item.id} {...item} />
            ))}
        </div>
    );
};
