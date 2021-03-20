import React, { useEffect, useContext } from 'react';
import { ShopContext } from '../../context';

export const Message = () => {
    const { messageName: name, closeMessage } = useContext(ShopContext);

    useEffect(() => {
        const timerId = setTimeout(closeMessage, 3000);

        return () => {
            clearTimeout(timerId);
        };
    }, [name]); // eslint-disable-line

    return (
        <div id='toast-container'>
            <div className='toast'>{name} добавлен в корзину</div>
        </div>
    );
};
