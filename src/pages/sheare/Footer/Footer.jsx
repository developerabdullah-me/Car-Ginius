import React from 'react';

const Footer = () => {
    return (
        <div>
            <p className="text-center bg-dark  text-white p-3">Copyright © {(new Date().getFullYear())}</p>
        </div>
    );
};

export default Footer;