import './app_header.less'

import * as React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

import { Avatar, Breadcrumb, Dropdown, Layout, Menu, message } from 'antd'
import { ClickParam } from 'antd/lib/menu'

import { getAuthStore } from 'src/stores/auth'
import { resetAuthStore } from 'src/stores/auth'

/**
 * 页面头部（面包屑 + 头像）
 */
export class AppHeader extends React.Component<{}, {}> {
    public render() {
        return (
            <Layout.Header className="app-header">
                <HeaderBreadcrumb />
                <Dropdown overlay={<DropdownMenu onAction={this.onClickMenu} />} trigger={['click']}>
                    <Avatar className="header-avatar" icon="user" src={''} />
                </Dropdown>
            </Layout.Header>
        )
    }

    /** 点击头像菜单 */
    private onClickMenu = async (event: ClickParam) => {
        switch (event.key) {
            case 'logout':
                this.logout()
                break
            default:
                break
        }
    }

    /** 退出登录 */
    private logout = async () => {
        const token = getAuthStore().token
        if (token) {
            try {
                message.success('成功退出登录')
                resetAuthStore()
            } catch (error) {
                message.success('退出登录错误')
            }
        } else {
            resetAuthStore()
        }
    }
}

// url与组件名称的对应关系
const breadcrumbNameMap = {
    '/home': '个人首页',
    '/user': '用户管理'
}

// 设置面包屑
const HeaderBreadcrumb = withRouter(props => {
    const { location } = props
    const pathSnippets = location.pathname.split('/').filter(i => i)

    const breadcrumbItems = pathSnippets.map((_, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
        let name = ''

        for (let key of Object.keys(breadcrumbNameMap)) {
            const reg = new RegExp('^' + key + '$', 'gi')
            if (reg.test(url)) {
                name = breadcrumbNameMap[key]
            }
        }

        return (
            !!name && (
                <Breadcrumb.Item key={url}>
                    {index !== 0 ? <Link to={url}>{name}</Link> : <span>{name}</span>}
                </Breadcrumb.Item>
            )
        )
    })

    return (
        <Breadcrumb className="header-breadcrumb" separator=">">
            {breadcrumbItems}
        </Breadcrumb>
    )
})

/**
 * 下拉菜单
 */
const DropdownMenu: React.StatelessComponent<{ onAction: (event: ClickParam) => void }> = props => {
    return (
        <Menu onClick={props.onAction}>
            {/* <Menu.Item key="userInfo">
                <NavLink to={`/account`}>我的账号</NavLink>
            </Menu.Item> */}
            <Menu.Item key="logout">退出账号</Menu.Item>
        </Menu>
    )
}
