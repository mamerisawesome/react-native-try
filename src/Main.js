import React from 'react'
import { View } from 'react-native'

import Router from './Router'
import Navigation from './commons/Navigation'
import styles from './styles'

class Main extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Router style={styles.main} />
            </View>
        )
    }
}

export default Main
