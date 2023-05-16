import React from 'react';
import {Outlet} from "react-router-dom";
import Menu from "./Menu";

interface ILayout {

}

const Layout:React.FC<ILayout> = () => {
    return (
        <div>
            <Menu />
            <Outlet />
        </div>
    );
}

export default Layout;
