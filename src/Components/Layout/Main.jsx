import { Shop } from '../Shop/Shop';
import { ContextProvider } from '../../context';

export const Main = () => {
    return (
        <main className='container content'>
            {
                <ContextProvider>
                    <Shop />
                </ContextProvider>
            }
        </main>
    );
};
