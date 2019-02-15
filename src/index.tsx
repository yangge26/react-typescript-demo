import 'src/theme/style/index.less'
import 'src/theme/style/initStyle'

import moment from 'moment'
moment.locale('zh-cn')

import * as React from 'react'
import * as ReactDOM from 'react-dom'

import registerServiceWorker from 'src/registerServiceWorker'
import App from 'src/views/app'

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement)

registerServiceWorker()
