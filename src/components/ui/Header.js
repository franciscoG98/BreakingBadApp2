import React from 'react';
import {jest} from '@jest/globals';
// import logo from '../../img/logo.png';

// const Header = () => {
//     return (
//         <header className='center'>
//             {/* <img src={logo} alt='Brx    eaking Bad Logo' /> */}
//             <h1>Breaking Bad Character Search</h1>
//         </header>
//     )
// }

jest.useFakeTimers();


const Header = () =>{
    return (
        <h1 data-testid="required-header" required>Breaking Bad Character Search</h1>
    )
}

export default Header;
