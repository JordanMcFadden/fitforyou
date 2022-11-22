import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to ="/" className="navbar-logo">
                        FitForYou
                    </Link>
                    <h1>You</h1>
                </div>
            </nav>

        </>
    )
}

export default Navbar;