import React, { createContext, useReducer } from 'react';
import { reducer } from './reducer';

export const ShopContext = createContext();

const initialState = {
    goods: [],
    loading: true,
    order: [],
    isBasketShow: false,
    messageName: '',
};

export const ContextProvider = ({ children }) => {
    const [value, dispatch] = useReducer(reducer, initialState);

    value.closeMessage = () => {
        dispatch({ type: 'CLOSE_MESSAGE' });
    };

    value.removeFromBasket = (id) => {
        dispatch({ type: 'REMOVE_FROM_BASKET', payload: { id } });
    };

    value.handleBasketShow = () => {
        dispatch({
            type: 'TOGGLE_BASKET',
        });
    };

    value.changeQuntity = (id, type) => {
        dispatch({ type: 'CHANGE_QUNTITY', payload: { id, type } });
    };

    value.addOrder = (item) => {
        dispatch({ type: 'ADD_ORDER', payload: item });
    };

    value.setGoods = (data) => {
        dispatch({ type: 'SET_GOODS', payload: data });
    };

    return (
        <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
    );
};
