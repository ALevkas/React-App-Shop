import React, { useEffect } from 'react';

export const Message = (props) => {
    const { name } = props;

    useEffect(() => {
        const timerId = setTimeout(props.closeMessage, 3000);

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
