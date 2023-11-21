import React from 'react';
import { Space, Table, Tag } from 'antd';
import { useEffect, useState } from 'react'
import request from '../util/request';

function UserManage() {
    const [users, setUsers] = useState([])
    const [isloading, setIsLoading] = useState(true)
    useEffect(() => {
        request.get('user').then((res) => {
            setUsers(res.data)
            setIsLoading(false)
        })
    }, [])
    console.log(users)
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: ''
        },

        {
            title: "Email",
            dataIndex: 'email',
        },
        {
            title: 'Tel',
            dataIndex: 'tel'
        },
        {
            title: 'Role',
            dataIndex: 'role'
        }
    ];
    return (
        <>
            <Table
                columns={columns}
                dataSource={users}
                loading={isloading}
                rowKey={(item) => item.userid}
            />;
        </>
    )
}
export default UserManage