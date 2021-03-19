const Header = () => {
    return (
        <nav className='green darken-1'>
            <div className='nav-wrapper'>
                <a
                    href='https://allevchenko.ru/react-app-shop/'
                    className='brand-logo'
                >
                    React Shop Fortnite
                </a>
                <ul id='nav-mobile' className='right hide-on-med-and-down'>
                    <li>
                        <a href='https://github.com/ALevkas/'>
                            My others app in github page.
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export { Header };
