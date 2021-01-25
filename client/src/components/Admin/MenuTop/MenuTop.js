import React from 'react';
import { Button } from "antd";
import { PoweroffOutlined, MenuFoldOutlined, MenuUnfoldOutlined, MenuOutlined } from '@ant-design/icons';
import KatarxisLogo from "../../../assets/img/png/logo.png";

import "./MenuTop.scss"

export default function MenuTop(props) {

    const {menuCollapsed, setMenuCollapsed } = props;

    return (
        <div className="menu-top" >
            <div className="menu-top__left">
                <img 
                    className = "menu-top__logo"
                    src = { KatarxisLogo }
                    alt = "Katarxis 3D Quillota"
                />
                <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
                    <MenuUnfoldOutlined type={menuCollapsed ? <MenuOutlined /> : <MenuUnfoldOutlined />} />
                </Button>
            </div>
            <div className = "menu-top__right">
                <Button type="link" >
                    <PoweroffOutlined />
                </Button>
            </div>
        </div>
    )
}