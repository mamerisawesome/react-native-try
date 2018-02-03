import { TabNavigator } from 'react-navigation'

import Home from './components/Home/'
import Info from './components/Info/'

const Router = TabNavigator({
    Home: {
        screen: Home,
    },
    Info: {
        screen: Info
    }
}, {
    initialRouteName: 'Info',
    tabBarPosition: 'bottom'
})

export default Router
