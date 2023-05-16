import React from 'react';
import {Link} from "react-router-dom";

import './styles.scss';
import {MENU_ITEMS} from '../../../constants';

interface IMenuProps {

}

const Menu:React.FC<IMenuProps> = () => {
    return (
        <nav>
            <ul className="layout-menu">
                {
                    MENU_ITEMS.map((m) => (
                        <li key={m.id}>
                            <Link to={m.route}>{m.title}</Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
}

export default Menu;
