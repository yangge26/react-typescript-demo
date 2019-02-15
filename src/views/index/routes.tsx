import * as React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { UserList } from 'src/views/user_manage/user_list'

export class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact={true} path="/" component={() => <Redirect to="/user" />} />
                <Route exact={true} path="/user" component={UserList} />
            </Switch>
        )
    }
}
