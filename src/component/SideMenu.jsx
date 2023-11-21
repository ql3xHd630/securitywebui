import React, { useState, useEffect } from 'react'
import { Menu, Layout } from 'antd'
import { NavLink, useNavigate } from 'react-router-dom'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import logo from '../assert/menuLogo.jpg'
const { Sider } = Layout
const SideMenu = () => {
    const navigate = useNavigate()
    const handleMenuClick = (e) => {
        const { key } = e
        navigate(key)
    }
    return (
        <Sider>
            <div style={{ textAlign: 'center', paddingTop: '8px', paddingBottom: '8px' }} >
                <img src={logo} alt="" style={{ height: '48px' }} />
            </div>
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={[
                    {
                        key: '/login',
                        icon: <UserOutlined />,
                        label: '登录页面',
                    },
                    {
                        key: '/usermanage',
                        icon: <VideoCameraOutlined />,
                        label: '用户管理',
                    },
                    {
                        key: '/tools',
                        icon: <UploadOutlined />,
                        label: '工具',
                    },
                ]}
                onClick={handleMenuClick}
            />
        </Sider>
    )
}
export default SideMenu


