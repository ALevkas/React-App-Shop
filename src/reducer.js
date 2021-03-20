export const reducer = (state, { type, payload }) => {
    switch (type) {
        case 'CLOSE_MESSAGE':
            return { ...state, messageName: '' };
        case 'REMOVE_FROM_BASKET':
            return {
                ...state,
                order: state.order.filter((elem) => elem.id !== payload.id),
            };
        case 'TOGGLE_BASKET':
            return { ...state, isBasketShow: !state.isBasketShow };
        case 'CHANGE_QUNTITY': {
            let newOrder = null;
            const elemIndex = state.order.findIndex(
                (elem) => elem.id === payload.id
            );

            if (payload.type === 'increment') {
                newOrder = state.order.map((orderItem, index) => {
                    if (index === elemIndex) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity + 1,
                        };
                    }
                });
            } else {
                newOrder = state.order.map((orderItem, index) => {
                    if (index === elemIndex) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity - 1,
                        };
                    }
                });
            }

            return { ...state, order: newOrder };
        }
        case 'ADD_ORDER': {
            const itemIndex = state.order.findIndex(
                (orderItem) => orderItem.id === payload.id
            );

            let newOrder = null;

            if (itemIndex < 0) {
                const newItem = {
                    ...payload,
                    quantity: 1,
                };

                newOrder = [...state.order, newItem];
            } else {
                newOrder = state.order.map((orderItem, index) => {
                    if (index === itemIndex) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity + 1,
                        };
                    } else {
                        return orderItem;
                    }
                });
            }
            return {
                ...state,
                order: newOrder,
                messageName: payload.name,
            };
        }
        case 'SET_GOODS':
            return { ...state, goods: payload || [], loading: false };
        default:
            return state;
    }
};
