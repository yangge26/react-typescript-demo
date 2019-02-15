import * as React from 'react'
import { Link } from 'react-router-dom'

import { Layout, Menu } from 'antd'
import { SelectParam } from 'antd/lib/menu'

interface IState {
    openKeys: string[]
    selectKey: string
}

export class NavLeft extends React.Component<{}, IState> {
    public state: Readonly<IState> = {
        openKeys: [],
        selectKey: ''
    }

    public render() {
        const { openKeys, selectKey } = this.state

        return (
            <Layout.Sider collapsible={false}>
                <Menu
                    theme="light"
                    mode="inline"
                    openKeys={openKeys}
                    selectedKeys={[selectKey]}
                    onOpenChange={this.onOpenChange}
                    onSelect={this.onSelect}>
                    <Menu.Item key="user">
                        <Link to="/user">用户列表</Link>
                    </Menu.Item>
                </Menu>
            </Layout.Sider>
        )
    }

    private onSelect = (param: SelectParam) => {
        this.setState({ selectKey: param.key })
    }

    private onOpenChange = (keys: string[]) => {
        this.setState({ openKeys: keys[keys.length - 1] ? [keys[keys.length - 1]] : [] })
    }
}
