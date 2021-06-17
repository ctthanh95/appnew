import React, { useState } from 'react'
import { TouchableOpacity, Text, View, TextInput } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { Checkbox } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import styles from './styles'
const Signup = ({ navigation }) => {
    const [checked, setChecked] = React.useState(false);
    return (
        <View style={{ flex: 1, padding: 10 }}>
            <Text style={styles.textHeader}>SIGN UP</Text>
            <View style={styles.wrapSocialNetwork}>
                <TouchableOpacity style={styles.wrapFacebook}>
                    <AntDesign name='facebook-square' size={35} color='#FFFFFF' />
                    <Text style={styles.textFacebook}>facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.wrapGoogle}>
                    <AntDesign name='google' size={35} color='#FFFFFF' />
                    <Text style={styles.textFacebook}>google</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.textOr}>OR</Text>
            <View style={styles.wrapAccount}>
                <Fontisto name='person' size={25} color='#000000' />
                <TextInput style={styles.textInput} placeholder='Your email'></TextInput>
            </View>
            <View style={styles.wrapAccount}>
                <Fontisto name='locked' size={25} color='#000000' />
                <TextInput style={styles.textInput} placeholder='Your password'></TextInput>
            </View>
            <View style={styles.wrapAccount}>
                <Fontisto name='locked' size={25} color='#000000' />
                <TextInput style={styles.textInput} placeholder='Retype your password'></TextInput>
            </View>
            <View style={styles.wrapCheckbox}>
                <Checkbox
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setChecked(!checked);
                    }}
                />
                <Text style={styles.textAccept}>I accept the </Text>
                <Text style={styles.textPolicy}>Terms of Use & Privacy Policy</Text>
            </View>
            <TouchableOpacity style={styles.wrapLogin}>
                <Text style={styles.textLogin}>CREATE ACCOUNT</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.wrapSignup} onPress={() => navigation.navigate('Signin')}>
                <Text style={[styles.textOr, { fontFamily: 'SignikaNegative-Light' }]}>Already have an account? </Text>
                <Text style={styles.textOr}>SIGN IN</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    navigation.goBack();
                }}
                style={styles.buttonBack}>
                <MaterialIcons name='arrow-back' size={25} color='#000000' />
            </TouchableOpacity>
        </View>
    )
}

export default Signup


