import './index.less'

import * as React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Layout } from 'antd'

import { Login } from 'src/views/auth/login'

export default class AuthPage extends React.Component {
    render() {
        return (
            <Layout>
                <Layout.Content id="pre-page-container">
                    <div id="pre-form-container">
                        <div className="pre-form">
                            <Switch>
                                <Route exact={true} path="/login" component={Login} />
                            </Switch>
                        </div>
                    </div>
                </Layout.Content>
            </Layout>
        )
    }
}
