import React from 'react'
import { StyleSheet,  View, Button, Alert } from 'react-native'
import SearchAndFilter from './SearchAndFilter'
import Tab from '../home/Tab'

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <SearchAndFilter></SearchAndFilter>
            <Tab navigation = {navigation}></Tab>
            <View style={{height: 70}}>
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#FFFFFF',
        flex: 1,
    },
})
