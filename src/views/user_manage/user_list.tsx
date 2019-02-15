import * as React from 'react'
import { Row, Table } from 'antd'

import { isSuccess } from 'src/utils/ajax'
import { queryUserList } from 'src/api/user/user'

interface IState {
    list: Array<any>
}

/**
 * 用户管理
 */
export class UserList extends React.Component<{}, IState> {
    state: IState = {
        list: []
    }

    componentDidMount() {
        this.fetchList()
    }

    async fetchList() {
        try {
            let res = await queryUserList()

            let data = isSuccess(res)

            if (data) {
                this.setState({ list: data.list })
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    render() {
        const { list } = this.state
        return (
            <Row>
                <Table rowKey={'userId'} columns={this.columns} dataSource={list} pagination={false} />
            </Row>
        )
    }

    get columns(): Array<any> {
        return [
            {
                title: '用户ID',
                dataIndex: 'userId'
            },
            {
                title: '用户名',
                dataIndex: 'username'
            },
            {
                title: '性别',
                dataIndex: 'gender'
            },
            {
                title: '邮箱',
                dataIndex: 'email'
            },
            {
                title: '城市',
                dataIndex: 'country'
            },
            {
                title: '用户状态',
                dataIndex: 'userStatus'
            }
        ]
    }
}
