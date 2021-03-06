
import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css';
import data from './menu.json';

const Menu = () => {

    const renderMenuItems = data => {
        return data && data.map((item, index) =>
            (item?.children && item?.children.length) ? (<li key={index}><Link to={"#"}>{item.name}</Link><ul>
                {renderMenuItems(item.children)}
            </ul></li>
            ) : <li key={index}><Link to={item.url}>{item.name}</Link></li>
        )
    }
    return data && (
        <div className="multilevelMenu">
            <ul className="main-navigation">
                {renderMenuItems(data)}
            </ul>
        </div>
    );
}
export default Menu;