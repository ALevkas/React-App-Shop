export const Footer = () => {
    return (
        <footer className='page-footer green lighten-2'>
            <div className='footer-copyright'>
                <div className='container'>
                    © {new Date().getFullYear} Aleksandr Levchenko and @Levkas
                    my profile in github.com
                    <a
                        className='grey-text text-lighten-4 right'
                        href='https://github.com/ALevkas/'
                    >
                        My others app in github page.
                    </a>
                </div>
            </div>
        </footer>
    );
};
