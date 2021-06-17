import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Text, View, TextInput } from 'react-native'
import styles from './styles'
const SearchAndFilter = () => {
    return (
        <View style={styles.wrap}>
            <Text style={styles.textHeader}>Nike Collections</Text>
            <Text style={styles.textTitle}>The best of Nike, all in one place.</Text>
            <View style={styles.wrapSearchFilter}>
                <View style={styles.wrapSearch}>
                    <FontAwesome5 name='search' size={20} color='#3F353D' />
                    <TextInput style={styles.textSearch} placeholder='Search'></TextInput>
                </View>
                <View style={styles.wrapFilter}>
                    <FontAwesome5 name='filter' size={20} color='#3F353D' />
                </View>
            </View>
        </View>
    )
}
export default SearchAndFilter
