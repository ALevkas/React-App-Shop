import React, { useEffect, useContext } from 'react';
import { Preloader } from '../Preloader/Preloader';
import { ShopList } from './ShopList';
import { Cart } from '../Shared/Cart';
import { BasketList } from '../Basket/BasketList';
import { Message } from '../Shared/Message';

import { API_KEY, API_URL } from '../../config';

import { ShopContext } from '../../context';

export const Shop = () => {
    const { loading, order, isBasketShow, messageName, setGoods } = useContext(
        ShopContext
    );

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                authorization: API_KEY,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setGoods(data.specialFeatured);
            });
    }, []);

    return (
        <div>
            <Cart quantity={order.length} />
            {loading ? <Preloader /> : <ShopList />}
            {isBasketShow && <BasketList />}
            {messageName && <Message />}
        </div>
    );
};
