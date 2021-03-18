import React, { useState, useEffect } from 'react';
import { Preloader } from '../Preloader/Preloader';
import { ShopList } from './ShopList';
import { Cart } from '../Shared/Cart';
import { BasketList } from '../Basket/BasketList';
import { Message } from '../Shared/Message';

import { API_KEY, API_URL } from '../../config';

export const Shop = () => {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false);
    const [messageName, setMessageName] = useState('');

    const addOrder = (item) => {
        const itemIndex = order.findIndex(
            (orderItem) => orderItem.id === item.id
        );

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            };
            setOrder([...order, newItem]);
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    };
                } else {
                    return orderItem;
                }
            });

            setOrder(newOrder);
        }

        setMessageName(item.name);
    };

    const removeFromBasket = (itemId) => {
        setOrder(order.filter((elem) => elem.id !== itemId));
    };

    const handleBasketShow = () => {
        setBasketShow(!isBasketShow);
    };

    const changeQuntity = (id, type) => {
        let newOrder;
        const elemIndex = order.findIndex((elem) => elem.id === id);
        if (type === 'increment') {
            newOrder = order.map((orderItem, index) => {
                if (index === elemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    };
                }
            });
        } else {
            newOrder = order.map((orderItem, index) => {
                if (index === elemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity - 1,
                    };
                }
            });
        }

        setOrder(newOrder);
    };

    const closeMessage = (message) => {
        setMessageName();
    };

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                authorization: API_KEY,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                data.specialFeatured && setGoods(data.specialFeatured);
                setLoading(false);
            });
    }, []);

    return (
        <>
            <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
            {loading ? (
                <Preloader />
            ) : (
                <ShopList addOrder={addOrder} goods={goods} />
            )}
            {isBasketShow && (
                <BasketList
                    order={order}
                    handleBasketShow={handleBasketShow}
                    removeFromBasket={removeFromBasket}
                    changeQuntity={changeQuntity}
                />
            )}
            {messageName && (
                <Message name={messageName} closeMessage={closeMessage} />
            )}
        </>
    );
};
