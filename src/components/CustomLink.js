import React from 'react';
import {Link, useMatch} from 'react-router-dom';

const CustomLink = ({children, to, ...props}) => {
    const match = useMatch(to);

    return (
        <Link to={to} style={{borderBottom: match ? '3px solid red' : 'black', textDecoration: 'none', color: 'black'}} {...props}>
            {children}
        </Link>
    );
};

export default CustomLink;