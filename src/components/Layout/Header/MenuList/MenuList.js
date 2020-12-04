import React from 'react';
import {Link} from "react-router-dom";

function MenuList(props) {
    return (
        <>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/all-products'>All products</Link>
            </li>
            <li>
                <Link to='/specials'>Specials</Link>
            </li>
            <li>
                <Link to='/new-products'>New products</Link>
            </li>
            <li>
                <Link to='/discounted'>Discounted</Link>
            </li>
            <li>
                <Link to='/platforms'>Platforms</Link>
            </li>
        </>
    );
}

export default MenuList;
