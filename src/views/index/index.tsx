import './index.less'

import * as React from 'react'

import { Layout } from 'antd'

import { AppHeader } from './app_header'
import { NavLeft } from './nav_left'
import { Routes } from './routes'

class Main extends React.Component {

    public render() {
        return (
            <Layout id="app-container">
                <NavLeft />
                <Layout className="content_layout">
                    <AppHeader />
                    <Layout.Content id="app-content">
                        <Routes />
                    </Layout.Content>
                </Layout>
            </Layout>
        )
    }
}

export default Main
