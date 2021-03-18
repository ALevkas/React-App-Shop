const Header = () => {
    return (
        <nav className='green darken-1'>
            <div className='nav-wrapper'>
                <a
                    href='https://github.com/ALevkas/react-shop'
                    className='brand-logo'
                >
                    Shop fortnite
                </a>
                <ul id='nav-mobile' className='right hide-on-med-and-down'>
                    <li>
                        <a href='https://github.com/ALevkas/'>My other app</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export { Header };
