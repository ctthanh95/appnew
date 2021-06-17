import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useSelector, useDispatch } from 'react-redux'
import { StatusLogout } from '../../../redux/actions'
import { GoogleSignin, LoginManager } from '@react-native-google-signin/google-signin'
import styles from './styles'
const Personal = ({ navigation }) => {
    const dispatch = useDispatch()
    const statusLogout = () => {
        dispatch(StatusLogout())
    }
    const { login, nameuser } = useSelector(state => state.shoesReducer)
    signOut = async () => {
        try {
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
        } catch (error) {
            console.error(error);
        }
    };
    isSignedInGG = async () => {
        const isSignedIn = await GoogleSignin.isSignedIn();
        if (isSignedIn === true) {
            signOut()
        } else {
            LoginManager.logOut();
        }
    };
    return (
        <SafeAreaView style={{ flex: 1 }}>
            {
                login ? (
                    <View style={styles.container}>
                        <Text style={styles.textHeader}>My Information</Text>
                        <TouchableOpacity style={styles.wrapItem} onPress={() => navigation.navigate('Account')}>
                            <View style={styles.wrapLeft}>
                                <Ionicons name="person-outline" size={25} color="#3F353D" />
                                <Text style={styles.textName}>{nameuser}</Text>
                            </View>
                            <MaterialIcons name="navigate-next" size={25} color="#8E7D85" />
                        </TouchableOpacity>
                        <View style={{ backgroundColor: '#C0C0C0', height: 1 }}></View>
                        <TouchableOpacity style={styles.wrapItem}>
                            <View style={styles.wrapLeft}>
                                <Ionicons name="ios-notifications-outline" size={25} color="#3F353D" />
                                <Text style={styles.textName}>Notification</Text>
                            </View>
                            <MaterialIcons name="navigate-next" size={25} color="#8E7D85" />
                        </TouchableOpacity>
                        <View style={{ backgroundColor: '#C0C0C0', height: 1 }}></View>
                        <TouchableOpacity style={styles.wrapItem}>
                            <View style={styles.wrapLeft}>
                                <Ionicons name="ios-cart-outline" size={25} color="#3F353D" />
                                <Text style={styles.textName}>Order</Text>
                            </View>
                            <MaterialIcons name="navigate-next" size={25} color="#8E7D85" />
                        </TouchableOpacity>
                        <View style={{ backgroundColor: '#C0C0C0', height: 1 }}></View>
                        <TouchableOpacity style={styles.wrapItem}>
                            <View style={styles.wrapLeft}>
                                <Ionicons name="help-circle-outline" size={25} color="#8E7D85" />
                                <Text style={styles.textName}>Contact</Text>
                            </View>
                            <MaterialIcons name="navigate-next" size={25} color="#8E7D85" />
                        </TouchableOpacity>
                        <View style={{ backgroundColor: '#C0C0C0', height: 1 }}></View>
                        <TouchableOpacity style={styles.wrapItem}>
                            <View style={styles.wrapLeft}>
                                <Ionicons name="md-code-outline" size={25} color="#3F353D" />
                                <Text style={styles.textName}>Version 1.0</Text>
                            </View>
                            <MaterialIcons name="navigate-next" size={25} color="#8E7D85" />
                        </TouchableOpacity>
                        <View style={{ backgroundColor: '#C0C0C0', height: 1 }}></View>
                        <TouchableOpacity style={styles.wrapItem} onPress={() => {
                            statusLogout()
                            isSignedInGG()
                        }}>
                            <View style={styles.wrapLeft}>
                                <Ionicons name="exit-outline" size={25} color="#3F353D" />
                                <Text style={[styles.textName, { color: 'red' }]}>Log out</Text>
                            </View>
                            <MaterialIcons name="navigate-next" size={25} color="#8E7D85" />
                        </TouchableOpacity>
                        <View style={{ backgroundColor: '#C0C0C0', height: 1 }}></View>
                    </View>
                ) : (
                    <ImageBackground
                        resizeMode='center'
                        style={{ width: '100%', height: '100%', justifyContent: 'flex-start', alignItems: 'center' }}
                        source={require('../../../assets/images/oops.png')}>
                        <TouchableOpacity
                            style={[styles.wrapPayment, { width: '90%' }]}
                            onPress={() => navigation.navigate('Signin')}
                        >
                            <Text style={[styles.textNumber, { color: '#FFFFFF' }]}>Login now</Text>
                        </TouchableOpacity>
                    </ImageBackground>

                )
            }
            <View style={{ height: 80 }}>
            </View>
        </SafeAreaView>
    )
}

export default Personal

