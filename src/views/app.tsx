import * as React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Subscription } from 'rxjs'

import { LocaleProvider } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'

import { store } from 'src/stores/auth'
import { IUserInfo } from 'src/models/auth/user-info'

import Main from 'src/views/index'
import AuthPage from 'src/views/auth'

// mockjs 模拟接口请求
import 'src/mock'

interface IState {
    userInfo: IUserInfo | null
}

export default class App extends React.PureComponent<{}, IState> {
    public readonly state: Readonly<IState> = {
        userInfo: store.getValue().userInfo
    }

    private listener$: Subscription

    componentDidMount() {
        this.listener$ = store.subscribe(auth => {
            this.setState({ userInfo: auth.userInfo })
        })
    }

    componentWillUnmount() {
        this.listener$.unsubscribe()
    }

    render() {
        // 获取用户缓存信息
        const isAuth = !!this.state.userInfo

        return (
            <LocaleProvider locale={zhCN}>
                <BrowserRouter>
                    <Switch>
                        <Route
                            path="/(login|register|forget-password)"
                            render={() => (!isAuth ? <AuthPage /> : <Redirect to="/" />)}
                        />
                        <Route path="/" component={() => (isAuth ? <Main /> : <Redirect to="/login" />)} />
                    </Switch>
                </BrowserRouter>
            </LocaleProvider>
        )
    }
}
