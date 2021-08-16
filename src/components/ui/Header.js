import React from 'react';
// import {jest} from '@jest/globals';
// import logo from '../../img/logo.png';

// jest.useFakeTimers();

const Header = () =>{
    return (
        <>
            <header className='center'>
                {/* <img src={logo} alt='Breaking Bad Logo' /> */}
                <h1 data-testid="required-header" id='text required-header' required>Breaking Bad App 2</h1>
                <p>carrito</p>
            </header>
        </>
    )
}

export default Header;
