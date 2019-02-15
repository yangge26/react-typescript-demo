import './login.less'

import * as React from 'react'

import { Button, Form, Icon, Input, message, Spin } from 'antd'
import { FormComponentProps } from 'antd/lib/form'

import { updateAuth } from 'src/stores/auth'

interface IProps extends FormComponentProps {}

interface IState {
    isLogin: boolean
}

class LoginPage extends React.Component<IProps, IState> {
    public state: Readonly<IState> = {
        isLogin: false
    }

    render() {
        const { isLogin } = this.state
        const { getFieldDecorator } = this.props.form

        return (
            <div className="pre-container">
                <h1>登录</h1>
                <Form onSubmit={this.onLogin}>
                    <Form.Item label="用户名" className="form-horizontal-block">
                        {getFieldDecorator('loginName', {
                            rules: [
                                { required: true, message: '必须填写用户名' },
                                {
                                    validator: (rules, value: string, cb) => {
                                        if (!value) {
                                            cb()
                                            return
                                        }
                                        if (value && value.indexOf(' ') >= 0) {
                                            cb('用户名不能包含空格')
                                            return
                                        }
                                        cb()
                                    }
                                }
                            ]
                        })(<Input prefix={<Icon type="user" />} placeholder="用户名" autoComplete="off" />)}
                    </Form.Item>
                    <Form.Item label="用户密码" className="form-horizontal-block">
                        {getFieldDecorator('password', { rules: [{ required: true, message: '必须填写用户密码' }] })(
                            <Input
                                prefix={<Icon type="lock" />}
                                placeholder="用户密码"
                                type="password"
                                autoComplete="off"
                            />
                        )}
                    </Form.Item>
                    <Form.Item className="pre-actions form-horizontal-block">
                        <Button type="primary" htmlType="submit" loading={isLogin}>
                            登录
                        </Button>
                    </Form.Item>
                </Form>

                <div className="pre-loading" style={{ display: isLogin ? 'flex' : 'none' }}>
                    <Spin />
                </div>
            </div>
        )
    }

    private onLogin = (event: React.SyntheticEvent<HTMLFontElement>) => {
        event.preventDefault()
        event.stopPropagation()

        if (this.state.isLogin) {
            return
        }

        this.props.form.validateFields(errors => {
            if (!errors) {
                this.doLogin()
            }
        })
    }

    // 登录成功
    private doLogin = async () => {
        if (this.state.isLogin) {
            return
        }
        this.setState({ isLogin: true })
        try {
            setTimeout(() => {
                message.success('登录成功')
                updateAuth({ token: '123456' })
                this.getUserInfo()
                // tslint:disable-next-line:align
            }, 500)
        } catch (err) {
            this.setState({ isLogin: false })
        }
    }

    // 获取用户信息
    private getUserInfo = async () => {
        try {
            setTimeout(() => {
                message.success('获取用户信息成功')
                updateAuth({ userInfo: { id: 26, username: 'yangge' } })
                // tslint:disable-next-line:align
            }, 500)
        } catch (err) {
            this.setState({ isLogin: false })
        }
    }
}

export const Login = Form.create<IProps>()(LoginPage)
