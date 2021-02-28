import React from 'react';
import { Link } from 'gatsby';

const Header = () => {
    return (
        <div className='header'>
            <div className='container'>
                <div className='row space-between'>
                    <div className='logo'>
                        <Link to='/'>chanho</Link>
                    </div>
                    <div className='navigation'>
                        <nav>
                            <Link to='/' activeClassName='active'>Work</Link>
                            <Link to='/about' activeClassName='active'>About</Link>
                            <a href='/'>Resume</a>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header
